// ===========================================
// Mobile Navigation Toggle
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});

// ===========================================
// Dynamic Nav-Link Highlighting
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main[id], section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const observerOpts = { root: null, rootMargin: '0px', threshold: 0.5 };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.classList.remove('active'));
        if (link) link.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOpts);
  sections.forEach((sec) => observer.observe(sec));
});

// ===========================================
// Back-to-Top Button Behavior
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ===========================================
// Filter Institutions in Real-Time
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('filterInput');
  const items = document.querySelectorAll('.grid-item');
  input.addEventListener('input', () => {
    const term = input.value.trim().toLowerCase();
    items.forEach((card) => {
      const name = card.querySelector('span').textContent.toLowerCase();
      card.style.display = name.includes(term) ? 'block' : 'none';
    });
  });
});
