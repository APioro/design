// PHOTOES FOR DARKER TALES PROJECT
const projects = [
 

    
         {
        image: "artsider_phone.jpg", // Original image path
        size: "half",
    },

      
  {
        image: "artsider_cards.jpg", // Original image path
        size: "half",
    },
  
  

    {
        image: "artsider_website.jpg",
        size: "large", 
    },


     {
        image: "color.jpg", // Original image path
        size: "half",
    },



   {
        image: "artsider.gif", // Original image path
        size: "half",  

    },

    {
        image: "logo_project.jpg",
        size: "large", 
    },


    {
        image: "artsider_socialmedia.jpg",
        size: "large", 
    },

        {
        image: "logo_rational.jpg",
        size: "large", 
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
         
         // Optional: add .gif-specific class if needed
        if (project.image.endsWith(".gif")) {
            img.classList.add("is-gif");
        }

        // Append image, title, and tags to the grid item
     
        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    });
}

// Call the function to create tiles
createTiles();
