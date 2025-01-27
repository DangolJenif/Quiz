const questions = [
    { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
    { question: "What is the full form of CSS?", answer: "Cascading Style Sheets" },
    { question: "Which tag is used to display an image in HTML?", answer: "<img>" },
    { question: "Which property in CSS is used to add space between the border and the content?", answer: "padding" },
    { question: "Which tag creates a hyperlink in HTML?", answer: "<a>" },
    { question: "What is the default color of hyperlinks?", answer: "Blue" },
    { question: "Which tag is used to create a table in HTML?", answer: "<table>" },
    { question: "Which property in CSS is used to change background color?", answer: "background-color" },
    { question: "Which property in CSS is used to change text color?", answer: "color" },
];

function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const feedback = document.getElementById("feedback");
    const answerInput = document.getElementById("answer-input");

    feedback.innerHTML = "";
    answerInput.value = "";
    answerInput.disabled = false;

    questionContainer.innerHTML = `<h2>${questions[currentQuestionIndex].question}</h2>`;
    document.getElementById("submit-btn").disabled = false;
    document.getElementById("next-btn").disabled = true;
}

function checkAnswer() {
    const answerInput = document.getElementById("answer-input");
    const feedback = document.getElementById("feedback");
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

    feedback.innerHTML = userAnswer === correctAnswer
        ? "<p style='color: green;'>Correct!</p>"
        : `<p style='color: red;'>Incorrect. The correct answer is: ${questions[currentQuestionIndex].answer}</p>`;

    document.getElementById("submit-btn").disabled = true;
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showEndMessage();
    }
}

function showEndMessage() {
    const questionContainer = document.getElementById("question-container");
    const feedback = document.getElementById("feedback");
    
    questionContainer.innerHTML = "<h2>Quiz Completed!</h2>";
    feedback.innerHTML = "<p>Thank you for participating!</p>";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
}

shuffleQuestions(questions);

window.onload = loadQuestion;
