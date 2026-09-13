import os
from functools import wraps

from flask import (
    Flask,
    abort,
    flash,
    jsonify,
    redirect,
    render_template,
    request,
    session,
    url_for,
)
from werkzeug.security import check_password_hash, generate_password_hash
from database import (
    init_db,
    get_all_patients,
    add_patient,
    update_patient,
    create_caregiver,
    get_caregiver_by_email,
    get_caregiver_by_id,
    update_caregiver,
    get_patient,
    save_session,
    get_patient_sessions,
    add_family_note,
    get_family_notes,
    add_care_routine,
    get_care_routines,
    toggle_care_routine,
    update_care_routine,
    delete_care_routine,
    reset_daily_routines,
)
app = Flask(__name__)
app.secret_key = os.environ.get('FLASK_SECRET_KEY', 'dev-only-change-me')


@app.context_processor
def inject_global_data():
    caregiver = None
    patient = None
    caregiver_patients = []
    if 'caregiver_id' in session:
        caregiver = get_caregiver_by_id(session['caregiver_id'])
        patient = current_patient()
        caregiver_patients = get_all_patients(session['caregiver_id'])
    return dict(
        current_caregiver=caregiver,
        active_patient=patient,
        caregiver_patients=caregiver_patients,
    )


def login_required(view):
    @wraps(view)
    def wrapped(*args, **kwargs):
        if 'caregiver_id' not in session:
            return redirect(url_for('landing'))
        return view(*args, **kwargs)

    return wrapped


def current_patient():
    if 'caregiver_id' not in session:
        return None
    caregiver_id = session['caregiver_id']
    if 'patient_id' in session and session['patient_id']:
        pt = get_patient(session['patient_id'], caregiver_id)
        if pt:
            return pt
    patients = get_all_patients(caregiver_id)
    if patients:
        session['patient_id'] = patients[0]['id']
        return patients[0]
    session.pop('patient_id', None)
    return None


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
def landing():
    if 'caregiver_id' in session:
        return redirect(url_for('home'))
    return render_template('auth_gate.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email', '').strip().lower()
        password = request.form.get('password', '')
        caregiver = get_caregiver_by_email(email)
        if not caregiver or not check_password_hash(caregiver['password_hash'], password):
            return render_template('login.html', error='Email or password is incorrect.'), 401
        session.clear()
        session['caregiver_id'] = caregiver['id']
        session['caregiver_name'] = caregiver['name']
        return redirect(url_for('home'))
    return render_template('login.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form.get('name', '').strip()
        email = request.form.get('email', '').strip().lower()
        contact = request.form.get('contact', '').strip()
        password = request.form.get('password', '')
        confirmation = request.form.get('confirmation', '')
        if not contact:
            return render_template('register.html', error='Please provide your contact number.'), 400
        if len(password) < 6:
            return render_template('register.html', error='Use at least 6 characters for your password.'), 400
        if password != confirmation:
            return render_template('register.html', error='The passwords do not match.'), 400
        try:
            caregiver_id = create_caregiver(name, email, generate_password_hash(password), contact=contact)
        except ValueError as error:
            return render_template('register.html', error=str(error)), 400
        session['caregiver_id'] = caregiver_id
        session['caregiver_name'] = name
        return redirect(url_for('home'))
    return render_template('register.html')


@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('landing'))


