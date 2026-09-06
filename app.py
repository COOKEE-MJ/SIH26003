import os

from flask import Flask, abort, flash, render_template, request, jsonify, redirect, url_for
from database import (
    init_db,
    get_all_patients,
    add_patient,
    get_patient,
    save_session,
    get_patient_sessions,
)
app = Flask(__name__)
app.secret_key = os.environ.get('FLASK_SECRET_KEY', 'dev-only-change-me')


def _parse_integer(value, field_name):
    if isinstance(value, bool):
        raise ValueError(f'{field_name} must be an integer.')
    try:
        parsed = int(value)
    except (TypeError, ValueError):
        raise ValueError(f'{field_name} must be an integer.') from None
    if isinstance(value, float) and not value.is_integer():
        raise ValueError(f'{field_name} must be an integer.')
    return parsed


def compute_next_difficulty(score, total, current_difficulty):
    score = _parse_integer(score, 'score')
    total = _parse_integer(total, 'total')
    current_difficulty = _parse_integer(current_difficulty, 'difficulty')
    if total <= 0:
        raise ValueError('total must be greater than zero.')
    if score < 0 or score > total:
        raise ValueError('score must be between zero and total.')
    if current_difficulty < 1 or current_difficulty > 5:
        raise ValueError('difficulty must be between 1 and 5.')
    accuracy = score / total
    if accuracy >= 0.8 and current_difficulty < 5:
        return current_difficulty + 1
    elif accuracy < 0.5 and current_difficulty > 1:
        return current_difficulty - 1
    return current_difficulty
def get_latest_difficulty(patient_id, game_type):

    # A session's 'difficulty' field is the level it was PLAYED at, not the
    # level the next round should be. So to know what difficulty to render
    # next, take the last session's actual result and run it back through
    # compute_next_difficulty - the same rule used when the score was submitted.
    sessions = get_patient_sessions(patient_id) # oldest -> newest
    matching = [s for s in sessions if s['game_type'] == game_type]
    if not matching:
        return 1
    last = matching[-1]
    return compute_next_difficulty(last['score'], last['total'], last['difficulty'])
@app.route('/')
def home():
    patients = get_all_patients()
    return render_template('index.html', patients=patients)
@app.route('/patient/add', methods=['POST'])
def add_patient_route():
    name = request.form.get('name')
    age_value = request.form.get('age')
    sex = request.form.get('sex')
    try:
        age = None if not age_value else _parse_integer(age_value, 'Age')
        if sex not in ('Male', 'Female'):
            raise ValueError("Sex must be 'Male' or 'Female'.")
        add_patient(name, age, sex)
    except ValueError as e:
        flash(f'Could not add patient: {e}', 'error')
    return redirect(url_for('home'))
@app.route('/patient/<int:patient_id>/play')
def play_select(patient_id):
    patient = get_patient(patient_id)
    if patient is None:
        abort(404)
    return render_template('play.html', patient=patient)
@app.route('/game/matching/<int:patient_id>')
def game_matching(patient_id):
    patient = get_patient(patient_id)
    if patient is None:
        abort(404)
    difficulty = get_latest_difficulty(patient_id, 'matching')
    return render_template('game_matching.html', patient=patient, difficulty=difficulty)
@app.route('/api/score', methods=['POST'])
def submit_score():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({'error': 'Request body must be a JSON object.'}), 400

    try:
        required_fields = ('patient_id', 'game_type', 'difficulty', 'score', 'total')
        missing_fields = [field for field in required_fields if field not in data]
        if missing_fields:
            raise ValueError(f"Missing required field(s): {', '.join(missing_fields)}.")

        patient_id = _parse_integer(data['patient_id'], 'patient_id')
        game_type = data['game_type']
        if not isinstance(game_type, str) or not game_type.strip():
            raise ValueError('game_type must be a non-empty string.')
        difficulty = _parse_integer(data['difficulty'], 'difficulty')
        score = _parse_integer(data['score'], 'score')
        total = _parse_integer(data['total'], 'total')
        compute_next_difficulty(score, total, difficulty)
        if get_patient(patient_id) is None:
            return jsonify({'error': f'patient_id {patient_id} does not exist.'}), 404
        save_session(patient_id, game_type, difficulty, score, total)
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    next_difficulty = compute_next_difficulty(score, total, difficulty)
    return jsonify({'next_difficulty': next_difficulty})
@app.route('/api/patient/<int:patient_id>/sessions')
def patient_sessions_route(patient_id):
    if get_patient(patient_id) is None:
        return jsonify({'error': f'patient_id {patient_id} does not exist.'}), 404
    sessions = get_patient_sessions(patient_id)
    return jsonify(sessions)
@app.route('/dashboard/<int:patient_id>')
def dashboard(patient_id):
    patient = get_patient(patient_id)
    if patient is None:
        abort(404)
    return render_template('dashboard.html', patient=patient)
if __name__ == '__main__':
    init_db()
    debug = os.environ.get('FLASK_DEBUG', '').lower() in ('1', 'true', 'yes')
    # This development server is not an authentication or CSRF boundary.
    app.run(debug=debug)