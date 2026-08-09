document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const gnb = document.querySelector(".gnb");
  if (toggle && gnb) {
    toggle.addEventListener("click", () => {
      gnb.classList.toggle("open");
      toggle.classList.toggle("open");
    });
    gnb.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        gnb.classList.remove("open");
        toggle.classList.remove("open");
      })
    );
  }

  // Scroll spy: highlight the active gnb link as the user scrolls
  // through the category sections on the long-form homepage.
  const sections = document.querySelectorAll("[data-section]");
  const navLinks = document.querySelectorAll(".gnb a[data-nav-target]");
  if (sections.length && navLinks.length) {
    const setActive = (id) => {
      navLinks.forEach((a) => a.classList.toggle("active", a.dataset.navTarget === id));
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.section);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  }
});
