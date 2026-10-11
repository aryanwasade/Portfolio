/**
 * ============================================================
 * ARYAN WASADE — PERSONAL PORTFOLIO
 * script.js
 * ============================================================
 *
 * HOW TO CONFIGURE:
 * 1. Update SITE_CONFIG below with your email, social links, resume path.
 * 2. Update PROJECTS_DATA with your actual GitHub repo URLs and demo links.
 * 3. Add/remove projects as needed by editing the PROJECTS_DATA array.
 * ============================================================
 */

/* ============================================================
   SITE CONFIGURATION — Edit this section
   ============================================================ */
const SITE_CONFIG = {
  // Your email address (used in contact form mailto link)
  email: "your.email@example.com",        // <-- REPLACE with your real email

  // Social links
  github: "https://github.com/aryanwasade",
  linkedin: "https://www.linkedin.com/in/aryan-wasade-37441b31a/", // LinkedIn profile URL
  resume: "assets/aryan-wasade-resume.pdf", // <-- Path to your resume PDF (place in assets/ folder)
};

/* ============================================================
   PROJECTS DATA — Edit repository and demo URLs
   ============================================================ */
const PROJECTS_DATA = [
  {
    id: "blockchain",
    number: "01",
    title: "Patient Data Management System Using Blockchain",
    categories: ["blockchain"],
    categoryLabels: ["Blockchain", "Healthcare Technology"],
    thumbSrc: "assets/project-blockchain.png",
    thumbIcon: "🔗",
    thumbAlt: "Blockchain patient data management project screenshot",
    description:
      "A blockchain-based patient data management project focused on improving the integrity, security, and traceability of healthcare records. By applying blockchain concepts, the system aims to make record-related transactions more transparent and help detect unauthorized modifications.",
    problem:
      "Healthcare records are prone to unauthorized tampering and lack transparent audit trails, making it difficult to verify the integrity of data over time.",
    keyPoints: [
      "Patient record management using blockchain data structures",
      "Data integrity and tamper-evident transaction history",
      "Improved traceability of record-related operations",
      "Exploration of healthcare information management with blockchain",
    ],
    technologies: ["Blockchain", "Python"],
    repoUrl: "",   // <-- Add GitHub repo URL, or leave "" to show "Link coming soon"
    demoUrl: "",   // <-- Add live demo URL, or leave "" to hide
  },
  {
    id: "salesforce",
    number: "02",
    title: "Order Management System Using Salesforce",
    categories: ["salesforce"],
    categoryLabels: ["Salesforce", "Enterprise Applications"],
    thumbSrc: "assets/project-salesforce.png",
    thumbIcon: "☁️",
    thumbAlt: "Salesforce order management project screenshot",
    description:
      "An order management project built using Salesforce to organize customer and order information and provide a structured way to follow order progress. It explores how CRM platforms can help businesses centralize information and manage order-related workflows.",
    problem:
      "Businesses often struggle to maintain organized records of orders and customer interactions across disconnected systems, leading to inefficiencies in tracking and processing.",
    keyPoints: [
      "Organized order records within Salesforce",
      "Customer and order information management",
      "Order-status tracking and visibility",
      "Exploration of CRM-based workflow management",
    ],
    technologies: ["Salesforce", "CRM"],
    repoUrl: "",   // <-- Add GitHub repo URL, or leave "" to show "Link coming soon"
    demoUrl: "",   // <-- Add live demo URL, or leave "" to hide
  },
  {
    id: "vaani",
    number: "03",
    title: "Vaani — Vernacular AI Writing Assistant",
    categories: ["ai"],
    categoryLabels: ["Artificial Intelligence", "Language Technology"],
    thumbSrc: "assets/project-vaani.png",
    thumbIcon: "🗣️",
    thumbAlt: "Vaani AI vernacular writing assistant project screenshot",
    description:
      "Vaani is an AI-based language assistance concept designed to support writing in Indian vernacular languages. It focuses on helping users translate text and identify writing mistakes in regional-language sentences, making digital communication more accessible.",
    problem:
      "Most digital writing tools are optimized for English and major global languages, leaving users who write in Indian regional languages without adequate grammar checking and translation support.",
    keyPoints: [
      "Vernacular-language writing assistance for Indian languages",
      "Translation support across selected language pairs",
      "Identification of sentence-level writing mistakes",
      "Potential to improve access to digital writing tools for regional-language users",
    ],
    technologies: ["Python", "NLP", "AI/ML"],
    repoUrl: "",   // <-- Add GitHub repo URL, or leave "" to show "Link coming soon"
    demoUrl: "",   // <-- Add live demo URL, or leave "" to hide
  },
  {
    id: "antispoofing",
    number: "04",
    title: "Anti-Spoofing in Real-Time Interview & Analysis System",
    categories: ["ai"],
    categoryLabels: ["Computer Vision", "Artificial Intelligence"],
    thumbSrc: "assets/project-antispoofing.jpg",
    thumbIcon: "👁️",
    thumbAlt: "Anti-spoofing interview analysis project screenshot",
    description:
      "A computer-vision project focused on identifying potential spoofing attempts during online interviews. It explores face detection, liveness checks, and behavioural analysis to help identify suspicious use of photographs, recorded videos, or screen-based impersonation attempts.",
    problem:
      "Online interviews and assessments are increasingly vulnerable to identity fraud, where participants may attempt to use photographs or pre-recorded videos instead of a live feed.",
    keyPoints: [
      "Real-time face detection and tracking",
      "Liveness detection to distinguish live feeds from static images",
      "Behavioural analysis for spotting impersonation attempts",
      "React/TypeScript frontend with a Python backend",
    ],
    technologies: ["Python", "OpenCV", "TensorFlow/Keras", "React", "TypeScript"],
    repoUrl: "",   // <-- Add GitHub repo URL, or leave "" to show "Link coming soon"
    demoUrl: "",   // <-- Add live demo URL, or leave "" to hide
  },
  {
    id: "budget",
    number: "05",
    title: "Automated Monthly Budget Planning Agent",
    categories: ["web"],
    categoryLabels: ["Web", "Software"],
    thumbSrc: "assets/project-budget-agent.jpg",
    thumbIcon: "💰",
    thumbAlt: "Budget planning agent project screenshot",
    description:
      "A web-based budgeting assistant that accepts income, expenses, and a savings goal, analyses spending patterns, identifies potential overspending, and provides recommendations to help users plan their monthly budget effectively.",
    problem:
      "Many people find it difficult to track their spending patterns and identify where they are overspending relative to their income and savings goals.",
    keyPoints: [
      "Input collection for income, expenses, and savings goals",
      "Automated analysis of spending patterns",
      "Identification of overspending categories",
      "Actionable recommendations for monthly budget planning",
    ],
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    repoUrl: "",   // <-- Add GitHub repo URL, or leave "" to show "Link coming soon"
    demoUrl: "",   // <-- Add live demo URL, or leave "" to hide
  },
];

