const placeholder = '<img src="../../Assets/Final Proj Assets/placeholderimg.png" class="guessthem">';
const characters = [
    {
        imageurl: '<img src="../../Assets/Final Proj Assets/Chiori_Card.png" class="guessthem">',
        choices: ["Ganyu", "Xiao", "Chiori", "Tartaglia"],
        answer: "Chiori"
    },
    {
        imageurl: '<img src="../../Assets/Final Proj Assets/Gaming_Card.png" class="guessthem">',
        choices: ["Yumemizuki Mizuki", "Kujou Sara", "Kuki Shinobu", "Gaming"],
        answer: "Gaming"
    },
    {
        imageurl: '<img src="../../Assets/Final Proj Assets/Rosaria_Card.png" class="guessthem">',
        choices: ["Rosaria", "Thoma", "Sayu", "Yoimiya"],
        answer: "Rosaria"
    },
    {
        imageurl: '<img src="../../Assets/Final Proj Assets/Tighnari_Card.png" class="guessthem">',
        choices: ["Lisa", "Tighnari", "Mona", "Fischl"],
        answer: "Tighnari"
    },
    {
        imageurl: '<img src="../../Assets/Final Proj Assets/Razor_Card.png" class="guessthem">',
        choices: ["Cyno", "Razor", "Nilou", "Xiangling"],
        answer: "Razor"
    }
];

function unblurImg(){
    const leImage = document.getElementById("guessimage");
    leImage.style.filter = "blur(0px)";
}
function blurImg(){
    const leImage = document.getElementById("guessimage");
    leImage.style.filter = "blur(15px)";
}

let currentCharacter = 0;
let score = 0;
function displayQuestion() {
    const questionElement = document.getElementById("guessimage");
    const options = document.getElementsByClassName("option");
    const currentQuestion = characters[currentCharacter];
    blurImg();

    questionElement.innerHTML = currentQuestion.imageurl;
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = currentQuestion.choices[i];
        options[i].onclick = function() { checkAnswer(currentQuestion.choices[i]); };
    }
}
function checkAnswer(selectedChoice) {
    const resultElement = document.getElementById("result");
    const currentQuestion = characters[currentCharacter];
    unblurImg();
    if (selectedChoice === currentQuestion.answer) {
        resultElement.innerText = "Correct!";
        score += 1;
    } else {
        resultElement.innerText = `Wrong! The correct answer is: ${currentQuestion.answer}`;
    }
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentCharacter++;
    if (currentCharacter < characters.length) {
        displayQuestion();
        document.getElementById("result").innerText = "";
    } else {
        document.getElementById("guessimage").innerText = `Quiz Completed! Your Score is: ${score}/5`;
        document.querySelector(".options").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("result").innerText = " "
    }
    document.getElementById("next-btn").disabled = true;
}
displayQuestion();