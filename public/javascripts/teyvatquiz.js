const questions = [
    {
        question: "1. What is the name of the continent where Genshin Impact takes place?",
        choices: ["Mondstadt", "Nod Krai", "Teyvat", "Europe"],
        answer: "Teyvat"
    },
    {
        question: "2. How many basic elements are present in the world of Genshin?",
        choices: ["4", "5", "6", "7"],
        answer: "7"
    },
    {
        question: "3. What is the goetic name of the current God of Eternity?",
        choices: ["Baal", "Barbatos", "Beelzebul", "Buer"],
        answer: "Beelzebul"
    },
    {
        question: "4. Who is the 6th of the Fatui Harbingers",
        choices: ["Scaramouche", "Arlecchino", "La Signora", "None of the above"],
        answer: "Scaramouche"
    },
    {
        question: "5. Which nation is considered the most technologically advanced out of all the nations of Teyvat?",
        choices: ["Sumeru", "Snezhnaya", "Fontaine", "Natlan"],
        answer: "Snezhnaya"
    },
    {
        question: "6. Which element represents the God of Freedom?",
        choices: ["Electro", "Hydro", "Dendro", "Anemo"],
        answer: "Anemo"
    },
    {
        question: "7. Who is known as the Warrior God?",
        choices: ["Mavuika", "Raiden Shogun", "Tsaritsa", "Zhongli"],
        answer: "Zhongli"
    },
    {
        question: "8. The burgeon elemental reaction is the result of which three elements?",
        choices: ["Hydro+Pyro+Dendro", "Dendro+Anemo+Pyro", "Electro+Dendro+Hydro", "Geo+Hydro+Dendro"],
        answer: "Hydro+Pyro+Dendro"
    },
    {
        question: "9. What is the general name of the dragons in Natlan?",
        choices: ["Quenepa", "Saurian", "Spinel", "Dracolite"],
        answer: "Saurian"
    },
    {
        question: "10.  What is the name of the creatures of Sumeru that only children, pure hearted adults, and those who believe in dreams can see?",
        choices: ["Adepti", "Vishaps", "Aranara", "Setekh Wenut"],
        answer: "Aranara"
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
    document.getElementById("next-btn").disabled = false;
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
    document.getElementById("next-btn").disabled = true;
}
displayQuestion();