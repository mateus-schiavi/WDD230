const modeButton = document.querySelector("#mode");
const html = document.querySelector("html");
const main = document.querySelector("main");

modeButton.addEventListener('click', ()=> {
     if (modeButton.textContent.includes("🌑")) {
        html.classList.toggle('dark-mode');
         main.style.background = "#000";
         main.style.color = "#fff";
         modeButton.textContent = "🔆";  
    } else {
         main.style.background = "#fff";
         main.style.color = "#000";
         modeButton.textContent = "🌑";
     }
});