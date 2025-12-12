const questions = [
    {
        question: "1. Which adeptus did Qiqi find passed out and whom she carried to the Bubu Pharmacy in a short official Genshin trailer?",
        choices: ["Ganyu", "Xiao", "Xianyun", "Tartaglia"],
        answer: "Xiao"
    },
    {
        question: "2. Which character used to be a  shrine maiden at the Grand Narukami Shrine, moved to Liyue to study law and became classmates with Yanfei, then eventually went back to Inazuma?",
        choices: ["Yumemizuki Mizuki", "Kujou Sara", "Kuki Shinobu", "Chiori"],
        answer: "Kuki Shinobu"
    },
    {
        question: "3. Who is the Inazuman character who Alice, the author of the Teyvat Travel Guide, considered kidnapping because they reminded her of her daughter?",
        choices: ["Kiara", "Thoma", "Sayu", "Yoimiya"],
        answer: "Yoimiya"
    },
    {
        question: "4. Who was the lady who turned down the invite of Hexenzirkel, a coven of powerful witches?",
        choices: ["Lisa", "Varka", "Mona", "Fischl"],
        answer: "Lisa"
    },
    {
        question: "5. What is Arataki Itto allergic to?",
        choices: ["Mochi", "Cats", "Peanuts", "Beans"],
        answer: "Beans"
    },
    {
        question: "6. Who is the dragon companion of the Natlan character, Kinich?",
        choices: ["Ajaw", "Durin", "Ineffa", "Dvalin"],
        answer: "Ajaw"
    },
    {
        question: "7. Who is the consultant of the Wangsheng Funeral Parlor in Liyue?",
        choices: ["Qiqi", "Shenhe", "Zhongli", "Hu Tao"],
        answer: "Zhongli"
    },
    {
        question: "8. Which character's signature dish is macarons?",
        choices: ["Furina", "Navia", "Sigewinne", "Charlotte"],
        answer: "Navia"
    },
    {
        question: "9. Which of the following isn't one of the Traveller's titles?",
        choices: ["Honorary Knight of Favonius", "Captain of the Swordfish III", "First Sage of Buer", "Fontaine's External Contracted Assistant Researcher"],
        answer: "Captain of the Swordfish III"
    },
    {
        question: "10.  Which playable character said the line, '...ahahahaha. His laugh, not mine'?",
        choices: ["Bennet", "Varka", "Mika", "Kaeya"],
        answer: "Mika"
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