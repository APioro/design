const headingHero = document.querySelector(".title");
const homepageGridItems = document.querySelectorAll(".homepage-grid-item");

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


// Grid items reveal
const gridObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      gridObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

homepageGridItems.forEach((item) => {
  gridObserver.observe(item);
});