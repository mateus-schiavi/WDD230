document.addEventListener("DOMContentLoaded", function() {
    // Obtenha o formulário e adicione um ouvinte de evento para a submissão
    const joinForm = document.getElementById("joinForm");
    joinForm.addEventListener("submit", function(event) {
        // Obtenha os valores dos campos de entrada
        const nameValue = document.getElementById("name").value;
        const emailValue = document.getElementById("email").value;
        const phoneValue = document.getElementById("phone").value;
        const commentsValue = document.getElementById("comments").value;
        const addressValue = document.getElementById("address").value;
        const numberValue = document.getElementById("number").value;
        const surnameValue = document.getElementById("surname").value;
        const zipcodeValue = document.getElementById("zip-code").value;
        // Verifique se algum dos campos está vazio
        if (nameValue === "" || emailValue === "" || phoneValue === "" || commentsValue === "" || addressValue === "" || numberValue === "" || surnameValue === "" || zipcodeValue === "") {
            // Exiba uma mensagem de erro
            alert("Please fulfill all the fields to join us.");
            event.preventDefault(); // Impede o envio do formulário
        }
    });
});
