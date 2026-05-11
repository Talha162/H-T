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

// Form submit — opens Gmail compose with prefilled message to H&T inbox
const HT_INBOX = 'info@htbusinessadvisory.com';

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

  const subject = `New enquiry: ${data.service} — ${data.name}`;
  const bodyLines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Service of Interest: ${data.service}`,
    '',
    'Message:',
    data.message ? data.message : '(No additional message provided.)'
  ];
  const body = bodyLines.join('\n');

  const gmailUrl =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    '&to=' + encodeURIComponent(HT_INBOX) +
    '&su=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

  // Fallback to mailto: if Gmail compose is blocked / unavailable
  const mailtoUrl =
    'mailto:' + HT_INBOX +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);

  const popup = window.open(gmailUrl, '_blank', 'noopener');
  if (!popup) {
    window.location.href = mailtoUrl;
  }

  note.style.color = '';
  note.textContent = `Thanks, ${data.name.split(' ')[0]}! Gmail is opening in a new tab — please click "Send" to deliver your message.`;
  form.reset();
}
window.handleSubmit = handleSubmit;
