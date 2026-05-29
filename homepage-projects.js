const projects = [
  
       {
    title: "Highland Environmental Analytics",
    category: "BRAND IDENTITY",
    image: "/design/photos/hea/brand_hea.jpg",
    size: "half",
    link: "/design/hea/hea.html",
    theme: "light"
  },

  {
    title: "Astrolume",
    category: "BRAND IDENTITY",
    image: "/design/photos/astrolume/cxc.jpg",
    size: "half",
    link: "/design/astrolume/astrolume.html",
    theme: "light"
  },


   /*
      {
    title: "Bowl'd Salad Bar",
    category: "Branding, Packaging",
    image: "/design/photos/bowld/asparagus.jpg",
    size: "half",
    link: "/design/bowld/bowld.html",
    theme: "dark" // black text
  },


  
 {
    title: "Darker Tales ",
    category: "Editorial, Illustration",
    image: "/design/darker-tales/table-of-content.png",
    size: "half",
    link: "/design/darker-tales/darker-tales.html",
    theme: "light"
  },
  
  */
 
  {
    title: "Absolute Collagen",
    category: "UX/UI Design, E-commerce",
    image: "/design/photos/absolute-collagen/ac-mockup-closeup.png",
    size: "half",
    link: "/design/absolute collagen/absolute-collagen.html",
    theme: "dark" // white text
  },



  {
    title: "Artsider Foundation ",
    category: "BRAND IDENTITY",
    image: "/design/photos/artsider/artsider_cards.jpg",
    size: "half",
    link: "/design/artsider/artsider.html",
    theme: "light"
  },
  


];

  
    // Add more projects as needed...
function observeTiles() {
    const items = document.querySelectorAll(".grid-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // animate once
            }
        });
    }, {
        threshold: 0.15
    });

    items.forEach(item => observer.observe(item));
}

function createTiles() {
  const gridContainer = document.getElementById("grid-container");

  projects.forEach((project, index) => {

    const gridItem = document.createElement("div");
    gridItem.classList.add("homepage-grid-item", project.size);

    // ---------- MEDIA ----------
    let media;

    if (project.video) {
      media = document.createElement("video");
      media.src = project.video;
      media.autoplay = true;
      media.muted = true;
      media.loop = true;
      media.playsInline = true;
    } else {
      media = document.createElement("img");
      media.src = project.image;
      media.alt = project.title;
      if (index !== 0) media.loading = "lazy";
    }

    const link = document.createElement("a");
    link.href = project.link;
    link.appendChild(media);

    // ---------- LABEL (NEW STRUCTURE) ----------
    const label = document.createElement("div");
    label.className = "project-label";

    const title = document.createElement("div");
    title.className = "project-title";
    title.textContent = project.title;

    const meta = document.createElement("div");
    meta.className = "project-meta";

    const arrow = document.createElement("span");
    arrow.className = "project-arrow";
    arrow.textContent = "🡥"; // or replace with SVG later

    const category = document.createElement("span");
    category.className = "project-category";
    category.textContent = project.category;

    meta.appendChild(arrow);
    meta.appendChild(category);

    label.appendChild(title);
    label.appendChild(meta);

    // ---------- APPEND ----------
    gridItem.appendChild(link);
    gridItem.appendChild(label);

    gridContainer.appendChild(gridItem);
  });
}

// Call the function to create tiles
createTiles();
observeTiles();
