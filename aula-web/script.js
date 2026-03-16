// Script simples para simular envio do formulário

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formPaciente");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Obrigado! Sua mensagem foi enviada. Em breve entraremos em contato.");

        form.reset();

    });

});