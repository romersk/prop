const questions = [
  {
    text: "Excuse me sir, are you breathing?",
    img: "images/breath.gif",
    options: ["Yes", "Sure"]
  },
  {
    text: "Are you sure that you're gay?",
    img: "images/gay.jpg",
    options: ["I was born ready", "Only when you're around", "Gay for you 😉"]
  },
  {
    text: "Do you think I'm funny?",
    img: "images/math.jpg",
    options: ["Yes", "Sure", "No"]
  },
  {
    text: "What brand is your microwave?",
    img: "images/mic.jpg",
    input: true
  },
  {
    text: "Great, ur nostrils are 10/10. I would politely enter and say thank you on the way out.",
    img: "images/flirt.jpg",
    options: ["😳 Okay"]
  },
  {
    text: "Do you wanna be my boyfriend?",
    img: "images/me.jpg",
    options: ["Yes", "No"]
  }
];

let current = 0;

function showQuestion(index) {
  const q = questions[index];
  const qText = document.getElementById("question-text");
  const qImg = document.getElementById("question-img");
  const qOptions = document.getElementById("answer-options");

  qText.innerText = q.text;
  qImg.src = q.img;
  qOptions.innerHTML = "";

  if (q.input) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Your answer here";
    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.onclick = () => nextQuestion();
    qOptions.appendChild(input);
    qOptions.appendChild(submit);
  } else {
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => handleAnswer(opt);
      qOptions.appendChild(btn);
    });
  }
}

function handleAnswer(opt) {
  if (current === 2 && opt === "No") {
    alert("🧠 Think carefully...");
    return;
  } else if (current === 5 && opt === "No") {
    const btn = document.querySelector("button:last-child");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 70 + "%";
    btn.style.top = Math.random() * 70 + "%";
    return;
  }
  nextQuestion();
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion(current);
  } else {
    document.querySelector(".container").innerHTML = `
  <h2>Yay! Congrats ❤️</h2>
  <img src="images/last_cat.jpg" alt="Cute celebration" style="max-width: 100%; border-radius: 12px; margin-top: 20px;">
`;
  }
}

window.onload = () => {
  showQuestion(current);
};
