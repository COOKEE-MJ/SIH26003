/**
 * SmritiSetu - Dashboard & Gameplay Progress Visualizer
 * Strictly scopes data to unique patientId with zero cross-patient data leaking.
 */

const patientIdEl = document.getElementById("patientId");
const patientId = patientIdEl ? patientIdEl.textContent.trim() : "";
const totalSessionsElement = document.getElementById("totalSessions");
const averageScoreElement = document.getElementById("averageScore");
const latestScoreElement = document.getElementById("latestScore");
const sessionsTable = document.getElementById("sessionsTable");
const chartCanvas = document.getElementById("scoreChart");
let scoreChart = null;

// Global scoped cache per patient ID (prevents cross-patient cache bleeding)
window._patientSessionCache = window._patientSessionCache || {};

async function loadSessions() {
    if (!patientId) return;

    // Reset previous views immediately to prevent showing old patient's chart/table
    if (scoreChart) {
        scoreChart.destroy();
        scoreChart = null;
    }
    if (sessionsTable) {
        sessionsTable.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 18px; color: #64748b;">Loading sessions…</td></tr>';
    }

    try {
        const response = await fetch(`/api/patient/${patientId}/sessions`);
        if (!response.ok) throw new Error("Unable to load sessions");
        const sessions = await response.json();
        
        // Save to strictly patient-isolated cache
        window._patientSessionCache[patientId] = sessions;

        updateStatistics(sessions);
        updateTable(sessions);
        updateChart(sessions);

        if (typeof window.initDoctorChart === "function") {
            window.initDoctorChart();
        }
    } catch (error) {
        console.error("Dashboard session load error:", error);
        if (sessionsTable) {
            sessionsTable.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 18px; color: #dc2626;">Unable to load session data.</td></tr>';
        }
    }
}

function getPercentage(score, total) {
    return !total ? 0 : (score / total) * 100;
}

function updateStatistics(sessions) {
    if (totalSessionsElement) totalSessionsElement.textContent = sessions.length;
    if (!sessions.length) {
        if (averageScoreElement) averageScoreElement.textContent = "0%";
        if (latestScoreElement) latestScoreElement.textContent = "0%";
        return;
    }
    const percentages = sessions.map((s) => (s.accuracy !== undefined && s.accuracy !== null) ? Number(s.accuracy) : getPercentage(s.score, s.total));
    const average = percentages.reduce((sum, value) => sum + value, 0) / percentages.length;
    if (averageScoreElement) averageScoreElement.textContent = `${average.toFixed(1)}%`;
    if (latestScoreElement) latestScoreElement.textContent = `${percentages.at(-1).toFixed(1)}%`;
}

function updateTable(sessions) {
    if (!sessionsTable) return;
    if (!sessions.length) {
        sessionsTable.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 24px; color: #64748b; font-weight: 500;">No game activity yet. A progress summary will be available after the patient completes a game.</td></tr>';
        return;
    }
    sessionsTable.replaceChildren(...sessions.map((session) => {
        const row = document.createElement("tr");
        const acc = (session.accuracy !== undefined && session.accuracy !== null) 
            ? Number(session.accuracy).toFixed(1) 
            : getPercentage(session.score, session.total).toFixed(1);
        const resp = (session.response_time !== undefined && session.response_time !== null) 
            ? `${session.response_time}s` 
            : "—";
        const dur = (session.duration_seconds !== undefined && session.duration_seconds !== null)
            ? `${session.duration_seconds}s`
            : "—";
        const gameName = session.game_type === 'matching' ? 'Memory Match' : session.game_type;

        row.innerHTML = `
            <td>${formatDate(session.played_at)}</td>
            <td><strong>${gameName}</strong></td>
            <td>${session.score} / ${session.total}</td>
            <td><span class="badge-pill" style="background: #eef6f2; color: #1e5548; font-weight: 700;">${acc}%</span></td>
            <td>${resp}</td>
            <td>Level ${session.difficulty}</td>
        `;
        return row;
    }));
}

function updateChart(sessions) {
    if (!chartCanvas || typeof Chart === "undefined") return;
    if (scoreChart) {
        scoreChart.destroy();
        scoreChart = null;
    }
    if (!sessions || sessions.length < 2) {
        return;
    }
    scoreChart = new Chart(chartCanvas, {
        type: "line",
        data: {
            labels: sessions.map((session, idx) => `Session ${idx + 1} (${formatDate(session.played_at)})`),
            datasets: [{
                label: "Accuracy Rate (%)",
                data: sessions.map((session) => (session.accuracy !== undefined && session.accuracy !== null) ? Number(session.accuracy) : getPercentage(session.score, session.total)),
                borderColor: "#1e5548",
                backgroundColor: "rgba(30, 85, 72, 0.12)",
                tension: 0.3,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 7,
                pointBackgroundColor: "#ffffff",
                pointBorderColor: "#1e5548",
                pointBorderWidth: 2,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { callback: v => v + "%" }
                }
            }
        },
    });
}

function formatDate(dateString) {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return Number.isNaN(date.getTime()) ? dateString : date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

loadSessions();
