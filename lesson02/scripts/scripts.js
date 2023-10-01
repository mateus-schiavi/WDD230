const insert = document.querySelector("#favteam");
const button = document.querySelector("button");
const content = document.querySelector("#teamlist");

button.addEventListener("click", () => {
    if (insert.value) {
        const newLine = document.createElement("li");
        const delbtn = document.createElement("button");

        newLine.textContent = insert.value; // Use 'insert' instead of 'input'
        delbtn.textContent = "delete";

        newLine.append(delbtn);
        teamlist.appendChild(newLine); // Use 'teamlist' instead of 'teamlist'

        delbtn.addEventListener("click", () => {
            content.removeChild(newLine); // Use 'content' instead of 'teamlist'
            insert.focus();
            insert.value = "";
        });
    } else {
        insert.focus();
    }
});
