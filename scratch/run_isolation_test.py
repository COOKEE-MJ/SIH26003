import sys
import os
sys.path.insert(0, os.path.abspath(os.path.dirname(__file__) + '/..'))
from scratch.test_patient_isolation_and_stats import TestPatientIsolationAndStats

t = TestPatientIsolationAndStats()
t.setUp()

with open('scratch/test_output.txt', 'w', encoding='utf-8') as out:
    for m in ['test_unregistered_patient_shows_no_scores_or_fake_status', 'test_registered_patient_with_zero_sessions_shows_pending', 'test_registered_patient_with_sessions_shows_their_real_data_only']:
        try:
            getattr(t, m)()
            out.write(f'{m}: PASS\n')
        except Exception as e:
            out.write(f'{m}: FAIL -> {e}\n')

