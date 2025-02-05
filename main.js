
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 200); // Pequeno atraso para suavizar a entrada
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, threshold: 0.4 }); // 40% do elemento visível antes de iniciar

  sections.forEach(section => {
    observer.observe(section);
  });
});

const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');



document.addEventListener("DOMContentLoaded", function() {
  const words = ["Front-end", "Web", "Freelancer", "Criativo"];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  const dynamicText = document.getElementById("dynamic-text");

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      letterIndex--; // Apaga as letras
    } else {
      letterIndex++; // Digita as letras
    }

    dynamicText.textContent = currentWord.substring(0, letterIndex);

    if (!isDeleting && letterIndex === currentWord.length) {
      isDeleting = true; // Começa a apagar
      setTimeout(typeEffect, 1000); // Pausa antes de apagar
      return;
    }

    if (isDeleting && letterIndex === 0) {
      isDeleting = false; // Depois de apagar, começa a digitar novamente
      wordIndex = (wordIndex + 1) % words.length; // Troca para a próxima palavra
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100); // Velocidade da digitação e apagamento
  }

  setTimeout(typeEffect, 500); // Delay inicial para começar o efeito
});