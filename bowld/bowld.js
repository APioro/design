// PHOTOES FOR DARKER TALES PROJECT
const projects = [
   {
        image: "logo.jpg", // Original image path
        size: "half",
    },

    
    {
        image: "bowls-correct.jpg", // Original image path
        size: "half",
    },

        
     {
        image: "asparagus.jpg", // Original image path
        size: "half",
    }, 


      {
        image: "apron.jpg",
        size: "half", 
    },


    
   {
        image: "socials.jpg", // Original image path
        size: "half",  

    },

 
   {
        image: "stickers.mp4", // Original image path
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
        
       const ext = project.image.split('.').pop().toLowerCase();

        let media;

        if (ext === 'mp4') {
            // Create video element
            media = document.createElement("video");
            media.src = project.image;
            media.autoplay = true;
            media.loop = true;
            media.muted = true;
            media.playsInline = true;
            media.loading = "lazy";
            media.style.width = "100%";
            media.style.objectFit = "cover";
        } else {
            // Create image element
            media = document.createElement("img"); 
            media.src = project.image; // Original image
            media.loading = "lazy"; // Add lazy loading
        }

        // Append image or video to the grid item
        gridItem.appendChild(media);
        gridContainer.appendChild(gridItem);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createTiles();

});