/* ============================================================
   UTILITY HELPERS
   ============================================================ */

/** Returns current year for dynamic copyright */
function currentYear() {
  return new Date().getFullYear();
}

/** Sanitises string for safe display */
function sanitise(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  injectProjects();
  initProjectFilters();
  initModals();
  initContactForm();
  initRevealAnimations();
  initBackToTop();
  initProfilePhotoFallback();
  setDynamicYear();
  initKeyboardSupport();
});

/* ============================================================
   NAVBAR — Scroll behaviour & active section highlight
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
    highlightActiveNav();
  }, { passive: true });
}

function highlightActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#'], .mobile-menu a[href^='#']");
  const scrollY = window.scrollY + 120;

  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add("open");
    mobileMenu.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "Close navigation menu");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open navigation menu");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.contains("open") ? closeMenu() : openMenu();
  });

  // Close when any link is clicked
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.getElementById("navbar")?.offsetHeight || 70;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 10;

      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* ============================================================
   PROJECT CARDS — Dynamic render
   ============================================================ */
function injectProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  PROJECTS_DATA.forEach(project => {
    const card = buildProjectCard(project);
    grid.appendChild(card);
  });
}

function buildProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.dataset.categories = project.categories.join(",");
  card.setAttribute("role", "listitem");

  // Thumbnail
  const thumbHtml = project.thumbSrc
    ? `<img
        src="${sanitise(project.thumbSrc)}"
        alt="${sanitise(project.thumbAlt)}"
        loading="lazy"
        onerror="this.parentElement.innerHTML='<div class=\\'project-thumb-placeholder\\'><span class=\\'project-thumb-icon\\'>${project.thumbIcon}</span><span class=\\'project-thumb-label\\'>Screenshot coming soon</span></div>'"
       />`
    : `<div class="project-thumb-placeholder">
         <span class="project-thumb-icon">${project.thumbIcon}</span>
         <span class="project-thumb-label">Screenshot coming soon</span>
       </div>`;

  // Category labels
  const catHtml = project.categoryLabels
    .map(c => `<span class="project-cat-tag">${sanitise(c)}</span>`)
    .join(" / ");

  // Technologies
  const techHtml = project.technologies
    .map(t => `<span class="project-tech-tag">${sanitise(t)}</span>`)
    .join("");

  // Action buttons
  let actionsHtml = "";

  if (project.repoUrl) {
    actionsHtml += `<a href="${sanitise(project.repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
      View Code
    </a>`;
  } else {
    actionsHtml += `<span class="link-coming-soon">Repo coming soon</span>`;
  }

  if (project.demoUrl) {
    actionsHtml += `<a href="${sanitise(project.demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-sm">
      Live Demo →
    </a>`;
  }

  actionsHtml += `<button
      class="btn btn-ghost btn-sm read-more-btn"
      data-project-id="${sanitise(project.id)}"
      aria-haspopup="dialog"
      aria-label="Read more about ${sanitise(project.title)}"
    >Details ↗</button>`;

  card.innerHTML = `
    <div class="project-number-badge">${sanitise(project.number)}</div>
    <div class="project-thumb">${thumbHtml}</div>
    <div class="project-cat">${catHtml}</div>
    <h3 class="project-title">${sanitise(project.title)}</h3>
    <p class="project-desc">${sanitise(project.description)}</p>
    <div class="project-tech">${techHtml}</div>
    <div class="project-actions">${actionsHtml}</div>
  `;

  return card;
}

