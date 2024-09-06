const questions = [
  {
    question: "What is my favorite color?",
    choices: ["Blue", "Red", "Green", "Purple"],
    answer: "Red"
  },
  {
    question: "What is my favorite hobby?",
    choices: ["Playing games", "Reading", "Cooking", "Traveling"],
    answer: "Playing games"
  },
  {
    question: "Which social media do I use the most?",
    choices: ["Instagram", "Twitter", "Facebook", "Snapchat"],
    answer: "Instagram"
  }
];

function displayQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  for (let i = 0; i < questions.length; i++) {
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `<p>${questions[i].question}</p>`;
    
    for (let j = 0; j < questions[i].choices.length; j++) {
      questionElement.innerHTML += `
        <label>
          <input type="radio" name="question${i}" value="${questions[i].choices[j]}">
          ${questions[i].choices[j]}
        </label><br>
      `;
    }
    quizContainer.appendChild(questionElement);
  }
}

function checkAnswers() {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const selectedAnswer = document.querySelector(`input[name="question${i}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === questions[i].answer) {
      score++;
    }
  }
  document.getElementById('result').innerText = `You got ${score} out of ${questions.length} correct!`;
}

displayQuiz();