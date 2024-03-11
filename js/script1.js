const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nome");
const estadoInput = document.querySelector("#estado");
const cidadeInput = document.querySelector("#cidade");
const emailInput = document.querySelector("#email");
const ajudaSelect = document.querySelector("#ajuda");


//significa que alguém clicou em um botão de enviar dentro desse formulário.
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

    if (ajudaSelect.value === "sim") {
        let senha; // Declaração da variável senha

        // Loop do-while para garantir que a senha tenha pelo menos 8 caracteres
        do {
            prompt("Por favor, digite o nome do usuário a ser cadastrado:");
            senha = prompt("Por favor, digite sua senha:");


            // Verificar se a senha tem menos de 8 caracteres
            if (senha.length < 8) {
                alert("Por favor, preencha a senha com 8 ou mais digitos");
            }
        } while (senha.length < 8); // Continua solicitando a senha até que tenha pelo menos 8 caracteres
    }
    form.submit(alert("Obrigado pelo cadastro"));
    return





}

    // se todos os campor estiverem preenchidos, envie


);

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
function validaSenha(senha, minDigitos) {
    if (senha.length >= minDigitos) {
        //senha valida
        return true
    }
    return false
}