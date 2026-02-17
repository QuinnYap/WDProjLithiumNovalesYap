const placeholder = '<img src="../../Assets/Final Proj Assets/placeholderimg.png" class="guessthem">';
const characters = [
    {
        imageurl: placeholder,
        choices: ["Ganyu", "Xiao", "Xianyun", "Tartaglia"],
        answer: "Xiao"
    },
    {
        imageurl: placeholder,
        choices: ["Yumemizuki Mizuki", "Kujou Sara", "Kuki Shinobu", "Chiori"],
        answer: "Kuki Shinobu"
    },
    {
        imageurl: placeholder,
        choices: ["Kiara", "Thoma", "Sayu", "Yoimiya"],
        answer: "Yoimiya"
    },
    {
        imageurl: placeholder,
        choices: ["Lisa", "Varka", "Mona", "Fischl"],
        answer: "Lisa"
    },
    {
        imageurl: placeholder,
        choices: ["Mochi", "Cats", "Peanuts", "Beans"],
        answer: "Beans"
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
        document.getElementById("guessimage").innerText = `Quiz Completed! Your Score is: ${score}`;
        document.querySelector(".options").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("result").innerHTML = "<a href='fillchar.html'> Proceed to Fill in the Blanks Section </a>";
    }
    document.getElementById("next-btn").disabled = true;
}
displayQuestion();