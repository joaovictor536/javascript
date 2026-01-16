const botao = document.getElementById("btnCarregar");
const listaUsuarios = document.getElementById("listaUsuarios");
const mensagemErro = document.getElementById("mensagemErro");

async function carregarUsuarios() {
    // Limpa mensagens e lista
    listaUsuarios.innerHTML = "";
    mensagemErro.textContent = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Verificação do status HTTP
        if (!response.ok) {
            throw new Error("Erro na resposta da API");
        }

        // Converte para JSON
        const dados = await response.json();

        // Manipulação dos dados
        dados.forEach(usuario => {
            const item = document.createElement("li");
            item.textContent = `${usuario.name} - ${usuario.email}`;
            listaUsuarios.appendChild(item);
        });

    } catch (error) {
        mensagemErro.textContent =
            "Erro ao carregar os usuários, tente novamente mais tarde.";
        console.error(error);
    }
}

// Interatividade
botao.addEventListener("click", carregarUsuarios);