def compute_patient_game_summary(patient_id):
    if not patient_id:
        return {
            'has_sessions': False,
            'sessions': [],
            'total_sessions': 0,
            'avg_accuracy': 0,
            'latest_score': 0,
            'avg_response_time': 0,
            'avg_reaction_time': 0,
            'avg_duration': 0,
            'accuracy_trend': 'No data',
            'empty_state_msg': 'No game activity yet. A progress summary will be available after the patient completes a game.',
            'disclaimer': 'This summary reflects in-app game performance only. It is not a medical assessment, diagnosis, or treatment recommendation.',
        }

    sessions = get_patient_sessions(patient_id)
    if not sessions:
        return {
            'has_sessions': False,
            'sessions': [],
            'total_sessions': 0,
            'avg_accuracy': 0,
            'latest_score': 0,
            'avg_response_time': 0,
            'avg_reaction_time': 0,
            'avg_duration': 0,
            'accuracy_trend': 'No data',
            'empty_state_msg': 'No game activity yet. A progress summary will be available after the patient completes a game.',
            'disclaimer': 'This summary reflects in-app game performance only. It is not a medical assessment, diagnosis, or treatment recommendation.',
        }

    accuracies = []
    for s in sessions:
        if s.get('accuracy') is not None:
            accuracies.append(float(s['accuracy']))
        elif s.get('total'):
            accuracies.append(round((float(s['score']) / float(s['total'])) * 100.0, 1))
        else:
            accuracies.append(0.0)

    avg_acc = round(sum(accuracies) / len(accuracies), 1) if accuracies else 0.0
    latest_acc = round(accuracies[-1], 1) if accuracies else 0.0

    resp_times = [float(s['response_time']) for s in sessions if s.get('response_time') is not None]
    avg_resp = round(sum(resp_times) / len(resp_times), 2) if resp_times else 0.0

    rx_times = [float(s['reaction_time']) for s in sessions if s.get('reaction_time') is not None]
    avg_rx = round(sum(rx_times) / len(rx_times), 2) if rx_times else 0.0

    durations = [float(s['duration_seconds']) for s in sessions if s.get('duration_seconds') is not None]
    avg_dur = round(sum(durations) / len(durations), 1) if durations else 0.0

    if len(accuracies) >= 2:
        diff = round(accuracies[-1] - accuracies[0], 1)
        acc_trend = f"{'+' if diff >= 0 else ''}{diff}% vs first game"
    else:
        acc_trend = "First session recorded"

    return {
        'has_sessions': True,
        'sessions': sessions,
        'total_sessions': len(sessions),
        'avg_accuracy': avg_acc,
        'latest_score': latest_acc,
        'avg_response_time': avg_resp,
        'avg_reaction_time': avg_rx,
        'avg_duration': avg_dur,
        'accuracy_trend': acc_trend,
        'empty_state_msg': 'No game activity yet. A progress summary will be available after the patient completes a game.',
        'disclaimer': 'This summary reflects in-app game performance only. It is not a medical assessment, diagnosis, or treatment recommendation.',
    }


@app.route('/home')
@login_required
def home():
    patient = current_patient()
    summary = compute_patient_game_summary(patient['id'] if patient else None)
    sessions = summary['sessions']
    stats = {
        'has_played': summary['has_sessions'],
        'today_score': int(round(summary['latest_score'])) if summary['has_sessions'] else None,
        'weekly_trend': summary['accuracy_trend'] if summary['has_sessions'] else None,
        'total_sessions': summary['total_sessions'],
        'avg_score': f"{summary['avg_accuracy']}%",
        'avg_response_time': f"{summary['avg_response_time']}s" if summary['avg_response_time'] else "—",
        'avg_reaction_time': f"{summary['avg_reaction_time']}s" if summary['avg_reaction_time'] else "—",
        'gameplay_status': f"Active ({summary['total_sessions']} session{'s' if summary['total_sessions'] != 1 else ''})" if summary['has_sessions'] else "No game activity yet",
        'empty_state_msg': summary['empty_state_msg'],
        'disclaimer': summary['disclaimer'],
    }

    reminders = []
    if patient:
        reminders = get_care_routines(patient['id'])

    family_notes = []
    if patient:
        family_notes = get_family_notes(patient['id'])

    return render_template(
        'home.html',
        caregiver_name=session.get('caregiver_name'),
        patient=patient,
        stats=stats,
        summary=summary,
        reminders=reminders,
        family_notes=family_notes,
        sessions=sessions
    )


@app.route('/games')
@login_required
def games():
    patient = current_patient()
    if patient is None:
        return redirect(url_for('dashboard_gate'))
    return render_template('games.html', patient=patient)
@app.route('/patient/add', methods=['POST'])
@login_required
def add_patient_route():
    name = (request.form.get('name') or '').strip()
    age_value = request.form.get('age')
    sex = request.form.get('sex')

    try:
        if not name:
            raise ValueError("Patient name cannot be empty.")
        age = None if not age_value else _parse_integer(age_value, 'Age')
        if sex not in ('Male', 'Female'):
            raise ValueError("Sex must be 'Male' or 'Female'.")
        new_id = add_patient(name, age, sex, caregiver_id=session['caregiver_id'])
        session['patient_id'] = new_id
        flash('Patient added successfully.', 'success')
        return redirect(url_for('home'))
    except ValueError as e:
        flash(f'Could not add patient: {e}', 'error')
        return redirect(url_for('home'))


