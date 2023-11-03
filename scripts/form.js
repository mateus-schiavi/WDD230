function registerPerson() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;

    if (name.trim() === "" || age <= 0 || email.trim() === "" || city.trim() === "" || state.trim() === "") {
        alert("Please fill in all the required fields.");
        return;
    }

    alert("Registration successful:\nName: " + name + "\nAge: " + age + "\nEmail: " + email + "\nCity: " + city + "\nState: " + state);
    document.getElementById("registrationForm").reset();
}


// confirmation.js

// JavaScript code to extract and display GET parameters
const parameters = new URLSearchParams(window.location.search);
document.getElementById('name').textContent = params.get('name');
document.getElementById('age').textContent = params.get('age');
document.getElementById('email').textContent = params.get('email');
document.getElementById('id').textContent = params.get('id');
document.getElementById('city').textContent = params.get('city');
document.getElementById('state').textContent = params.get('state');

function submitForm() {
    // Coletar os valores dos campos
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var id = document.getElementById("id").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    // Verificar se algum campo está vazio
    if (name.trim() === "" || age.trim() === "" || email.trim() === "" || id.trim() === "" || city.trim() === "" || state.trim() === "") {
        alert("Please fill all the fields.");
        return;
    }

    // Redirecionar o usuário para a página de confirmação com os parâmetros na URL
    window.location.href = "record.html?name=" + name + "&age=" + age + "&email=" + email + "&id=" + id + "&city=" + city + "&state=" + state;
}


  // Extrair parâmetros da URL
var params = new URLSearchParams(window.location.search);
var name = params.get("name");
var age = params.get("age");
var email = params.get("email");
var id = params.get("id");
var city = params.get("city");
var state = params.get("state");

// Atualizar os elementos HTML com os valores
document.getElementById("name").textContent = name;
document.getElementById("age").textContent = age;
document.getElementById("email").textContent = email;
document.getElementById("id").textContent = id;
document.getElementById("city").textContent = city;
document.getElementById("state").textContent = state;
