// dataHandler.js
async function fetchDataAndDisplay() {
    try {
        const response = await fetch('./data/data.json'); // Adjust the path accordingly
        const data = await response.json();

        displayData(data.reservation_pricing, 'reservation-table');
        displayData(data.walk_in_pricing, 'walk-in-table');
    } catch (error) {
        console.log(error);
    }
}

function displayData(data, tableId) {
    const table = document.getElementById(tableId);

    table.innerHTML = '';

    if (data.length === 0) {
        const noDataMessage = document.createElement('p');
        noDataMessage.textContent = 'No data available';
        table.appendChild(noDataMessage);
        return;
    }

    const headers = Object.keys(data[0]);

    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    data.forEach(rowData => {
        const row = document.createElement('tr');
        headers.forEach(header => {
            const cell = document.createElement('td');
            cell.textContent = rowData[header];
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchDataAndDisplay();
});
