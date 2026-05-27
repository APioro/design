// PHOTO PROJECTS
const projects = [
  {
    image: "/design/photos/astrolume/logo-balck-astro.jpg",
    size: "half",
  },
  {
    image: "/design/photos/astrolume/notepad-astro.jpg",
    size: "half",
  },
  {
    image: "/design/photos/astrolume/chain-astro.jpg",
    size: "half",
  },
  {
    image: "/design/photos/astrolume/d.jpg",
    size: "half",
  },
  {
    image: "/design/photos/astrolume/crad-astro.jpg",
    size: "half",
  },
  {
    image: "/design/photos/astrolume/color-palette-astro.jpg",
    size: "half",
  },
  {
    image: "/design/photos/astrolume/cxc.jpg",
    size: "half",
  },
  {
    image: "/design/photos/astrolume/tshirt.jpg",
    size: "half",
  }
];

function createTiles() {
  const gridContainer = document.getElementById("grid-container");

  projects.forEach((project, index) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item", project.size);

    const img = document.createElement("img");
    img.src = project.image;
    img.loading = index !== 0 ? "lazy" : "eager";

    gridItem.appendChild(img);
    gridContainer.appendChild(gridItem);
  });
}

// Intersection Observer (fade-in on scroll)
function observeTiles() {
  const items = document.querySelectorAll(".grid-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  items.forEach((item) => observer.observe(item));
}

// INIT
createTiles();
observeTiles();