/* ============================================================
   PROJECT FILTERS
   ============================================================ */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll(".project-card");

      cards.forEach(card => {
        if (filter === "all") {
          card.classList.remove("hidden");
        } else {
          const cats = card.dataset.categories?.split(",") || [];
          card.classList.toggle("hidden", !cats.includes(filter));
        }
      });
    });
  });
}

/* ============================================================
   PROJECT MODALS
   ============================================================ */
let currentOpenModal = null;

function initModals() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close-btn");
  if (!overlay) return;

  // Open modal when "Details" button is clicked
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".read-more-btn");
    if (!btn) return;

    const projectId = btn.dataset.projectId;
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    openModal(project);
  });

  // Close button
  closeBtn?.addEventListener("click", closeModal);

  // Click outside box to close
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) {
      closeModal();
    }
  });
}

function openModal(project) {
  const overlay   = document.getElementById("modal-overlay");
  const titleEl   = document.getElementById("modal-title");
  const bodyEl    = document.getElementById("modal-body");
  if (!overlay) return;

  // Build key points HTML
  const pointsHtml = project.keyPoints
    .map(p => `<li>${sanitise(p)}</li>`)
    .join("");

  // Build tech tags
  const techHtml = project.technologies
    .map(t => `<span class="project-tech-tag">${sanitise(t)}</span>`)
    .join("");

  // Buttons
  let btnHtml = "";
  if (project.repoUrl) {
    btnHtml += `<a href="${sanitise(project.repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
      View Repository
    </a>`;
  }
  if (project.demoUrl) {
    btnHtml += `<a href="${sanitise(project.demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
      Live Demo
    </a>`;
  }

  titleEl.textContent = project.title;
  bodyEl.innerHTML = `
    <div class="modal-section">
      <h4>Overview</h4>
      <p>${sanitise(project.description)}</p>
    </div>
    <div class="modal-section">
      <h4>Problem Statement</h4>
      <p>${sanitise(project.problem)}</p>
    </div>
    <div class="modal-section">
      <h4>Key Features & Objectives</h4>
      <ul class="modal-points">${pointsHtml}</ul>
    </div>
    <div class="modal-section">
      <h4>Technologies Used</h4>
      <div class="modal-tech">${techHtml}</div>
    </div>
    ${btnHtml ? `<div class="modal-section"><h4>Links</h4><div style="display:flex;gap:0.75rem;flex-wrap:wrap;">${btnHtml}</div></div>` : ""}
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close-btn")?.focus();
  currentOpenModal = overlay;
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  currentOpenModal = null;
}

/* ============================================================
   CONTACT FORM — Validation + mailto fallback
   ============================================================ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  // Set mailto link for email
  const emailLinks = document.querySelectorAll(".js-email");
  emailLinks.forEach(el => {
    if (el.tagName === "A") el.href = `mailto:${SITE_CONFIG.email}`;
    el.textContent = SITE_CONFIG.email;
  });

  // Set GitHub links
  const ghLinks = document.querySelectorAll(".js-github");
  ghLinks.forEach(el => {
    if (el.tagName === "A") {
      el.href = SITE_CONFIG.github;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
    if (!el.textContent || el.textContent === "") {
      el.textContent = SITE_CONFIG.github;
    }
  });

  // Set LinkedIn
  const liLinks = document.querySelectorAll(".js-linkedin");
  liLinks.forEach(el => {
    if (SITE_CONFIG.linkedin) {
      el.href = SITE_CONFIG.linkedin;
      el.style.display = "";
    } else {
      const wrap = el.closest(".contact-link-item");
      if (wrap) wrap.style.display = "none";
    }
  });

  // Resume download link
  const resumeLinks = document.querySelectorAll(".js-resume");
  resumeLinks.forEach(el => {
    el.href = SITE_CONFIG.resume;
    el.download = "";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    const fields = [
      { id: "contact-name",    label: "Name",    minLen: 2 },
      { id: "contact-email",   label: "Email",   type: "email" },
      { id: "contact-subject", label: "Subject", minLen: 3 },
      { id: "contact-message", label: "Message", minLen: 10 },
    ];

    fields.forEach(({ id, label, type, minLen }) => {
      const input   = document.getElementById(id);
      const errEl   = document.getElementById(`${id}-error`);
      if (!input) return;

      const val = input.value.trim();
      let error = "";

      if (!val) {
        error = `${label} is required.`;
      } else if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        error = "Please enter a valid email address.";
      } else if (minLen && val.length < minLen) {
        error = `${label} must be at least ${minLen} characters.`;
      }

      if (error) {
        input.classList.add("error");
        if (errEl) { errEl.textContent = error; errEl.classList.add("show"); }
        valid = false;
      } else {
        input.classList.remove("error");
        if (errEl) errEl.classList.remove("show");
      }
    });

    if (!valid) return;

    // Build mailto link
    const name    = document.getElementById("contact-name").value.trim();
    const email   = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    const body = encodeURIComponent(
      `Hi Aryan,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );
    const mailto = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailto;

    // Brief success indication
    const btn = form.querySelector(".form-submit");
    if (btn) {
      btn.textContent = "Opening email client…";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = "Send Message";
        btn.disabled = false;
      }, 4000);
    }
  });

  // Clear error state on input
  ["contact-name","contact-email","contact-subject","contact-message"].forEach(id => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener("input", () => {
      input.classList.remove("error");
      const err = document.getElementById(`${id}-error`);
      if (err) err.classList.remove("show");
    });
  });
}

