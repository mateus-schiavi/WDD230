const currentYear = new Date().getFullYear();
document.getElementById('Year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('Modified').textContent = `${lastModified}`;

function createMonthCalendar(year, month) {
    const calendar = document.getElementById("calendar");
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const currentDate = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDay = firstDayOfMonth.getDay();

    const table = document.createElement("table");
    const monthHeader = document.createElement("caption");
    monthHeader.textContent = new Date(year, month).toLocaleString('en-US', { month: 'long' });
    table.appendChild(monthHeader);

    const headerRow = document.createElement("tr");
    daysOfWeek.forEach(day => {
        const th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    let currentRow = document.createElement("tr");
    for (let i = 0; i < startingDay; i++) {
        const td = document.createElement("td");
        td.textContent = '';
        currentRow.appendChild(td);
    }

    while (currentDate <= lastDayOfMonth) {
        if (currentDate.getDay() === 0) {
            table.appendChild(currentRow);
            currentRow = document.createElement("tr");
        }

        const td = document.createElement("td");
        td.textContent = currentDate.getDate();
        currentRow.appendChild(td);

        currentDate.setDate(currentDate.getDate() + 1);
    }

    table.appendChild(currentRow);
    calendar.innerHTML = '';
    calendar.appendChild(table);
}

document.getElementById("prev-month").addEventListener("click", () => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);
    createMonthCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

document.getElementById("next-month").addEventListener("click", () => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 1);
    createMonthCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

const today = new Date();
createMonthCalendar(today.getFullYear(), today.getMonth());

const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.setAttribute("loading", "lazy");
});

function getUltimaVisita() {
    const dataVisitaAnterior = localStorage.getItem('ultimaVisita');
    if (dataVisitaAnterior) {
      return new Date(dataVisitaAnterior);
    } else {
      return null;
    }
}

function verificarIntervaloVisita() {
    const dataAtual = new Date();
    const dataUltimaVisita = getUltimaVisita();
    const visitaMessage = document.getElementById("visit-message");

    if (dataUltimaVisita) {
      const diffDays = Math.floor((dataAtual - dataUltimaVisita) / (1000 * 60 * 60 * 24));
      if (diffDays < 1) {
        visitaMessage.textContent = "Welcome Back!";
      } else {
        visitaMessage.textContent = `You visited the site ${diffDays} days ago!`;
      }
    } else {
      visitaMessage.textContent = "This is your first visit!";
    }

    localStorage.setItem('ultimaVisita', dataAtual);
}

verificarIntervaloVisita();
