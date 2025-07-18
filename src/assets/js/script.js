/* Scroll‑spy */
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("header nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) =>
          link.classList.toggle(
            "text-sky-600 font-semibold",
            link.hash === "#" + entry.target.id,
          ),
        );
      }
    });
  },
  { threshold: 0.6 },
);

sections.forEach((s) => observer.observe(s));

/* Smooth scroll fallback pro staré prohlížeče */
$('header nav a[href^=\"#\"]').on("click", (e) => {
  const target = $(e.currentTarget.hash);
  if (!("scrollBehavior" in document.documentElement.style)) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: target.offset().top - 64 }, 500);
  }
});
