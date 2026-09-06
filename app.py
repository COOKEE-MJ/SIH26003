from flask import Flask, render_template, request, jsonify, redirect, url_for
from database import (
 init_db,
 get_all_patients,
 add_patient,
 get_patient,
 save_session,
 get_patient_sessions,
)
app = Flask(__name__)
def compute_next_difficulty(score, total, current_difficulty):
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
    age = request.form.get('age')
    sex = request.form.get('sex')
    try:
        add_patient(name, age, sex)
    except ValueError as e:
        print(f"Could not add patient: {e}")
    return redirect(url_for('home'))
@app.route('/patient/<int:patient_id>/play')
def play_select(patient_id):
    patient = get_patient(patient_id)
    return render_template('play.html', patient=patient)
@app.route('/game/matching/<int:patient_id>')
def game_matching(patient_id):
    patient = get_patient(patient_id)
    difficulty = get_latest_difficulty(patient_id, 'matching')
    return render_template('game_matching.html', patient=patient, difficulty=difficulty)
@app.route('/api/score', methods=['POST'])
def submit_score():
    data = request.get_json()
    patient_id = data['patient_id']
    game_type = data['game_type']
    difficulty = data['difficulty']
    score = data['score']
    total = data['total']
    try:
        save_session(patient_id, game_type, difficulty, score, total)
    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    next_difficulty = compute_next_difficulty(score, total, difficulty)
    return jsonify({'next_difficulty': next_difficulty})
@app.route('/api/patient/<int:patient_id>/sessions')
def patient_sessions_route(patient_id):
    sessions = get_patient_sessions(patient_id)
    return jsonify(sessions)
@app.route('/dashboard/<int:patient_id>')
def dashboard(patient_id):
    patient = get_patient(patient_id)
    return render_template('dashboard.html', patient=patient)
if __name__ == '__main__':
    init_db()
    app.run(debug=True)