const headingHero = document.querySelector(".title");

const observer = new IntersectionObserver(function(entries) {

  if (entries[0].isIntersecting) {
    headingHero.classList.add("visible");
  }

});

observer.observe(headingHero);