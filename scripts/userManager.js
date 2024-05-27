var usuarios = []


// Cadastrar um novo usuário
// TODO: conexao com banco de dados. ( no momento esta apenas cadastrando usuario em runtime )
function register() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let repetirSenha = document.getElementById("repetir-senha").value;
    
    //Confirmar senha
    if (senha != repetirSenha) {
        //Confirmacao de senha nao corresponde a senha original
        alert("Confirme sua senha.")
        return;
    }

    for (let i = 0; i < usuarios.length; i++) {
        // Loop em cada usuario cadastrado
        if (usuarios[i].email == email || usuarios[i].nome == nome) {
            // Se tiver alguem com o mesmo email e o mesmo nome, nao continuar
            alert("Usuario ja cadastrado.")
            return;
        }
    }

    // Se chegamos aqui e porque passamos por todas as validacoes
    // E assim podemos criar um novo usuario
    usuarios.push({nome: nome, email: email, senha: senha})
}

function login() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    for (let i = 0; i < usuarios.length; i++) {
        // Loop em todos os usuarios
        if (usuarios[i].email == nome && usuarios[i].senha == senha) {
            // Se um usuario corresponde ao login informado, entao deu sucesso
            alert("Login com sucesso.")
            return;
        }
    }

    // Se chegamos aqui e porque nenhum usuario corresponse ao login informado
    alert("Usuario nao encontrado.")
}

function loadUsers() {
    usuarios.push({nome: "usr", email: "email@email.com", senha: "email"})
}

// Carregar um usuario mockado para testes
loadUsers()