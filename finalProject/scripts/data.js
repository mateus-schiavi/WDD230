// dataHandler.js
async function fetchDataAndDisplay() {
    try {
        const response = await fetch('./data/data.json'); // Adjust the path accordingly
        const data = await response.json();

        const combinedData = combineData(data.reservation_pricing, data.walk_in_pricing);
        displayData(combinedData, 'combined-table');
    } catch (error) {
        console.log(error);
    }
}

function combineData(reservationData, walkInData) {
    const combinedData = [];

    reservationData.forEach(reservation => {
        const matchingWalkIn = walkInData.find(walkIn => walkIn['Rental Type'] === reservation['Rental Type']);

        if (matchingWalkIn) {
            combinedData.push({
                'Rental Type': reservation['Rental Type'],
                'Max. Persons': reservation['Max. Persons'],
                'Reservation - Half Day (3 hrs)': reservation['Half Day (3 hrs)'],
                'Reservation - Full Day': reservation['Full Day'],
                'Walk-In - Half Day (3 hrs)': matchingWalkIn['Half Day (3 hrs)'],
                'Walk-In - Full Day': matchingWalkIn['Full Day']
            });
        }
    });

    return combinedData;
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
            if (header !== 'Max. Persons') {
                if (!isNaN(rowData[header]) && typeof rowData[header] === 'number') {
                    cell.textContent = '$' + rowData[header].toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                } else {
                    cell.textContent = rowData[header];
                }
            } else {
                cell.textContent = rowData[header];
            }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    fetchDataAndDisplay();
});
