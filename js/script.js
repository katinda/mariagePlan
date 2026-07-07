// Menu mobile : affiche/masque les liens de navigation
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('nav-open'));
  });
}

// Carrousel de fond du hero : fondu automatique entre les slides
const heroSlides = document.querySelectorAll('.hero-slide');
if (heroSlides.length > 1) {
  let heroIndex = 0;
  setInterval(() => {
    heroSlides[heroIndex].classList.remove('is-active');
    heroIndex = (heroIndex + 1) % heroSlides.length;
    heroSlides[heroIndex].classList.add('is-active');
  }, 4000);
}

// Carrousel d'avis clients : PREV / NEXT font defiler citation + auteur
const testimonials = [
  {
    quote: "« On ne s'arrête pas de parler de la beauté de cette journée »",
    body: "« Merci d'avoir fait de notre rêve une réalité ! Nous n'aurions pas pu imaginer une journée plus douce, naturelle, légère et sincère. Tout ce que nous voulions, et bien plus encore. »",
    author: '— Sophie & Aurélien',
  },
  {
    quote: '« Une attention si personnelle, du premier au dernier instant »',
    body: '« Je me suis sentie écoutée et comprise dès notre premier échange. Chaque détail portait votre signature. »',
    author: '— Mme Kalonji',
  },
  {
    quote: '« Une énergie et un goût incroyables »',
    body: "« Raissa a transformé notre vision en une journée parfaite. Nous referions appel à elle sans hésiter ! »",
    author: '— Laura & Ben',
  },
  {
    quote: '« Professionnelle, calme, et tellement créative »',
    body: '« Notre mariage lui doit tout son éclat. Un accompagnement rassurant du début à la fin. »',
    author: '— Nadia & Yanis',
  },
];

let testimonialIndex = 0;
const quoteEl = document.getElementById('testimonial-quote');
const bodyEl = document.getElementById('testimonial-body');
const authorEl = document.getElementById('testimonial-author');

function renderTestimonial() {
  if (!quoteEl) return;
  const t = testimonials[testimonialIndex];
  quoteEl.textContent = t.quote;
  bodyEl.textContent = t.body;
  authorEl.textContent = t.author;
}

document.querySelectorAll('.testimonial-nav button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dir = parseInt(btn.dataset.dir, 10);
    testimonialIndex = (testimonialIndex + dir + testimonials.length) % testimonials.length;
    renderTestimonial();
  });
});

// Formulaire newsletter : confirmation simple sans backend
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(`Merci ! Vous serez inscrite avec l'adresse : ${email}`);
    newsletterForm.reset();
  });
}
