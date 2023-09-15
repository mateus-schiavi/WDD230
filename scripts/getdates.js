const currentYear = new Date().getFullYear();
document.getElementById('Year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('Modified').textContent = `Last Modified: ${lastModified}`;