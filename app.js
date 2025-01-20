       const questions = [
    { question: "僕はSausydogがすきか", answer: true },
    { question: "僕はクリープハイプが嫌いか", answer: true },
    { question: "僕はmoondoropが好きか", answer: true }
];
 
let currentQuestionIndex = 0;
 
function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].question;
}
 
function checkAnswer(userAnswer) {
    const resultElement = document.getElementById('result');
    if (userAnswer === questions[currentQuestionIndex].answer) {
        resultElement.textContent = "○";
    } else {
        resultElement.textContent = "×...";
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        resultElement.textContent += " お疲れ様でした。！";
    }
}
 
showQuestion();
