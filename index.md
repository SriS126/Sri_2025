---
layout: base
title: Chill with Sri
description: A home page where you can do fun Sri stuff
hide: true
---

# Chill with Sri Surapaneni 🌴

Whats up! **Chill with Me** — you can play a few games I made, you can take a trivia quiz about me, or just look around my socials. visit my github too!

---

## 🎮 Games

These are some very simple games I made or pasted from last year. 

- **[Snake](https://sris126.github.io/student//2023/08/30/SnakeWeek2.html)**: the classic snake game made by outside sources, i experimented with it last year to understand how it would work
- **[Dodging Game](https://sris126.github.io/student//2023/08/31/RectangleGame.html)**: This is a dodging game me and my partner last year made which involves event listeners and boundaries. Chat GPT helped us a lot with this game

---

## 🌟 Trivia Quiz about Me

take this quiz about me, try to get all of them correct!
<form id="triviaForm">
  <div id="quiz-container"></div>
  <button type="button" onclick="checkAnswers()">Submit Answers</button>
</form>

<div id="result"></div>

<script>
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
</script>



---

## 📢 Socials

Here are some of my socials that you can follow me on or look at. I used github a lot last year for CSP and I am frequently on social media a alot (very bad). 

- **[Instagram](https://www.instagram.com/sri__s126/?next=%2Fftc_runtimeterror%2F&hl=en)**: i don't post, only a few stories, most of the time im on reels
- **[Github](https://github.com/SriS126)**: i did a lot of cool projects year with my groups and hope to do the same this year. i mainly code simple stuff but want to obviously learn more. 
- **[Robotics Team](https://linktr.ee/ftcruntimeterror)**: I'm a business lead in Runtime Terror 22105. We are in FTC (First Tech Challenge) and I often help organize events. This includes teaching kids about STEM and letting them use makey-makey kits.

Make sure to check out my about me!

---

## Check out my playlist!

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5mW0jgyburuwiKlgIbGrEN?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>



---
