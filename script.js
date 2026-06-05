const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  if (question) {
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  }
});


const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

const form = document.querySelector("#form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        valid = false;
        input.style.border = "1px solid red";
      } else {
        input.style.border = "1px solid green";
      }
    });

    if (valid) {
      alert("Formulário enviado com sucesso!");
      form.reset();
    } else {
      alert("Preencha todos os campos!");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {

  const quizData = [
    { question: "O que causa a maioria das queimadas?", options: ["Naturais", "Humanas", "Animais"], answer: "Humanas" },
    { question: "Qual sensor detecta fumaça?", options: ["MQ2", "DHT11", "LCD"], answer: "MQ2" },
    { question: "O DHT11 mede:", options: ["Velocidade", "Temperatura e umidade", "Pressão"], answer: "Temperatura e umidade" },
    { question: "O sistema usa:", options: ["IA", "Nada", "Somente sensores"], answer: "IA" },
    { question: "Satélites fazem:", options: ["Monitoramento", "Construção", "Plantio"], answer: "Monitoramento" },
    { question: "Objetivo principal:", options: ["Destruir", "Prevenir", "Ignorar"], answer: "Prevenir" },
    { question: "Tempo de detecção:", options: ["Horas", "Minutos", "Segundos"], answer: "Segundos" },
    { question: "Quem usa o sistema?", options: ["Bombeiros", "Gamers", "Cantores"], answer: "Bombeiros" },
    { question: "IoT significa:", options: ["Internet das Coisas", "Rede social", "Sistema"], answer: "Internet das Coisas" },
    { question: "Benefício principal:", options: ["Mais fogo", "Proteção", "Poluição"], answer: "Proteção" }
  ];

  let currentQuestion = 0;
  let score = 0;

  let questionEl = document.getElementById("question");
  let optionsEl = document.getElementById("options");
  const quizContainer = document.getElementById("quiz");

  function loadQuestion() {
    const current = quizData[currentQuestion];

    questionEl.innerText = current.question;
    optionsEl.innerHTML = "";

    current.options.forEach(option => {
      const btn = document.createElement("button");
      btn.innerText = option;
      btn.classList.add("option-btn");

      btn.onclick = () => {
        if (option === current.answer) {
          score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
          loadQuestion();
        } else {
          showResult();
        }
      };

      optionsEl.appendChild(btn);
    });
  }

  function showResult() {
  const quizContainer = document.getElementById("quiz");

  quizContainer.innerHTML = `
    <h2>Você acertou ${score} de ${quizData.length}</h2>
    <button id="restart-btn">Refazer Quiz</button>
  `;

  document.getElementById("restart-btn").onclick = () => {
    currentQuestion = 0;
    score = 0;
    quizContainer.innerHTML = `
      <h3 id="question"></h3>
      <div id="options"></div>
    `;

    questionEl = document.getElementById("question");
    optionsEl = document.getElementById("options");

    loadQuestion();
  };
}

  loadQuestion();
});

function setTheme(color) {
  if (color === "dark") document.body.style.background = "#000";
  if (color === "blue") document.body.style.background = "#0a0f1a";
  if (color === "green") document.body.style.background = "#001a0f";
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {

    const isActive = card.classList.contains("active");

    cards.forEach(c => {
      c.classList.remove("active", "hidden");
    });

    if (!isActive) {
      card.classList.add("active");

      cards.forEach(c => {
        if (c !== card) {
          c.classList.add("hidden");
        }
      });
    }
  });
});