@app.route('/dashboard/register-patient', methods=['GET', 'POST'])
@login_required
def dashboard_gate():
    if request.method == 'POST':
        try:
            name = (request.form.get('patient_name') or '').strip()
            age = _parse_integer(request.form.get('patient_age'), 'Age')
            sex = request.form.get('sex')
            if not name:
                raise ValueError('Patient name is required.')
            if sex not in ('Male', 'Female'):
                raise ValueError("Sex must be 'Male' or 'Female'.")
            new_id = add_patient(
                name,
                age,
                sex,
                caregiver_id=session['caregiver_id'],
                diagnosis_stage=request.form.get('diagnosis_stage'),
                relation=request.form.get('relation'),
                contact=request.form.get('contact'),
            )
            session['patient_id'] = new_id
        except (TypeError, ValueError) as error:
            return render_template('dashboard_gate.html', error=str(error)), 400
        flash('Patient profile registered. Their dashboard is ready.', 'success')
        return redirect(url_for('dashboard', patient_id=new_id))
    return render_template('dashboard_gate.html')


@app.route('/patient/select/<int:patient_id>')
@login_required
def select_patient(patient_id):
    patient = get_patient(patient_id, session['caregiver_id'])
    if patient is None:
        abort(404)
    session['patient_id'] = patient['id']
    next_url = request.args.get('next') or request.referrer or url_for('home')
    return redirect(next_url)


@app.route('/patient/<int:patient_id>/play')
@login_required
def play_select(patient_id):
    patient = get_patient(patient_id, session['caregiver_id'])
    if patient is None:
        abort(404)
    session['patient_id'] = patient['id']
    notes = get_family_notes(patient_id)
    latest_note = notes[0] if notes else None
    return render_template('play.html', patient=patient, latest_note=latest_note)


@app.route('/game/matching/<int:patient_id>')
@login_required
def game_matching(patient_id):
    patient = get_patient(patient_id, session['caregiver_id'])
    if patient is None:
        abort(404)
    session['patient_id'] = patient['id']
    # ?difficulty=N lets client pass time-adjusted difficulty override
    requested = request.args.get('difficulty', type=int)
    if requested and 1 <= requested <= 5:
        difficulty = requested
    else:
        difficulty = get_latest_difficulty(patient_id, 'matching')
    return render_template('game_matching.html', patient=patient, difficulty=difficulty)


@app.route('/game/routine/<int:patient_id>')
@login_required
def game_routine(patient_id):
    patient = get_patient(patient_id, session['caregiver_id'])
    if patient is None:
        abort(404)
    session['patient_id'] = patient['id']
    # routine_length maps directly to difficulty column (1=2 steps, 2=3 steps, 3=4 steps)
    # get_latest_difficulty returns 1 for new patients — correct starting point
    raw_len = get_latest_difficulty(patient_id, 'routine_sequence')
    # Hard cap: never exceed length 3 (= 4 activities max)
    routine_length = min(raw_len, 3)
    return render_template('game_routine.html', patient=patient, routine_length=routine_length)


@app.route('/api/score', methods=['POST'])
def submit_score():
    if 'caregiver_id' not in session:
        return jsonify({'error': 'Sign in required.'}), 401
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
        accuracy = data.get('accuracy')
        reaction_time = data.get('reaction_time')
        response_time = data.get('response_time')
        duration_seconds = data.get('duration_seconds')
        next_difficulty = compute_next_difficulty(score, total, difficulty)
    except ValueError as e:
        return jsonify({'error': str(e)}), 400

    if get_patient(patient_id, session['caregiver_id']) is None:
        return jsonify({'error': f'patient_id {patient_id} does not exist.'}), 404

    session_id = save_session(
        patient_id,
        game_type,
        difficulty,
        score,
        total,
        accuracy=accuracy,
        reaction_time=reaction_time,
        response_time=response_time,
        duration_seconds=duration_seconds,
    )
    return jsonify({
        'next_difficulty': next_difficulty,
        'session_id': session_id,
        'patient_id': patient_id,
    })


@app.route('/api/patient/<int:patient_id>/sessions')
def patient_sessions_route(patient_id):
    if 'caregiver_id' not in session:
        return jsonify({'error': 'Sign in required.'}), 401
    if get_patient(patient_id, session['caregiver_id']) is None:
        return jsonify({'error': f'patient_id {patient_id} does not exist.'}), 404
    sessions = get_patient_sessions(patient_id)
    return jsonify(sessions)


@app.route('/dashboard/<int:patient_id>')
@login_required
def dashboard(patient_id):
    patient = get_patient(patient_id, session['caregiver_id'])
    if patient is None:
        abort(404)
    session['patient_id'] = patient['id']
    active_tab = request.args.get('tab', 'caregiver')
    family_notes = get_family_notes(patient['id'])
    summary = compute_patient_game_summary(patient['id'])
    return render_template(
        'dashboard.html',
        patient=patient,
        active_tab=active_tab,
        family_notes=family_notes,
        summary=summary,
        sessions=summary['sessions'],
    )


