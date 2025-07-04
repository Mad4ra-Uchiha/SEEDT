// Efecto scroll: nombre completo ⇄ SEEDT
const header = document.getElementById('site-header');
const title  = document.getElementById('site-title');
const fullName = 'Servicios Exclusivos Especializado De Transporte';
const acronym = 'SEEDT';
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    document.body.classList.add('scrolled');
    title.textContent = acronym;
  } else {
    document.body.classList.remove('scrolled');
    title.textContent = fullName;
  }
});

// Toggle de la burbuja WhatsApp
const wpBtn = document.querySelector('.whatsapp-button');
const wpBubble = document.querySelector('.whatsapp-bubble');
wpBtn.addEventListener('click', () => {
  wpBubble.classList.toggle('hidden');
});