const projects = [
  
       {
    title: "HIGHLAND ENVIRONMENTAL ANALYTICS",
    category: "BRAND IDENTITY",
    image: "/photos/hea/brand_hea.jpg",
    size: "half",
    // link: "hea/hea",
    theme: "light"
  },

  {
    title: "Astrolume",
    category: "BRAND IDENTITY",
    image: "/photos/astrolume/cxc.jpg",
    size: "half",
    link: "astrolume/astrolume",
    theme: "light"
  },


   /*
      {
    title: "Bowl'd Salad Bar",
    category: "Branding, Packaging",
    image: "/photos/bowld/asparagus.jpg",
    size: "half",
    link: "bowld/bowld",
    theme: "dark" // black text
  },


  
 {
    title: "Darker Tales ",
    category: "Editorial, Illustration",
    image: "darker-tales/table-of-content.png",
    size: "half",
    link: "darker-tales/darker-tales.html",
    theme: "light"
  },
  
  */
 
  {
    title: "Absolute Collagen",
    category: "UX/UI Design, E-commerce",
    image: "/photos/absolute-collagen/ac-mockup-closeup.png",
    size: "half",
    link: "absolute collagen/absolute-collagen",
    theme: "dark" // white text
  },



  {
    title: "Artsider Foundation ",
    category: "BRAND IDENTITY",
    image: "/photos/artsider/artsider_cards.jpg",
    size: "half",
    link: "artsider/artsider",
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

    // ---------- OVERLAY ----------
    const overlay = document.createElement("div");
    overlay.className = `overlay ${project.theme || "light"}`;

    const title = document.createElement("div");
    title.className = "overlay-title top-left";
    title.textContent = project.title;

    const category = document.createElement("div");
    category.className = "overlay-category bottom-right";
    category.textContent = project.category;

    overlay.appendChild(title);
    overlay.appendChild(category);

    // ---------- APPEND ----------
    gridItem.appendChild(link);
    gridItem.appendChild(overlay);

    gridContainer.appendChild(gridItem);
  });
}

// Call the function to create tiles
createTiles();
observeTiles();
