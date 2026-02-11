// PHOTOES FOR DARKER TALES PROJECT
const projects = [
    {
        image: "logo-balck-astro.jpg", // Original image path
        size: "half",  

    },

    
    
    {
        image: "notepad-astro.jpg", // Original image path
        size: "half",
    },

  
        {
        image: "chain-astro.jpg", // Original image path
        size: "half",
    },
  
                {
        image: "d.jpg", // Original image path
        size: "half",
    },

    

    {
        image: "crad-astro.jpg", // Original image path
        size: "half",
    },

           {
        image: "color-palette-astro.jpg", // Original image path
        size: "half",
    },
    {
        image: "cxc.jpg",
        size: "half", 
    },

    {
        image: "tshirt.jpg", // Original image path
        size: "half",
    },
    


    // Add more projects as needed...
];

// Function to create and append tiles to the grid
function createTiles() {
    const gridContainer = document.getElementById("grid-container"); 

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item", project.size); // Add size class
        
        // Create image element
        const img = document.createElement("img"); 
        img.src = project.image; // Original image
        img.loading = "lazy"; // Add lazy loading
         

        // Append image, title, and tags to the grid item
     
        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    });
}

// Call the function to create tiles
createTiles();