@app.route('/dashboard')
@login_required
def dashboard_home():
    patient = current_patient()
    if patient is None:
        return redirect(url_for('dashboard_gate'))
    session['patient_id'] = patient['id']
    active_tab = request.args.get('tab', 'caregiver')
    family_notes = get_family_notes(patient['id'])
    summary = compute_patient_game_summary(patient['id'])
    return render_template(
        'dashboard.html',
        patient=patient,
        active_tab=active_tab,
        family_notes=family_notes,
        summary=summary,
        sessions=summary['sessions'],
    )


@app.route('/doctor')
@app.route('/doctor/<int:patient_id>')
@login_required
def doctor_report(patient_id=None):
    if patient_id is None:
        patient = current_patient()
    else:
        patient = get_patient(patient_id, session['caregiver_id'])
    if patient is None:
        return redirect(url_for('dashboard_gate'))
    session['patient_id'] = patient['id']
    family_notes = get_family_notes(patient['id'])
    summary = compute_patient_game_summary(patient['id'])
    return render_template(
        'dashboard.html',
        patient=patient,
        active_tab='doctor',
        family_notes=family_notes,
        summary=summary,
        sessions=summary['sessions'],
    )


@app.route('/api/patient/<int:patient_id>/notes', methods=['GET', 'POST'])
def patient_notes_route(patient_id):
    if 'caregiver_id' not in session:
        return jsonify({'error': 'Sign in required.'}), 401
    
    patient = get_patient(patient_id, session['caregiver_id'])
    if patient is None:
        return jsonify({'error': f'patient_id {patient_id} does not exist.'}), 404

    if request.method == 'POST':
        data = request.get_json(silent=True) or request.form
        if not data:
            return jsonify({'error': 'No data provided.'}), 400
        author = (data.get('author') or '').strip()
        if not author:
            author = session.get('caregiver_name') or 'Family Caregiver'
        text = (data.get('text') or '').strip()
        if not text:
            return jsonify({'error': 'Note text cannot be empty.'}), 400
        anchor_type = (data.get('anchor_type') or 'Memory Note').strip()
        try:
            new_note = add_family_note(
                patient_id=patient_id,
                author=author,
                text=text,
                caregiver_id=session['caregiver_id'],
                anchor_type=anchor_type
            )
            return jsonify({'success': True, 'note': new_note}), 201
        except Exception as e:
            return jsonify({'error': str(e)}), 400

    notes = get_family_notes(patient_id)
    return jsonify(notes)


