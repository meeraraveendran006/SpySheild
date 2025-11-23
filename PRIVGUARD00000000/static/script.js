function fetchAlerts() {
    fetch("/get_alerts")
    .then(res => res.json())
    .then(data => {
        const table = document.getElementById("alertTable");
        table.innerHTML = ""; // clear previous alerts
        if(data.length === 0){
            table.innerHTML = `<tr><td colspan="2" style="color: #0f0;">No app is accessing camera/mic</td></tr>`;
        } else {
            data.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${item.app}</td><td class="danger">${item.alert}</td>`;
                table.appendChild(row);
            });
        }
    });
}

// Fetch alerts every 2 seconds
setInterval(fetchAlerts, 2000);
fetchAlerts(); // initial load

