---
layout: page
title: Chill with Sri 🌴
description: A home page where you can do fun Sri stuff
hide: true
comments: true
---

Whats up! **Chill with Me and VSCode and Github** — you can play a few games I made, you can take a trivia quiz about me, or just look around my socials. visit my github too!

I am Sri, the GOAT. Some videogames I like:

<div style="display: flex; gap: 10px; justify-content: center;">
  <img width="237" alt="Screenshot 2024-09-06 at 9 04 40 AM" src="https://github.com/user-attachments/assets/bb21b7e8-cb73-4f13-815c-c25e6fd08cfa">
  <img width="217" alt="Screenshot 2024-09-06 at 9 05 07 AM" src="https://github.com/user-attachments/assets/d04a4705-62f5-400d-acc5-507ce44a9b22">
  <img width="293" alt="Screenshot 2024-09-06 at 9 09 38 AM" src="https://github.com/user-attachments/assets/7d003a98-a1cb-450b-a34e-00aa472e43d7">
</div>

## Make sure to [comment](https://sris126.github.io/Sri_2025/devops/tools/home) down below your favorite videogame!!!



------------------------------------------------------------------------------------------------

Personal Stuff: 

<div style="display: flex; gap: 20px; justify-content: center;">
  <div>
    <img width="237" alt="Screenshot 2024-09-06 at 9 07 19 AM" src="https://github.com/user-attachments/assets/67523441-fb70-4d84-8e68-86d34c48dcfe">
    <ul>
      <li>I am from Guntur/Hyderbad in India</li>
      <li>Went to India summer before 9th</li>
      <li>I was born here at palomar hospital</li>
    </ul>
  </div>
  <div>
    <img width="217" alt="Screenshot 2024-09-09 at 7 45 40 PM" src="https://github.com/user-attachments/assets/6b5b5d9d-9a3d-4a6a-9880-bfcb71e85591">
    <ul>
      <li>I went to Monterey Ridge elementary school</li>
      <li>I went to OVMS Middle School</li>
      <li>Im in DNHS, and want to go to a UC</li>
    </ul>
  </div>
  <div>
    <img width="293" alt="Screenshot 2024-09-09 at 7 48 00 PM" src="https://github.com/user-attachments/assets/8545faed-bbaf-4444-93fc-01ab0a21ce7a">
    <ul>
      <li>I like travelling a lot</li>
      <li>I go to Coronado Island a lot </li>
      <li>I like the sea lol</li>
    </ul>
  </div>
</div>
------------------------------------------------------------------------------------------------

## 🎮 Games

These are some very simple games I made or pasted from last year, snake and rectangle game. Click on them!

<div style="display: flex; gap: 20px;">
  <a href="https://sris126.github.io/student//2023/08/30/SnakeWeek2.html">
    <img src="https://github.com/user-attachments/assets/070c243f-b90e-4f04-99f5-1f23f13ce820" alt="Snake Game" style="width: 300px; height: 300px; object-fit: cover;">
  </a>

  <a href="https://sris126.github.io/student//2023/08/31/RectangleGame.html">
    <img src="https://github.com/user-attachments/assets/308d920c-a0c5-461a-aca1-2fb48189c930" alt="Dodging Game" style="width: 300px; height: auto; object-fit: cover;">
  </a>
</div>

------------------------------------------------------------------------------------------------

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

## Check out my playlist!

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5mW0jgyburuwiKlgIbGrEN?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

------------------------------------------------------------------------------------------------


## 📢 Socials

Here are some of my socials that you can follow me on or look at. I used github a lot last year for CSP and I am frequently on social media a alot (very bad). 

- **[Instagram](https://www.instagram.com/sri__s126/?next=%2Fftc_runtimeterror%2F&hl=en)**: i don't post, only a few stories, most of the time im on reels
- **[Github](https://github.com/SriS126)**: i did a lot of cool projects year with my groups and hope to do the same this year. i mainly code simple stuff but want to obviously learn more. 
- **[Robotics Team](https://linktr.ee/ftcruntimeterror)**: I'm a business lead in Runtime Terror 22105. We are in FTC (First Tech Challenge) and I often help organize events. This includes teaching kids about STEM and letting them use makey-makey kits.

Make sure to check out my about me!



---