@app.route('/api/notes/add', methods=['POST'])
@login_required
def add_note_generic_route():
    data = request.get_json(silent=True) or request.form
    if not data:
        return jsonify({'error': 'No data provided.'}), 400
    
    patient_id = data.get('patient_id')
    if patient_id:
        try:
            patient_id = _parse_integer(patient_id, 'patient_id')
        except ValueError as e:
            return jsonify({'error': str(e)}), 400
    else:
        pat = current_patient()
        if not pat:
            return jsonify({'error': 'Please register a patient first before adding family notes.'}), 400
        patient_id = pat['id']

    patient = get_patient(patient_id, session['caregiver_id'])
    if patient is None:
        return jsonify({'error': 'Please register a patient first before adding family notes.'}), 400

    author = (data.get('author') or '').strip()
    if not author:
        author = session.get('caregiver_name') or 'Family Caregiver'
    text = (data.get('text') or '').strip()
    if not text:
        return jsonify({'error': 'Note text cannot be empty.'}), 400
    anchor_type = (data.get('anchor_type') or 'Memory Note').strip()

    try:
        new_note = add_family_note(
            patient_id=patient_id,
            author=author,
            text=text,
            caregiver_id=session['caregiver_id'],
            anchor_type=anchor_type
        )
        return jsonify({'success': True, 'note': new_note}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/profile/caregiver', methods=['POST'])
@login_required
def update_caregiver_profile():
    data = request.get_json(silent=True) or request.form
    name = (data.get('name') or '').strip()
    email = (data.get('email') or '').strip().lower()
    contact = (data.get('contact') or '').strip()
    if not name:
        return jsonify({'error': 'Caregiver name cannot be empty.'}), 400
    if not email or '@' not in email:
        return jsonify({'error': 'A valid email address is required.'}), 400
    try:
        update_caregiver(session['caregiver_id'], name, email, contact=contact)
        session['caregiver_name'] = name
        return jsonify({'success': True, 'name': name, 'email': email, 'contact': contact})
    except ValueError as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/profile/patient', methods=['POST'])
@login_required
def update_patient_profile():
    data = request.get_json(silent=True) or request.form
    patient = current_patient()
    if not patient:
        return jsonify({'error': 'No active patient found.'}), 404
    name = (data.get('name') or '').strip()
    if not name:
        return jsonify({'error': 'Patient name cannot be empty.'}), 400
    age = data.get('age')
    sex = data.get('sex') or patient.get('sex') or 'Female'
    diagnosis_stage = data.get('diagnosis_stage')
    relation = data.get('relation')
    contact = data.get('contact')
    try:
        age_int = _parse_integer(age, 'Age') if age not in (None, '') else None
        update_patient(
            patient['id'],
            name=name,
            age=age_int,
            sex=sex,
            diagnosis_stage=diagnosis_stage,
            relation=relation,
            contact=contact,
            caregiver_id=session['caregiver_id']
        )
        return jsonify({
            'success': True,
            'name': name,
            'age': age_int,
            'sex': sex,
            'diagnosis_stage': diagnosis_stage,
            'relation': relation,
            'contact': contact
        })
    except ValueError as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/routines/add', methods=['POST'])
@login_required
def add_routine_api():
    patient = current_patient()
    if patient is None:
        return jsonify({'error': 'Please register a patient first before adding a routine activity.'}), 400

    data = request.get_json(silent=True) or request.form
    title = (data.get('title') or '').strip()
    time_str = (data.get('time') or data.get('time_str') or '').strip()
    category = (data.get('category') or 'general').strip()
    frequency = (data.get('frequency') or 'daily').strip()

    if not title:
        return jsonify({'error': 'Routine title is required.'}), 400
    if not time_str:
        return jsonify({'error': 'Routine scheduled time is required.'}), 400

    try:
        routine = add_care_routine(
            patient_id=patient['id'],
            title=title,
            time_str=time_str,
            category=category,
            frequency=frequency,
            caregiver_id=session.get('caregiver_id')
        )
        return jsonify({'success': True, 'routine': routine}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/routines/<int:routine_id>/toggle', methods=['POST'])
@login_required
def toggle_routine_api(routine_id):
    patient = current_patient()
    if patient is None:
        return jsonify({'error': 'No active patient.'}), 400

    data = request.get_json(silent=True) or {}
    is_completed = data.get('is_completed')

    try:
        updated = toggle_care_routine(routine_id, patient['id'], is_completed)
        return jsonify({'success': True, 'routine': updated})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/routines/<int:routine_id>/update', methods=['POST'])
@login_required
def update_routine_api(routine_id):
    patient = current_patient()
    if patient is None:
        return jsonify({'error': 'No active patient.'}), 400

    data = request.get_json(silent=True) or request.form
    title = (data.get('title') or '').strip()
    time_str = (data.get('time') or data.get('time_str') or '').strip()
    category = (data.get('category') or 'general').strip()
    frequency = (data.get('frequency') or 'daily').strip()

    if not title:
        return jsonify({'error': 'Routine title is required.'}), 400
    if not time_str:
        return jsonify({'error': 'Routine scheduled time is required.'}), 400

    try:
        updated = update_care_routine(routine_id, patient['id'], title, time_str, category, frequency)
        return jsonify({'success': True, 'routine': updated})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/routines/<int:routine_id>/delete', methods=['POST', 'DELETE'])
@login_required
def delete_routine_api(routine_id):
    patient = current_patient()
    if patient is None:
        return jsonify({'error': 'No active patient.'}), 400

    try:
        delete_care_routine(routine_id, patient['id'])
        return jsonify({'success': True, 'routine_id': routine_id})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/api/routines/reset-daily', methods=['POST'])
@login_required
def reset_daily_routines_api():
    patient = current_patient()
    if patient is None:
        return jsonify({'error': 'No active patient.'}), 400

    try:
        reset_daily_routines(patient['id'])
        refreshed = get_care_routines(patient['id'])
        return jsonify({'success': True, 'routines': refreshed})
    except Exception as e:
        return jsonify({'error': str(e)}), 400


if __name__ == '__main__':
    init_db()
    debug = os.environ.get('FLASK_DEBUG', 'true').lower() in ('1', 'true', 'yes')
    # This development server is not an authentication or CSRF boundary.
    app.run(debug=debug)
