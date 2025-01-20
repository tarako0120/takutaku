       const questions = [
    { question: "Sausydogの名前はスヌーピーが由来になっている", answer: true },
    { question: "石原慎也は25歳である", answer: true },
    { question: "結成して12年か", answer: true }
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
