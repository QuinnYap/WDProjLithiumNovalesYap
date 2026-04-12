const link = "https://genshin-impact-map.appsample.com/";
const questions = [
    {
        question: "1. What is the name of the first archon that the Traveler came across?",
        answer: "VENTI"
    },
    {
        question: "2. In which region on Teyvat did the first ever Hydro Archon of Fontaine pass away in?",
        answer: "SUMERU"
    },
    {
        question: "3. Miss Hina, a popular fictional advice columnist for That's Life magazine in Inazuma is the genderbent version of which character in Genshin?",
        answer: "GOROU"
    },
    {
        question: "4. What is the name of the pyro Abyss Lector that the traveler first encounters in Enkanomiya?",
        answer: "ENJOU"
    },
    {
        question: "5. What is the name of the Goddess of Flowers who used to rule alongside King Deshret and the Greater Lord Rukkhadevata in Sumeru?",
        answer: "NABU MALIKATA"
    },
    {
        question: "6. What is the true first name of the Eighth of the Fatui Harbingers, the one who is also known as La Signora, the Fair Lady?",
        answer: "ROSALYNE"
    },
    {
        question: "7. Who is the mysterious former knight captain of the Royal Guard of Khaenri'ah?",
        answer: "DAINSLEIF"
    },
    {
        question: "8. What type of creature were the original Fontainians?",
        answer: "OCEANID"
    },
    {
        question: "9. There is a massive annual festival that occurs in Liyue Harbor. What is it called?",
        answer: "LANTERN RITE"
    },
    {
        question: "10.  What is the name of the master of Tartaglia's master Skirk, who is also known as The Foul, one of the Five Sinners of Khaenri'ah?",
        answer: "SURTALOGI"
    },
];

if(localStorage.getItem("hiScoreF")){
    highScore = localStorage.getItem("hiScoreF");
}
else{
    highScore = 0;
}

let currentQuestionIndex = 0;
let score = 0;

    const questionElement = document.getElementById("question");
    const answerInput = document.getElementById("answer-input");
    const submitBtn = document.getElementById("submit-btn");
    const resultElement = document.getElementById("result");
    const nextBtn = document.getElementById("next-btn");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerInput.value = "";
    resultElement.innerText = "";
    answerInput.disabled = false;
    submitBtn.disabled = false;
    nextBtn.disabled = true;
}
   
   /* for (let i = 0; i < options.length; i++) {
        options[i].innerText = currentQuestion.choices[i];
        options[i].onclick = function() { checkAnswer(currentQuestion.choices[i]); };
    }*/

function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer = answerInput.value.trim().toUpperCase();
    if (userAnswer === currentQuestion.answer) {
        resultElement.innerText = "Correct!";
        score += 1;
    } else {
        resultElement.innerText = `Wrong! The correct answer is: ${currentQuestion.answer}`;
    }
    answerInput.disabled = true;
    submitBtn.disabled = true;
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById("result").innerText = "";
    } else {
        if(score > highScore){
            localStorage.setItem("hiScoreF", score);
            highScore = score;
        }
        else{
            localStorage.setItem("hiScoreF", highScore);
        }
        document.getElementById("question").innerText = `Quiz Completed! Your Score is: ${score}/10; Your High Score is ${highScore}`;
        answerInput.style.display = "none";
        document.querySelector("label[for='answer-input']").style.display = "none";
        submitBtn.style.display = "none";
        nextBtn.style.display = "none";
        resultElement.innerText = "";
    }
}

displayQuestion();


