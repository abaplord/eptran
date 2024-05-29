var usuarios = []

const Grade = {
    ELEMENTARYSCHOOL: "iniciais",
    HIGHSCHOOL: "finais",
    MIDDLESCHOOL: "medio"
};

function register() {
    let name = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("senha").value;
    let passwordConfirmation = document.getElementById("repetir-senha").value;
    let grade = document.getElementById("serie").value;

    if (password != passwordConfirmation) {
        alert("Confirme sua senha.")
        return;
    }

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email || usuarios[i].name == name) {
            alert("Usuario ja cadastrado.")
            return;
        }
    }

    usuarios.push({ name: name, email: email, password: password, grade: grade })
    redirectUser(grade);
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("senha").value;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email && usuarios[i].password == password) {
            redirectUser(usuarios[i].grade)
            return;
        }
    }

    alert("Usuario nao encontrado.")
}

function redirectUser(grade) {

    switch (grade) {
        case Grade.ELEMENTARYSCHOOL:
            window.location.href = "/pages/initial-series.html"
            break
        case Grade.MIDDLESCHOOL:
            window.location.href = "/pages/highschool.html"
            break
        case Grade.HIGHSCHOOL:
            window.location.href = "/pages/final-series.html"
            break
        default:
            break
    }

}

function loadUsers() {
    usuarios.push({ name: "usr", email: "email@email.com", password: "email", grade: Grade.ELEMENTARYSCHOOL })
}

loadUsers()