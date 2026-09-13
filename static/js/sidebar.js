/**
 * SmritiSetu - Sidebar Navigation & Profile Editing Engine
 * Handles slide-over sidebar drawer, profile view, and line-pencil edit modals.
 */

(function () {
    'use strict';

    // ── DOM Getters (dynamic to work on any page and after DOM mutations) ──
    function getSidebar() { return document.getElementById('app-sidebar'); }
    function getBackdrop() { return document.getElementById('sidebar-backdrop'); }
    function getToggleBtns() { return document.querySelectorAll('#sidebar-toggle-btn, .sidebar-toggle-btn, #floating-sidebar-btn, .floating-sidebar-trigger, [data-open-sidebar]'); }
    function getCgModal() { return document.getElementById('modal-edit-caregiver'); }
    function getPtModal() { return document.getElementById('modal-edit-patient'); }
    function getNoteModal() { return document.getElementById('modal-add-memory-note'); }

    // ── Sidebar Open / Close ──
    function openSidebar(e) {
        if (e && typeof e.stopPropagation === 'function') {
            e.stopPropagation();
        }
        const sidebar = getSidebar();
        const backdrop = getBackdrop();
        if (!sidebar || !backdrop) return;
        sidebar.classList.add('is-open');
        backdrop.classList.add('is-visible');
        document.body.classList.add('sidebar-active');
        getToggleBtns().forEach(btn => btn.setAttribute('aria-expanded', 'true'));
    }

    function closeSidebar(e) {
        if (e && typeof e.stopPropagation === 'function') {
            e.stopPropagation();
        }
        const sidebar = getSidebar();
        const backdrop = getBackdrop();
        if (!sidebar || !backdrop) return;
        sidebar.classList.remove('is-open');
        backdrop.classList.remove('is-visible');
        document.body.classList.remove('sidebar-active');
        getToggleBtns().forEach(btn => btn.setAttribute('aria-expanded', 'false'));
    }

    function toggleSidebar(e) {
        if (e && typeof e.stopPropagation === 'function') {
            e.stopPropagation();
        }
        const sidebar = getSidebar();
        if (sidebar && sidebar.classList.contains('is-open')) {
            closeSidebar(e);
        } else {
            openSidebar(e);
        }
    }

    // Expose globally on window so inline onclick="openSidebar(event)" works reliably
    window.openSidebar = openSidebar;
    window.closeSidebar = closeSidebar;
    window.toggleSidebar = toggleSidebar;

    // Global event delegation for all toggle and close buttons
    document.addEventListener('click', (e) => {
        const openTrigger = e.target.closest('#sidebar-toggle-btn, .sidebar-toggle-btn, #floating-sidebar-btn, .floating-sidebar-trigger, [data-open-sidebar]');
        if (openTrigger) {
            e.preventDefault();
            e.stopPropagation();
            // If the element has an inline onclick handler, let the inline handler manage it
            if (openTrigger.hasAttribute('onclick')) {
                return;
            }
            toggleSidebar(e);
            return;
        }

        const closeTrigger = e.target.closest('#sidebar-close-btn, .sidebar-close-btn, [data-close-sidebar]');
        if (closeTrigger) {
            e.preventDefault();
            e.stopPropagation();
            if (closeTrigger.hasAttribute('onclick')) {
                return;
            }
            closeSidebar(e);
            return;
        }

        const backdrop = getBackdrop();
        if (backdrop && e.target === backdrop) {
            closeSidebar(e);
            if (typeof closeCaregiverEditModal === 'function') closeCaregiverEditModal();
            if (typeof closePatientEditModal === 'function') closePatientEditModal();
            if (typeof closeMemoryNoteModal === 'function') closeMemoryNoteModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const cgModal = getCgModal();
            const ptModal = getPtModal();
            const noteModal = getNoteModal();
            if (noteModal && noteModal.classList.contains('is-visible')) {
                if (typeof closeMemoryNoteModal === 'function') closeMemoryNoteModal();
            } else if (cgModal && cgModal.classList.contains('is-visible')) {
                if (typeof closeCaregiverEditModal === 'function') closeCaregiverEditModal();
            } else if (ptModal && ptModal.classList.contains('is-visible')) {
                if (typeof closePatientEditModal === 'function') closePatientEditModal();
            } else {
                closeSidebar();
            }
        }
    });

    // ── Caregiver Edit Modal ──
    window.openCaregiverEditModal = function () {
        const cgModal = getCgModal();
        if (!cgModal) return;
        const currentName = document.getElementById('sidebar-cg-name')?.textContent?.trim() || '';
        const currentEmail = document.getElementById('sidebar-cg-email')?.textContent?.trim() || '';
        const currentContact = document.getElementById('sidebar-cg-contact')?.textContent?.trim() || '';

        const nameInput = document.getElementById('edit-cg-name');
        const emailInput = document.getElementById('edit-cg-email');
        const contactInput = document.getElementById('edit-cg-contact');
        const errorEl = document.getElementById('edit-cg-error');

        if (nameInput) nameInput.value = currentName;
        if (emailInput) emailInput.value = currentEmail;
        if (contactInput) contactInput.value = currentContact === '—' ? '' : currentContact;
        if (errorEl) errorEl.textContent = '';

        cgModal.classList.add('is-visible');
        if (nameInput) nameInput.focus();
    };

    window.closeCaregiverEditModal = function () {
        const cgModal = getCgModal();
        if (cgModal) cgModal.classList.remove('is-visible');
    };

    window.submitCaregiverEdit = async function (e) {
        if (e) e.preventDefault();
        const nameInput = document.getElementById('edit-cg-name');
        const emailInput = document.getElementById('edit-cg-email');
        const contactInput = document.getElementById('edit-cg-contact');
        const errorEl = document.getElementById('edit-cg-error');
        const saveBtn = document.getElementById('btn-save-cg');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
        const contact = contactInput ? contactInput.value.trim() : '';

        if (!name) {
            if (errorEl) errorEl.textContent = 'Caregiver name cannot be empty.';
            return;
        }
        if (!email || !email.includes('@')) {
            if (errorEl) errorEl.textContent = 'Please enter a valid email address.';
            return;
        }

        if (saveBtn) {
            saveBtn.disabled = true;
            saveBtn.textContent = 'Saving...';
        }

        try {
            const res = await fetch('/api/profile/caregiver', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, contact })
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed to update caregiver profile.');

            // Update UI in sidebar
            const nameEl = document.getElementById('sidebar-cg-name');
            const emailEl = document.getElementById('sidebar-cg-email');
            const contactEl = document.getElementById('sidebar-cg-contact');
            const navNameEl = document.querySelector('.caregiver-nav-name');

            if (nameEl) nameEl.textContent = data.name;
            if (emailEl) emailEl.textContent = data.email;
            if (contactEl) contactEl.textContent = data.contact || '—';
            if (navNameEl) navNameEl.textContent = data.name;

            showToast('Caregiver profile updated successfully! ✨');
            closeCaregiverEditModal();
        } catch (err) {
            if (errorEl) errorEl.textContent = err.message;
        } finally {
            if (saveBtn) {
                saveBtn.disabled = false;
                saveBtn.textContent = 'Save Changes';
            }
        }
    };

    // ── Patient Edit Modal ──
    window.openPatientEditModal = function () {
        const ptModal = getPtModal();
        if (!ptModal) return;
        const currentName = document.getElementById('sidebar-pt-name')?.textContent?.trim() || '';
        const ageSexText = document.getElementById('sidebar-pt-age-sex')?.textContent?.trim() || '';
        const currentStage = document.getElementById('sidebar-pt-stage')?.textContent?.trim() || '';
        const currentRelation = document.getElementById('sidebar-pt-relation')?.textContent?.trim() || '';
        const currentContact = document.getElementById('sidebar-pt-contact')?.textContent?.trim() || '';

        let parsedAge = '';
        const ageMatch = ageSexText.match(/(\d+)\s*yrs/i);
        if (ageMatch) parsedAge = ageMatch[1];

        const nameInput = document.getElementById('edit-pt-name');
        const ageInput = document.getElementById('edit-pt-age');
        const sexSelect = document.getElementById('edit-pt-sex');
        const stageSelect = document.getElementById('edit-pt-stage');
        const relInput = document.getElementById('edit-pt-relation');
        const contactInput = document.getElementById('edit-pt-contact');
        const errorEl = document.getElementById('edit-pt-error');

        if (nameInput) nameInput.value = currentName === 'No patient registered' ? '' : currentName;
        if (ageInput) ageInput.value = parsedAge;
        if (relInput) relInput.value = currentRelation === '—' ? '' : currentRelation;
        if (contactInput) contactInput.value = currentContact === '—' ? '' : currentContact;

        if (sexSelect) {
            if (ageSexText.includes('Male')) sexSelect.value = 'Male';
            else sexSelect.value = 'Female';
        }

        if (stageSelect) {
            if (currentStage.includes('Early')) stageSelect.value = 'Early stage';
            else if (currentStage.includes('Middle')) stageSelect.value = 'Middle stage';
            else if (currentStage.includes('Advanced')) stageSelect.value = 'Advanced stage';
            else stageSelect.value = 'Not sure / undiagnosed';
        }

        if (errorEl) errorEl.textContent = '';
        ptModal.classList.add('is-visible');
        if (nameInput) nameInput.focus();
    };

    window.closePatientEditModal = function () {
        const ptModal = getPtModal();
        if (ptModal) ptModal.classList.remove('is-visible');
    };

    window.submitPatientEdit = async function (e) {
        if (e) e.preventDefault();
        const nameInput = document.getElementById('edit-pt-name');
        const ageInput = document.getElementById('edit-pt-age');
        const sexSelect = document.getElementById('edit-pt-sex');
        const stageSelect = document.getElementById('edit-pt-stage');
        const relInput = document.getElementById('edit-pt-relation');
        const contactInput = document.getElementById('edit-pt-contact');
        const errorEl = document.getElementById('edit-pt-error');
        const saveBtn = document.getElementById('btn-save-pt');

        const name = nameInput ? nameInput.value.trim() : '';
        const age = ageInput ? ageInput.value.trim() : '';
        const sex = sexSelect ? sexSelect.value : 'Female';
        const diagnosis_stage = stageSelect ? stageSelect.value : '';
        const relation = relInput ? relInput.value.trim() : '';
        const contact = contactInput ? contactInput.value.trim() : '';

        if (!name) {
            if (errorEl) errorEl.textContent = 'Patient name is required.';
            return;
        }

        if (saveBtn) {
            saveBtn.disabled = true;
            saveBtn.textContent = 'Saving...';
        }

        try {
            const res = await fetch('/api/profile/patient', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    age: age ? parseInt(age, 10) : null,
                    sex,
                    diagnosis_stage,
                    relation,
                    contact
                })
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed to update patient profile.');

            // Update UI in sidebar
            const nameEl = document.getElementById('sidebar-pt-name');
            const ageSexEl = document.getElementById('sidebar-pt-age-sex');
            const stageEl = document.getElementById('sidebar-pt-stage');
            const relationEl = document.getElementById('sidebar-pt-relation');
            const contactEl = document.getElementById('sidebar-pt-contact');

            if (nameEl) nameEl.textContent = data.name;
            if (ageSexEl) ageSexEl.textContent = `${data.age ? data.age + ' yrs' : '—'} • ${data.sex || 'Female'}`;
            if (stageEl) stageEl.textContent = data.diagnosis_stage || 'Not specified';
            if (relationEl) relationEl.textContent = data.relation || 'Caregiver';
            if (contactEl) contactEl.textContent = data.contact || '—';

            // Also update any patient name instances on the page
            document.querySelectorAll('.js-patient-name').forEach(el => {
                el.textContent = data.name;
            });

            showToast('Patient profile updated successfully! 🌸');
            closePatientEditModal();
        } catch (err) {
            if (errorEl) errorEl.textContent = err.message;
        } finally {
            if (saveBtn) {
                saveBtn.disabled = false;
                saveBtn.textContent = 'Save Changes';
            }
        }
    };

    // ── Family Memory Note Modal ──
    window.openMemoryNoteModal = function () {
        const patientIdInput = document.getElementById('note-patient-id');
        const patientId = patientIdInput ? patientIdInput.value.trim() : '';
        if (!patientId) {
            showToast('Please register a patient first before adding family notes! 🌸');
            return;
        }
        const modal = getNoteModal();
        if (!modal) return;
        const errorEl = document.getElementById('add-note-error');
        if (errorEl) errorEl.textContent = '';
        const textInput = document.getElementById('note-text-content');
        if (textInput) textInput.value = '';
        modal.classList.add('is-visible');
        if (textInput) textInput.focus();
    };

    window.closeMemoryNoteModal = function () {
        const modal = getNoteModal();
        if (modal) modal.classList.remove('is-visible');
    };

    window.submitMemoryNote = async function (e) {
        if (e) e.preventDefault();
        const authorInput = document.getElementById('note-author-name');
        const anchorSelect = document.getElementById('note-anchor-type');
        const textInput = document.getElementById('note-text-content');
        const patientIdInput = document.getElementById('note-patient-id');
        const errorEl = document.getElementById('add-note-error');
        const saveBtn = document.getElementById('btn-save-note');

        const author = authorInput ? authorInput.value.trim() : '';
        const anchor_type = anchorSelect ? anchorSelect.value : 'Memory Note';
        const text = textInput ? textInput.value.trim() : '';
        const patient_id = patientIdInput ? patientIdInput.value.trim() : '';

        if (!patient_id) {
            if (errorEl) errorEl.textContent = 'Please register a patient first before adding notes.';
            return;
        }
        if (!author) {
            if (errorEl) errorEl.textContent = 'Please enter your name.';
            return;
        }
        if (!text) {
            if (errorEl) errorEl.textContent = 'Please write a memory note or observation.';
            return;
        }

        if (saveBtn) {
            saveBtn.disabled = true;
            saveBtn.textContent = 'Saving...';
        }

        try {
            const res = await fetch('/api/notes/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ patient_id, author, text, anchor_type })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to save memory note.');

            const note = data.note;

            // 1. Update Home Page Feed if present
            const homeFeed = document.getElementById('home-notes-feed');
            if (homeFeed) {
                const emptyEl = homeFeed.querySelector('.notes-empty-state');
                if (emptyEl) emptyEl.remove();

                const bubble = document.createElement('div');
                bubble.className = 'note-bubble new-note-glow';
                bubble.innerHTML = `
                    <div class="note-header">
                        <div class="note-author-group">
                            <strong>${escapeHtml(note.author)}</strong>
                            <span class="anchor-pill">${escapeHtml(note.anchor_type)}</span>
                        </div>
                        <small>${escapeHtml(note.time)}</small>
                    </div>
                    <p class="note-body">"${escapeHtml(note.text)}"</p>
                `;
                homeFeed.prepend(bubble);
            }

            // 2. Update Dashboard Notes Grid if present
            const dashGrid = document.getElementById('dashboard-notes-grid');
            if (dashGrid) {
                const emptyCard = dashGrid.querySelector('.notes-empty-card');
                if (emptyCard) emptyCard.remove();

                const card = document.createElement('div');
                card.className = 'dash-note-card new-note-glow';
                card.innerHTML = `
                    <div class="dash-note-top">
                        <div class="dash-note-author-group">
                            <span class="dash-note-avatar">❤️</span>
                            <div>
                                <strong class="dash-note-author">${escapeHtml(note.author)}</strong>
                                <span class="dash-note-time">${escapeHtml(note.time)}</span>
                            </div>
                        </div>
                        <span class="dash-note-anchor-badge">${escapeHtml(note.anchor_type || 'Memory Note')}</span>
                    </div>
                    <p class="dash-note-content">"${escapeHtml(note.text)}"</p>
                `;
                dashGrid.prepend(card);
            }

            // 3. Update Caregiver View Notes Feed if present
            const cgFeed = document.getElementById('caregiver-notes-feed');
            if (cgFeed) {
                const emptyEl = cgFeed.querySelector('.notes-empty-state');
                if (emptyEl) emptyEl.remove();

                const bubble = document.createElement('div');
                bubble.className = 'note-bubble new-note-glow';
                bubble.innerHTML = `
                    <div class="note-header">
                        <div class="note-author-group">
                            <strong>${escapeHtml(note.author)}</strong>
                            <span class="anchor-pill">${escapeHtml(note.anchor_type)}</span>
                        </div>
                        <small>${escapeHtml(note.time)}</small>
                    </div>
                    <p class="note-body">"${escapeHtml(note.text)}"</p>
                `;
                cgFeed.prepend(bubble);
            }

            // 4. Update count badge if present
            const countEl = document.getElementById('notes-count-val');
            if (countEl) {
                const cur = parseInt(countEl.textContent, 10) || 0;
                countEl.textContent = cur + 1;
            }

            showToast('Memory note saved to patient’s circle! 💌');
            closeMemoryNoteModal();
            if (textInput) textInput.value = '';
        } catch (err) {
            if (errorEl) errorEl.textContent = err.message;
        } finally {
            if (saveBtn) {
                saveBtn.disabled = false;
                saveBtn.textContent = 'Save Memory Note 🌸';
            }
        }
    };

    // ── Daily Care & Medication Routine Functions ──

    window.toggleRoutineCheck = async function (routineId, checkboxEl) {
        if (!routineId || !checkboxEl) return;
        const row = document.getElementById('routine-row-' + routineId);
        const statusLabel = row ? row.querySelector('.routine-status-label') : null;
        const isDone = checkboxEl.checked;

        // Optimistic UI update
        if (row) {
            if (isDone) {
                row.classList.add('is-done');
            } else {
                row.classList.remove('is-done');
            }
        }
        if (statusLabel) {
            statusLabel.textContent = isDone ? 'Completed' : 'Scheduled';
            statusLabel.className = 'routine-status-label ' + (isDone ? 'text-success' : 'text-warn');
        }

        try {
            const res = await fetch('/api/routines/' + routineId + '/toggle', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ is_completed: isDone })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to update status.');
            showToast(isDone ? '✓ Routine marked completed!' : 'Routine reset to scheduled.');
        } catch (err) {
            // Revert optimistic update
            checkboxEl.checked = !isDone;
            if (row) {
                if (!isDone) row.classList.add('is-done');
                else row.classList.remove('is-done');
            }
            if (statusLabel) {
                statusLabel.textContent = !isDone ? 'Completed' : 'Scheduled';
                statusLabel.className = 'routine-status-label ' + (!isDone ? 'text-success' : 'text-warn');
            }
            showToast('Error: ' + err.message);
        }
    };

    window.openAddRoutineModal = function () {
        const patientNameEl = document.getElementById('sidebar-pt-name');
        const patientName = patientNameEl ? patientNameEl.textContent.trim() : '';
        if (!patientName || patientName === 'No patient registered') {
            showToast('Please register a patient first before adding routines! 🌸');
            return;
        }

        const modal = document.getElementById('modal-add-routine');
        if (!modal) return;
        const errEl = document.getElementById('add-routine-error');
        if (errEl) errEl.textContent = '';
        modal.classList.add('is-visible');
        const titleInput = document.getElementById('routine-title');
        if (titleInput) titleInput.focus();
    };

    window.closeAddRoutineModal = function () {
        const modal = document.getElementById('modal-add-routine');
        if (modal) modal.classList.remove('is-visible');
    };

    window.submitAddRoutine = async function (e) {
        if (e) e.preventDefault();
        const titleInput = document.getElementById('routine-title');
        const timeInput = document.getElementById('routine-time');
        const catSelect = document.getElementById('routine-category');
        const freqInput = document.querySelector('input[name="frequency"]:checked');
        const errEl = document.getElementById('add-routine-error');
        const saveBtn = document.getElementById('btn-save-routine');

        const title = titleInput ? titleInput.value.trim() : '';
        const time = timeInput ? timeInput.value.trim() : '';
        const category = catSelect ? catSelect.value : 'general';
        const frequency = freqInput ? freqInput.value : 'daily';

        if (!title) {
            if (errEl) errEl.textContent = 'Please enter activity or medication name.';
            return;
        }
        if (!time) {
            if (errEl) errEl.textContent = 'Please enter scheduled time.';
            return;
        }

        if (saveBtn) {
            saveBtn.disabled = true;
            saveBtn.textContent = 'Saving...';
        }

        try {
            const res = await fetch('/api/routines/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, time, category, frequency })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to add routine.');

            const r = data.routine;
            const routineList = document.getElementById('home-routine-list');
            if (routineList) {
                const emptyEl = document.getElementById('routine-empty-state');
                if (emptyEl) emptyEl.remove();

                const li = document.createElement('li');
                li.className = 'reminder-item new-note-glow';
                li.id = 'routine-row-' + r.id;
                li.setAttribute('data-id', r.id);

                const isDaily = (r.frequency === 'daily' || !r.frequency);
                const escapedTitle = escapeHtml(r.title);
                const rawEscapedTitle = r.title.replace(/'/g, "\\'");

                li.innerHTML = `
                    <label class="routine-check-wrap" for="chk-routine-${r.id}" title="Mark as completed">
                        <input type="checkbox" id="chk-routine-${r.id}" class="routine-checkbox" data-id="${r.id}" onchange="toggleRoutineCheck(${r.id}, this)">
                        <span class="custom-checkbox-ui" aria-hidden="true"></span>
                    </label>
                    <div class="rem-content">
                        <strong class="routine-title">${escapedTitle}</strong>
                        <small class="routine-meta">
                            <span class="routine-time">${escapeHtml(r.time)}</span> • 
                            <span class="routine-status-label text-warn">Scheduled</span>
                            <span class="routine-freq-badge ${isDaily ? '' : 'one-time'}">${isDaily ? 'Daily' : 'One-time'}</span>
                        </small>
                    </div>
                    <div class="routine-actions">
                        <button type="button" class="btn-routine-edit" onclick="openEditRoutineModal(${r.id}, '${rawEscapedTitle}', '${escapeHtml(r.time)}', '${escapeHtml(r.category)}', '${r.frequency}')" title="Edit routine">
                            ✎
                        </button>
                        <button type="button" class="btn-routine-delete" onclick="deleteRoutineItem(${r.id})" title="Remove routine">
                            ✕
                        </button>
                    </div>
                `;
                routineList.appendChild(li);
            }

            showToast('Routine scheduled successfully! ⏰');
            closeAddRoutineModal();
            if (titleInput) titleInput.value = '';
            if (timeInput) timeInput.value = '';
        } catch (err) {
            if (errEl) errEl.textContent = err.message;
        } finally {
            if (saveBtn) {
                saveBtn.disabled = false;
                saveBtn.textContent = 'Save Routine Schedule';
            }
        }
    };

    window.openEditRoutineModal = function (id, title, time, category, frequency) {
        const modal = document.getElementById('modal-edit-routine');
        if (!modal) return;

        document.getElementById('edit-routine-id').value = id;
        document.getElementById('edit-routine-title').value = title || '';
        document.getElementById('edit-routine-time').value = time || '';
        if (document.getElementById('edit-routine-category')) {
            document.getElementById('edit-routine-category').value = category || 'general';
        }
        if (frequency === 'one_time') {
            const rOne = document.getElementById('edit-freq-onetime');
            if (rOne) rOne.checked = true;
        } else {
            const rDaily = document.getElementById('edit-freq-daily');
            if (rDaily) rDaily.checked = true;
        }
        const errEl = document.getElementById('edit-routine-error');
        if (errEl) errEl.textContent = '';

        modal.classList.add('is-visible');
    };

    window.closeEditRoutineModal = function () {
        const modal = document.getElementById('modal-edit-routine');
        if (modal) modal.classList.remove('is-visible');
    };

    window.submitEditRoutine = async function (e) {
        if (e) e.preventDefault();
        const id = document.getElementById('edit-routine-id').value;
        const title = document.getElementById('edit-routine-title').value.trim();
        const time = document.getElementById('edit-routine-time').value.trim();
        const category = document.getElementById('edit-routine-category').value;
        const freqInput = document.querySelector('input[name="edit_frequency"]:checked');
        const frequency = freqInput ? freqInput.value : 'daily';
        const errEl = document.getElementById('edit-routine-error');
        const btn = document.getElementById('btn-update-routine');

        if (!title || !time) {
            if (errEl) errEl.textContent = 'Title and scheduled time are required.';
            return;
        }

        if (btn) {
            btn.disabled = true;
            btn.textContent = 'Updating...';
        }

        try {
            const res = await fetch('/api/routines/' + id + '/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, time, category, frequency })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to update routine.');

            // Update DOM row
            const row = document.getElementById('routine-row-' + id);
            if (row) {
                const titleEl = row.querySelector('.routine-title');
                const timeEl = row.querySelector('.routine-time');
                const badgeEl = row.querySelector('.routine-freq-badge');
                if (titleEl) titleEl.textContent = data.routine.title;
                if (timeEl) timeEl.textContent = data.routine.time;
                if (badgeEl) {
                    const isDaily = (data.routine.frequency === 'daily');
                    badgeEl.textContent = isDaily ? 'Daily' : 'One-time';
                    badgeEl.className = 'routine-freq-badge ' + (isDaily ? '' : 'one-time');
                }
            }

            showToast('Routine updated successfully! ✨');
            closeEditRoutineModal();
        } catch (err) {
            if (errEl) errEl.textContent = err.message;
        } finally {
            if (btn) {
                btn.disabled = false;
                btn.textContent = 'Update Routine';
            }
        }
    };

    window.deleteRoutineItem = async function (routineId) {
        if (!confirm('Remove this routine activity?')) return;
        try {
            const res = await fetch('/api/routines/' + routineId + '/delete', {
                method: 'POST'
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to remove routine.');

            const row = document.getElementById('routine-row-' + routineId);
            if (row) {
                row.style.transition = 'all 0.3s ease';
                row.style.opacity = '0';
                row.style.transform = 'scale(0.95)';
                setTimeout(() => row.remove(), 300);
            }
            showToast('Routine removed.');
        } catch (err) {
            showToast('Error removing routine: ' + err.message);
        }
    };

    window.deleteCurrentEditRoutine = function () {
        const id = document.getElementById('edit-routine-id')?.value;
        if (id) {
            closeEditRoutineModal();
            deleteRoutineItem(id);
        }
    };

    window.refreshDailyRoutines = async function () {
        try {
            const res = await fetch('/api/routines/reset-daily', {
                method: 'POST'
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to refresh routines.');

            // Reload the list cleanly
            const routineList = document.getElementById('home-routine-list');
            if (routineList && data.routines) {
                routineList.innerHTML = '';
                if (data.routines.length === 0) {
                    routineList.innerHTML = '<p class="notes-empty-state" id="routine-empty-state">No care routine scheduled yet.</p>';
                } else {
                    data.routines.forEach(r => {
                        const li = document.createElement('li');
                        li.className = 'reminder-item' + (r.done ? ' is-done' : '');
                        li.id = 'routine-row-' + r.id;
                        li.setAttribute('data-id', r.id);
                        const isDaily = (r.frequency === 'daily' || !r.frequency);
                        const rawEscapedTitle = r.title.replace(/'/g, "\\'");
                        li.innerHTML = `
                            <label class="routine-check-wrap" for="chk-routine-${r.id}" title="Mark as ${r.done ? 'scheduled' : 'completed'}">
                                <input type="checkbox" id="chk-routine-${r.id}" class="routine-checkbox" data-id="${r.id}" ${r.done ? 'checked' : ''} onchange="toggleRoutineCheck(${r.id}, this)">
                                <span class="custom-checkbox-ui" aria-hidden="true"></span>
                            </label>
                            <div class="rem-content">
                                <strong class="routine-title">${escapeHtml(r.title)}</strong>
                                <small class="routine-meta">
                                    <span class="routine-time">${escapeHtml(r.time)}</span> • 
                                    <span class="routine-status-label ${r.done ? 'text-success' : 'text-warn'}">
                                        ${r.done ? 'Completed' : 'Scheduled'}
                                    </span>
                                    <span class="routine-freq-badge ${isDaily ? '' : 'one-time'}">${isDaily ? 'Daily' : 'One-time'}</span>
                                </small>
                            </div>
                            <div class="routine-actions">
                                <button type="button" class="btn-routine-edit" onclick="openEditRoutineModal(${r.id}, '${rawEscapedTitle}', '${escapeHtml(r.time)}', '${escapeHtml(r.category)}', '${r.frequency}')" title="Edit routine">
                                    ✎
                                </button>
                                <button type="button" class="btn-routine-delete" onclick="deleteRoutineItem(${r.id})" title="Remove routine">
                                    ✕
                                </button>
                            </div>
                        `;
                        routineList.appendChild(li);
                    });
                }
            }
            showToast('Daily routine refreshed for today! 🔄');
        } catch (err) {
            showToast('Error refreshing routines: ' + err.message);
        }
    };

    // ── Gentle Toast Helper ──
    function showToast(msg) {
        let toast = document.getElementById('app-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'app-toast';
            toast.className = 'app-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.classList.add('is-visible');
        setTimeout(() => {
            toast.classList.remove('is-visible');
        }, 3200);
    }

})();

