const questions = [
    {
        question: "What is the region ruled by the Archon of Wisdom called?",
        choices: ["Mondstadt", "Liyue", "Inazuma", "Sumeru"],
        answer: "Sumeru"
    },
    {
        question: "Which character is known as the 'God of Contracts'?",
        choices: ["Zhongli", "Venti", "Raiden Shogun", "Nahida"],
        answer: "Zhongli"
    },
    {
        question: "What is the primary element associated with fire called?",
        choices: ["Dendro", "Pyro", "Anemo", "Cryo"],
        answer: "Pyro"
    },
];

let currentQuestionIndex = 0;
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.getElementsByClassName("option");
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = currentQuestion.choices[i];
        options[i].onclick = function() { checkAnswer(currentQuestion.choices[i]); };
    }
}
function checkAnswer(selectedChoice) {
    const resultElement = document.getElementById("result");
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.answer) {
        resultElement.innerText = "Correct!";
    } else {
        resultElement.innerText = `Wrong! The correct answer is: ${currentQuestion.answer}`;
    }
}
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("result").innerText = "";
    } else {
        document.getElementById("question").innerText = "Quiz Completed!";
        document.querySelector(".options").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
    }
}
displayQuestion();