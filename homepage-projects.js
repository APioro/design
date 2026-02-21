const projects = [
  
    {
    title: "Astrolume",
    category: "Branding",
    image: "astrolume/cxc.jpg",
    size: "half",
    link: "astrolume/astrolume.html",
    theme: "light"
  },



      {
    title: "Bowl'd Salad Bar",
    category: "Branding",
    image: "bowld/asparagus.jpg",
    size: "half",
    link: "bowld/bowld.html",
    theme: "dark" // black text
  },


  /*
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
    image: "absolute collagen/ac-mockup-closeup.png",
    size: "half",
    link: "absolute collagen/absolute-collagen.html",
    theme: "dark" // white text
  },



  {
    title: "FUndacja Artsider ",
    category: "Branding",
    image: "artsider/artsider_cards.jpg",
    size: "half",
    link: "artsider/artsider.html",
    theme: "light"
  },
  

];

  
    // Add more projects as needed...


// Function to create and append tiles to the grid
function createTiles() {
  const gridContainer = document.getElementById("grid-container");

  projects.forEach((project, index) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("homepage-grid-item", project.size);

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    if(index !== 0) img.loading = "lazy";

    const link = document.createElement("a");
    link.href = project.link;
   
    link.appendChild(img);

    // Create overlay
    const overlay = document.createElement("div");
   overlay.className = `overlay ${project.theme || "light"}`;
; // or use "dark" for white text on dark image

    const title = document.createElement("div");
    title.className = "overlay-title top-left";
    title.textContent = project.title;

    const category = document.createElement("div");
    category.className = "overlay-category bottom-right";
    category.textContent = project.category;

    overlay.appendChild(title);
    overlay.appendChild(category);

    gridItem.appendChild(link);
    gridItem.appendChild(overlay);

    gridContainer.appendChild(gridItem);
  });
}

// Call the function to create tiles
createTiles();
