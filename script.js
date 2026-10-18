// SINTHIA AFRIN — portfolio interactions
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }));
}

// Scroll reveal for sections and cards.
const revealItems = document.querySelectorAll(".reveal, .skill-card");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => revealObserver.observe(item));
} else revealItems.forEach(item => item.classList.add("is-visible"));

// Highlight active navigation item while scrolling.
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navItems.forEach(link =>
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => sectionObserver.observe(section));
}

// Reading progress bar.
const progressBar = document.querySelector(".page-progress span");
function updateProgress() {
  if (!progressBar) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// Demo project category filter.
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach(button => button.addEventListener("click", () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => item.classList.toggle("active", item === button));
  projectCards.forEach(card => {
    const categories = (card.dataset.category || "").split(" ");
    card.classList.toggle("is-hidden", !(filter === "all" || categories.includes(filter)));
  });
}));

// Add your actual social URLs here. The same links are updated in hero and contact.
const socialProfiles = {
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  instagram: "https://www.instagram.com/your-username/",
  facebook: "https://www.facebook.com/your-profile/"
};
document.querySelectorAll("[data-social]").forEach(link => {
  const platform = link.dataset.social;
  if (socialProfiles[platform]) {
    link.href = socialProfiles[platform];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});

// Contact form makes an email draft. It does not send/store messages by itself.
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
const toast = document.querySelector(".toast");
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 4200);
}
if (contactForm) contactForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  // Change this to your real email before publishing.
  const recipient = "hello@sinthiaafrin.com";
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  showToast("Opening an email draft. Check your email address in the code before publishing.");
  if (formNote) formNote.textContent = "Your email app should open with a draft. If it doesn't, contact me directly.";
  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Current year.
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Subtle 3D tilt on pointer devices only; no effect on touch devices.
if (window.matchMedia("(pointer:fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-2px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

// Ambient cursor light on desktop.
const glow = document.querySelector(".cursor-glow");
if (glow && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", event => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}
