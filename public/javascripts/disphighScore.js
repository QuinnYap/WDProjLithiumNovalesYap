let chs = localStorage.getItem("hiScoreC") || 0;
let fbhs = localStorage.getItem("hiScoreF") || 0;
let gchs = localStorage.getItem("hiScoreG") || 0;
let ths = localStorage.getItem("hiScoreT") || 0;
//get high scores of each type of quiz

document.getElementById("teyvHiSc").innerHTML = `High score: ${ths}`;
document.getElementById("charHiSc").innerHTML = `High score: ${chs}`;
document.getElementById("guessHiSc").innerHTML = `High score: ${gchs}`;
document.getElementById("fillHiSc").innerHTML = `High score: ${fbhs}`;
//display high scores