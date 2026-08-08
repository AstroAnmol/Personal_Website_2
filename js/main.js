/* ============================================================
   main.js — Site-wide interactivity
   ============================================================ */

(function () {
  'use strict';

  // ── Dark Mode ─────────────────────────────────────────────
  const DARK_KEY = 'anmol-theme';
  const root     = document.documentElement;

  // Apply saved preference immediately (before paint) to avoid flash
  const savedTheme = localStorage.getItem(DARK_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    root.setAttribute('data-theme', 'dark');
  }

  function toggleTheme() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next   = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(DARK_KEY, next);
  }

  // Wire up all toggle buttons (one per page)
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });
  });

  // ── Navbar scroll shadow ──────────────────────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  // ── Mobile nav toggle ─────────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // ── Back-to-top button ────────────────────────────────────
  const backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Publication type filters ──────────────────────────────
  const pubFilterContainer = document.getElementById('pubFilters');
  if (pubFilterContainer) {
    const filterBtns  = pubFilterContainer.querySelectorAll('.pub-filter-btn');
    const pubItems    = document.querySelectorAll('.pub-item');
    const yearGroups  = document.querySelectorAll('.pub-year-group');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        pubItems.forEach(item => {
          const type = item.dataset.type;
          const show = filter === 'all' || type === filter;
          item.style.display = show ? 'grid' : 'none';
        });

        // Hide year groups that have no visible items
        yearGroups.forEach(group => {
          const visible = [...group.querySelectorAll('.pub-item')]
            .some(i => i.style.display !== 'none');
          group.style.display = visible ? 'block' : 'none';
        });
      });
    });
  }

  // ── Research card filters ─────────────────────────────────
  const researchFilterContainer = document.getElementById('researchFilters');
  if (researchFilterContainer) {
    const rfBtns    = researchFilterContainer.querySelectorAll('.pub-filter-btn');
    const rcCards   = document.querySelectorAll('.card[data-category]');

    rfBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        rfBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        rcCards.forEach(card => {
          const cat  = card.dataset.category;
          const show = filter === 'all' || cat === filter;
          card.style.display = show ? 'flex' : 'none';
        });
      });
    });
  }

  // ── Scroll-reveal animation ───────────────────────────────
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards, teaching items, pub items etc. that scroll into view
  document.querySelectorAll('.card, .teaching-item, .pub-item, .news-item, .cv-item').forEach(el => {
    // Only apply scroll reveal if not already inside a fade-up (which uses CSS animation)
    if (!el.classList.contains('fade-up')) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      revealObserver.observe(el);
    }
  });

  // ── Teaching page quick nav active tracking ───────────────
  const teachingNav = document.getElementById('teachingNav');
  if (teachingNav) {
    const navBtns = teachingNav.querySelectorAll('.pub-filter-btn');
    const sec1 = document.getElementById('teaching-experience');
    const sec2 = document.getElementById('resources-leadership');

    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    if (sec1 && sec2) {
      window.addEventListener('scroll', () => {
        const top2 = sec2.getBoundingClientRect().top;
        if (top2 <= 200) {
          navBtns[0].classList.remove('active');
          navBtns[1].classList.add('active');
        } else {
          navBtns[0].classList.add('active');
          navBtns[1].classList.remove('active');
        }
      }, { passive: true });
    }
  }

  // ── Research Project In-Page Overlay Modal (Option 1) ─────
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.dataset.openModal;
      openModal(modalId);
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.querySelectorAll('.modal-close').forEach(closeBtn => {
      closeBtn.addEventListener('click', () => closeModal(modal));
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) closeModal(activeModal);
    }
  });

})();



