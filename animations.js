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

homepageGridItems.forEach((item) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(item);
});



