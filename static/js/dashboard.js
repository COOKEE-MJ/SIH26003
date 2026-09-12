const patientId = document.getElementById("patientId").textContent.trim();
const totalSessionsElement = document.getElementById("totalSessions");
const averageScoreElement = document.getElementById("averageScore");
const latestScoreElement = document.getElementById("latestScore");
const sessionsTable = document.getElementById("sessionsTable");
const chartCanvas = document.getElementById("scoreChart");
let scoreChart = null;

async function loadSessions() {
	try {
		const response = await fetch(`/api/patient/${patientId}/sessions`);
		if (!response.ok) throw new Error("Unable to load sessions");
		const sessions = await response.json();
		updateStatistics(sessions);
		updateTable(sessions);
		updateChart(sessions);
	} catch (error) {
		console.error(error);
		sessionsTable.innerHTML = '<tr><td colspan="4">Unable to load session data.</td></tr>';
	}
}

function getPercentage(score, total) {
	return !total ? 0 : (score / total) * 100;
}

function updateStatistics(sessions) {
	totalSessionsElement.textContent = sessions.length;
	if (!sessions.length) {
		averageScoreElement.textContent = "0%";
		latestScoreElement.textContent = "0%";
		return;
	}
	const percentages = sessions.map((session) => getPercentage(session.score, session.total));
	const average = percentages.reduce((sum, value) => sum + value, 0) / percentages.length;
	averageScoreElement.textContent = `${average.toFixed(1)}%`;
	latestScoreElement.textContent = `${percentages.at(-1).toFixed(1)}%`;
}

function updateTable(sessions) {
	if (!sessions.length) {
		sessionsTable.innerHTML = '<tr><td colspan="4">No sessions available.</td></tr>';
		return;
	}
	sessionsTable.replaceChildren(...sessions.map((session) => {
		const row = document.createElement("tr");
		const percentage = getPercentage(session.score, session.total).toFixed(1);
		row.innerHTML = `<td>${formatDate(session.played_at)}</td><td>${session.game_type}</td><td>${session.score}/${session.total} (${percentage}%)</td><td>${session.difficulty}</td>`;
		return row;
	}));
}

function updateChart(sessions) {
	if (!chartCanvas || typeof Chart === "undefined") return;
	if (scoreChart) scoreChart.destroy();
	scoreChart = new Chart(chartCanvas, {
		type: "line",
		data: {
			labels: sessions.map((session) => formatDate(session.played_at)),
			datasets: [{
				label: "Score (%)",
				data: sessions.map((session) => getPercentage(session.score, session.total)),
				tension: 0.3,
				fill: false,
			}],
		},
		options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } },
	});
}

function formatDate(dateString) {
	if (!dateString) return "-";
	const date = new Date(dateString);
	return Number.isNaN(date.getTime()) ? dateString : date.toLocaleDateString();
}

loadSessions();
