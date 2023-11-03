const currentYear = new Date().getFullYear();
document.getElementById('Year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('Modified').textContent = `${lastModified}`;

// Função para criar um calendário de um mês específico
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

    // Cria a linha com os dias da semana
    const headerRow = document.createElement("tr");
    daysOfWeek.forEach(day => {
        const th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Cria as células vazias no início do mês, de acordo com o dia da semana do primeiro dia
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

// Função para navegar para o mês anterior
document.getElementById("prev-month").addEventListener("click", () => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);
    createMonthCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

// Função para navegar para o próximo mês
document.getElementById("next-month").addEventListener("click", () => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 1);
    createMonthCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

// Inicialmente, crie o calendário para o mês atual
const today = new Date();
createMonthCalendar(today.getFullYear(), today.getMonth());

// Seleciona todos os elementos img no documento
const images = document.querySelectorAll("img");

// Itera sobre a lista de elementos img e define o atributo loading como "lazy"
images.forEach((img) => {
  img.setAttribute("loading", "lazy");
});

// Função para obter a data da última visita do usuário armazenada no armazenamento local
function getUltimaVisita() {
    const dataVisitaAnterior = localStorage.getItem('ultimaVisita');
    if (dataVisitaAnterior) {
      return new Date(dataVisitaAnterior);
    } else {
      return null; // Se não houver data de visita anterior, retorna nulo
    }
  }
  
  function verificarIntervaloVisita() {
    const dataAtual = new Date();
    const dataUltimaVisita = getUltimaVisita();
    const visitaMessage = document.getElementById("visit-message");
  
    if (dataUltimaVisita) {
      const diffDays = Math.floor((dataAtual - dataUltimaVisita) / (1000 * 60 * 60 * 24)); // Calcula a diferença em dias
      if (diffDays < 1) {
        visitaMessage.textContent = "Welcome Back!";
      } else {
        visitaMessage.textContent = `You visited the site ${diffDays} days ago!`;
      }
    } else {
      visitaMessage.textContent = "This is your first visit!";
    }
  
    // Armazena a data atual como a nova data de última visita
    localStorage.setItem('ultimaVisita', dataAtual);
  }
  
  // Chame a função para verificar o intervalo de visita
  verificarIntervaloVisita();
  