/* ============================================================
   SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   ============================================================ */
function initRevealAnimations() {
  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach(el => {
    if (prefersReduced) {
      el.classList.add("visible"); // Show immediately
    } else {
      observer.observe(el);
    }
  });
}

/* ============================================================
   BACK TO TOP BUTTON
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ============================================================
   PROFILE PHOTO FALLBACK
   ============================================================ */
function initProfilePhotoFallback() {
  const img = document.getElementById("profile-photo");
  if (!img) return;

  img.addEventListener("error", () => {
    const parent = img.parentElement;
    img.remove();
    parent.innerHTML = `
      <div class="profile-placeholder-inner">
        <span class="profile-initials">AW</span>
      </div>`;
  });

  // Also check if src is empty / placeholder
  if (!img.src || img.src.endsWith("assets/aryan-profile.jpg")) {
    // Attempt to load — will fire error if file doesn't exist
  }
}

/* ============================================================
   DYNAMIC COPYRIGHT YEAR
   ============================================================ */
function setDynamicYear() {
  const yearEls = document.querySelectorAll(".js-year");
  yearEls.forEach(el => { el.textContent = currentYear(); });
}

/* ============================================================
   KEYBOARD / ACCESSIBILITY SUPPORT
   ============================================================ */
function initKeyboardSupport() {
  // Allow Enter/Space to trigger buttons styled as divs
  document.querySelectorAll("[role='button']").forEach(el => {
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        el.click();
      }
    });
  });
}
