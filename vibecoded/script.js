const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const modeToggle = document.querySelector('.mode-toggle');
const filterButtons = document.querySelectorAll('.filter-button');
const characterCards = document.querySelectorAll('.character-card');
const essenceButton = document.querySelector('#essence-button');
const essenceCount = document.querySelector('#essence-count');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

modeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('lit-mode');
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    characterCards.forEach((card) => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

let essence = 0;
essenceButton?.addEventListener('click', () => {
  essence = Math.min(999, essence + 13);
  essenceCount.textContent = String(essence).padStart(3, '0');
  essenceButton.querySelector('.button-orb').style.boxShadow = '0 0 16px rgba(16, 22, 28, .75)';
  window.setTimeout(() => {
    essenceButton.querySelector('.button-orb').style.boxShadow = '';
  }, 350);
});
