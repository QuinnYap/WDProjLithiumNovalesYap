const link = "https://genshin-impact-map.appsample.com/";
const questions = [
    {
        question: "1. Which adeptus did Qiqi find passed out and whom she carried to the Bubu Pharmacy in a short official Genshin trailer?",
        answer: "XIAO"
    },
    {
        question: "2. Which character used to be a  shrine maiden at the Grand Narukami Shrine, moved to Liyue to study law and became classmates with Yanfei, then eventually went back to Inazuma?",
        answer: "KUKI SHINOBU"
    },
    {
        question: "3. Who is the Inazuman character who Alice, the author of the Teyvat Travel Guide, considered kidnapping because they reminded her of her daughter?",
        answer: "YOIMIYA"
    },
    {
        question: "4. Who was the lady who turned down the invite of Hexenzirkel, a coven of powerful witches?",
        answer: "LISA"
    },
    {
        question: "5. What is Arataki Itto allergic to?",
        answer: "BEANS"
    },
    {
        question: "6. Who is the dragon companion of the Natlan character, Kinich?",
        answer: "AJAW"
    },
    {
        question: "7. Who is the consultant of the Wangsheng Funeral Parlor in Liyue?",
        answer: "ZHONGLI"
    },
    {
        question: "8. Which character's signature dish is macarons?",
        answer: "NAVIA"
    },
    {
        question: "9. What do the characters in Genshin Impact call the player?",
        answer: "TRAVELER"
    },
    {
        question: "10.  Which playable character said the line, '...ahahahaha. His laugh, not mine'?",
        answer: "MIKA"
    },
];

let currentQuestionIndex = 0;
let score = 0;
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
        score += 1;
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
        document.getElementById("question").innerText = `Quiz Completed! Your Score is: ${score}`;
        document.querySelector(".options").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("result").innerHTML = "<a href='fillchar.html'> Proceed to Fill in the Blanks Section </a>";
    }
    document.getElementById("next-btn").disabled = true;
}
displayQuestion();

// yo im gonna fix this tomorrow i swearrr on my life