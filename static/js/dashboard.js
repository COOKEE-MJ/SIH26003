const patientId = document.getElementById("patientId").textContent.trim();

const totalSessionsElement =
    document.getElementById("totalSessions");

const averageScoreElement =
    document.getElementById("averageScore");

const latestScoreElement =
    document.getElementById("latestScore");

const sessionsTable =
    document.getElementById("sessionsTable");

const chartCanvas =
    document.getElementById("scoreChart");

let scoreChart = null;


async function loadSessions() {

    try {

        const response =
            await fetch(/api/patient/${patientId}/sessions);

        if (!response.ok) {
            throw new Error("Unable to load sessions");
        }

        const sessions = await response.json();

        updateStatistics(sessions);
        updateTable(sessions);
        updateChart(sessions);

    } catch (error) {

        console.error(error);

        sessionsTable.innerHTML = `
            <tr>
                <td colspan="4">
                    Unable to load session data.
                </td>
            </tr>
        `;
    }
}


function getPercentage(score, total) {

    if (!total || total === 0) {
        return 0;
    }

    return (score / total) * 100;
}


function updateStatistics(sessions) {

    totalSessionsElement.textContent = sessions.length;

    if (sessions.length === 0) {

        averageScoreElement.textContent = "0%";
        latestScoreElement.textContent = "0%";

        return;
    }

    const percentages = sessions.map(session =>
        getPercentage(session.score, session.total)
    );

    const average =
        percentages.reduce((sum, value) => sum + value, 0)
        / percentages.length;

    const latest =
        percentages[percentages.length - 1];

    averageScoreElement.textContent =
        ${average.toFixed(1)}%;

    latestScoreElement.textContent =
        ${latest.toFixed(1)}%;
}


function updateTable(sessions) {

    if (sessions.length === 0) {

        sessionsTable.innerHTML = `
            <tr>
                <td colspan="4">
                    No sessions available.
                </td>
            </tr>
        `;

        return;
    }

    sessionsTable.innerHTML = "";

    sessions.forEach(session => {

        const percentage =
            getPercentage(session.score, session.total);

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${formatDate(session.played_at)}</td>
            <td>${session.game_type}</td>
            <td>${session.score}/${session.total}
                (${percentage.toFixed(1)}%)
            </td>
            <td>${session.difficulty}</td>
        `;

        sessionsTable.appendChild(row);
    });
}


function updateChart(sessions) {

    const labels = sessions.map(session =>
        formatDate(session.played_at)
    );

    const scores = sessions.map(session =>
        getPercentage(session.score, session.total)
    );

    if (scoreChart) {
        scoreChart.destroy();
    }

    scoreChart = new Chart(chartCanvas, {

        type: "line",

        data: {
            labels: labels,

            datasets: [{
                label: "Score (%)",
                data: scores,
                tension: 0.3,
                fill: false
            }]
        },

        options: {
            responsive: true,

            maintainAspectRatio: false,

            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: "Score (%)"
                    }
                },

                x: {
                    title: {
                        display: true,
                        text: "Session Date"
                    }
                }
            }
        }
    });
}


function formatDate(dateString) {

    if (!dateString) {
        return "-";
    }

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString();
}


loadSessions();
