const delay = ms => new Promise(res => setTimeout(res, ms));

var questions = []
var currentQuestion = 0

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

function loadQuestions() {
    questions.push(
        { 
            statement: "Selecione o primeiro item", 
            answers: {
                a: "Oi",
                b: "Oi",
                c: "Oi",
                d: "Oi"
            },
            correctAnswer: "b"
        }
    )

    questions.push(
        { 
            statement: "Selecione o segundo item", 
            answers: {
                a: "Oi",
                b: "Oi",
                c: "Oi",
                d: "Oi"
            },
            correctAnswer: "b"
        }
    )

    shuffle(questions)
    updateQuestion()
}

function updateQuestion() {
    document.getElementById("statement").innerText = questions[currentQuestion].statement
    document.getElementById("answer1").innerText = questions[currentQuestion].answers.a
    document.getElementById("answer2").innerText = questions[currentQuestion].answers.b
    document.getElementById("answer3").innerText = questions[currentQuestion].answers.c
    document.getElementById("answer4").innerText = questions[currentQuestion].answers.d
    currentQuestion += 1
}

async function resolveQuestion(elem) {
    let answer = "";
    switch(elem.id){
        case "answerDiv1":
            answer = "a"
            break
        case "answerDiv2":
            answer = "b"
            break
        case "answerDiv3":
            answer = "c"
            break
        case "answerDiv4":
            answer = "d"
            break
    }
    if (questions[currentQuestion].correctAnswer == answer) {
        elem.style.backgroundColor = 'green';
    } else {
        elem.style.backgroundColor = 'red';
    }
    document.getElementById("answerDiv1").onclick = null;
    document.getElementById("answerDiv2").onclick = null;
    document.getElementById("answerDiv3").onclick = null;
    document.getElementById("answerDiv4").onclick = null;
    await delay(2500);
    updateQuestion()
}

loadQuestions()