const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nome");
const estadoInput = document.querySelector("#estado");
const cidadeInput = document.querySelector("#cidade");
const emailInput = document.querySelector("#email");
const ajudaSelect = document.querySelector("#ajuda");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está vazio
    if (nomeInput.value === "") {
        alert("Por favor, preencha o seu nome")
        return;
    }
    //verifica se o e-mail foi preenchido e se é valido
    if (emailInput.value === "" || !seEmailValido(emailInput.value)) {
        alert("Por favor, preencha o seu E-mail");
        return
    }
    //verifica se o Estado foi preenchido
    if (estadoInput.value === "") {
        alert("Por favor, preencha seu Estado");
        return
    }
    //verifica se a Cidade foi preenchida
    if (cidadeInput.value === "") {
        alert("Por favor, preencha seu Cidade");
        return
    }
    //verifica situação
    if (ajudaSelect.value === "") {
        alert("Por favor, selecione se precisa de ajuda");
        return
    }

    // se todos os campor estiverem preenchidos, envie

    form.submit(alert("Obrigado pelo cadastro, entraremos em contato!"));
});

//função que valida e-mail
function seEmailValido(email) {
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return true;
    }
    return false;
}