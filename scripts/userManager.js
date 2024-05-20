var usuarios = []

function register() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let repetirSenha = document.getElementById("repetir-senha").value;
    
    if (senha != repetirSenha) {
        alert("Confirme sua senha.")
        return;
    }

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email || usuarios[i].nome == nome) {
            alert("Usuario ja cadastrado.")
            return;
        }
    }

    usuarios.push({nome: nome, email: email, senha: senha})
}

function login() {
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == nome && usuarios[i].senha == senha) {
            alert("Login com sucesso.")
            return;
        }
    }
    alert("Usuario nao encontrado.")
}

function loadUsers() {
    usuarios.push({nome: "usr", email: "email@email.com", senha: "email"})
}

loadUsers()