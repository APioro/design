const headingHero = document.querySelector(".title");


// Hero reveal
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      headingHero.classList.add("visible");
      heroObserver.unobserve(entry.target);
    }
  });
});

heroObserver.observe(headingHero);

