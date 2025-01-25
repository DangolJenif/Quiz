const questions = [
    // Web Development Questions
    {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language"
    },
    {
        question: "What is the full form of CSS?",
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used to display an image on a webpage?",
        answer: "<img>"
    },
    {
        question: "What does JavaScript allow you to do in web development?",
        answer: "Add interactivity to webpages"
    },
    {
        question: "Which attribute is used to link an external CSS file to an HTML document?",
        answer: "href"
    },
    {
        question: "Which HTML element is used to define a hyperlink?",
        answer: "<a>"
    },
    {
        question: "What is the default color of hyperlinks in most browsers?",
        answer: "Blue"
    },
    {
        question: "Which tag is used to create a table in HTML?",
        answer: "<table>"
    },
    {
        question: "Which property in CSS is used to change the background color of a webpage?",
        answer: "background-color"
    },
    {
        question: "What is the purpose of the <head> section in an HTML document?",
        answer: "It contains meta-information about the document, such as title and links to stylesheets."
    },

    // C Language Questions
    {
        question: "What does C stand for in the C programming language?",
        answer: "C is named after its predecessor, B."
    },
    {
        question: "What is a variable in C?",
        answer: "A storage location with a name that holds a value."
    },
    {
        question: "How do you print something on the screen in C?",
        answer: "printf()"
    },
    {
        question: "What is the symbol used for comments in C?",
        answer: "// for single-line comments and /* */ for multi-line comments."
    },
    {
        question: "What does the #include directive do in C?",
        answer: "It tells the compiler to include the contents of a file before compiling."
    },
    {
        question: "Which function is used to get user input in C?",
        answer: "scanf()"
    },
    {
        question: "What does the return 0; statement indicate in a C program?",
        answer: "It indicates that the program has executed successfully."
    },
    {
        question: "How do you declare an integer variable in C?",
        answer: "int variable_name;"
    },
    {
        question: "What is a loop in C?",
        answer: "A loop allows a block of code to be repeated multiple times."
    },
    {
        question: "What is the syntax to define a function in C?",
        answer: "return_type function_name(parameters) { // code }"
    },

    // Math Questions
    {
        question: "What is the value of π (pi) up to two decimal places?",
        answer: "3.14"
    },
    {
        question: "What is 5 * 6?",
        answer: "30"
    },
    {
        question: "What is the formula for the area of a rectangle?",
        answer: "length * width"
    },
    {
        question: "What is the perimeter of a square with a side length of 4?",
        answer: "16"
    },
    {
        question: "What is the sum of angles in a triangle?",
        answer: "180 degrees"
    },
    {
        question: "What is the Pythagorean theorem?",
        answer: "a² + b² = c²"
    },
    {
        question: "What is 12 ÷ 3?",
        answer: "4"
    },
    {
        question: "What is the square of 8?",
        answer: "64"
    },
    {
        question: "What is the value of 2³?",
        answer: "8"
    },
    {
        question: "What is the formula to calculate the volume of a cube?",
        answer: "side³"
    },

    // Geography Questions
    {
        question: "What is the capital of Japan?",
        answer: "Tokyo"
    },
    {
        question: "Which continent is Egypt located in?",
        answer: "Africa"
    },
    {
        question: "What is the largest country by area in the world?",
        answer: "Russia"
    },
    {
        question: "Which ocean lies to the east of the United States?",
        answer: "Atlantic Ocean"
    },
    {
        question: "What is the longest river in the world?",
        answer: "Nile River"
    },
    {
        question: "Which country has the largest population in the world?",
        answer: "China"
    },
    {
        question: "What is the capital of Canada?",
        answer: "Ottawa"
    },
    {
        question: "Which desert is the largest in the world?",
        answer: "Sahara Desert"
    },
    {
        question: "What is the highest mountain in the world?",
        answer: "Mount Everest"
    },
    {
        question: "What is the capital of Australia?",
        answer: "Canberra"
    }
];

// Shuffle the questions array
function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];  // Swap elements
    }
}

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const feedback = document.getElementById("feedback");
    const answerInput = document.getElementById("answer-input");

    feedback.innerHTML = "";  // Clear feedback
    answerInput.value = "";   // Clear input field
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

    if (userAnswer === correctAnswer) {
        feedback.innerHTML = "<p style='color: green;'>Correct!</p>";
        score++;
    } else {
        feedback.innerHTML = "<p style='color: red;'>Incorrect. The correct answer is: " + questions[currentQuestionIndex].answer + ".</p>";
    }

    document.getElementById("submit-btn").disabled = true;
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.innerHTML = `<h3>Your score: ${score} / ${questions.length}</h3>`;
    document.getElementById("next-btn").style.display = "none";
}

// Shuffle the questions before loading the first question
shuffleQuestions(questions);

window.onload = loadQuestion;
