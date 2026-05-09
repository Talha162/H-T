// ============= H&T Business Advisory — Interactions =============

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Sticky nav background on scroll
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 30) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
});
// close mobile nav on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Intersection-based reveal animations
const revealTargets = [
  '.section-head', '.mv-card', '.values-card', '.service-card',
  '.team-card', '.presence-card', '.why-card', '.cta-form', '.contact-list'
];
document.querySelectorAll(revealTargets.join(',')).forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = `${Math.min(i * 60, 300)}ms`;
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Form submit (no backend) — show local confirmation
function handleSubmit(ev) {
  ev.preventDefault();
  const form = ev.target;
  const note = document.getElementById('formNote');
  const data = Object.fromEntries(new FormData(form).entries());
  if (!data.name || !data.email || !data.service) {
    note.textContent = 'Please complete the required fields.';
    note.style.color = '#B23A48';
    return;
  }
  note.style.color = '';
  note.textContent = `Thanks, ${data.name.split(' ')[0]}! Your message is queued. We'll be in touch soon.`;
  form.reset();
}
window.handleSubmit = handleSubmit;
