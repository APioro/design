// PHOTOES FOR DARKER TALES PROJECT
const projects = [
 

    
         {
        image: "/design/photos/artsider/artsider_phone.jpg", // Original image path
        size: "half",
    },

      
  {
        image: "/design/photos/artsider/artsider_cards.jpg", // Original image path
        size: "half",
    },
  
  

    {
        image: "/design/photos/artsider/artsider_website.jpg",
        size: "large", 
    },


     {
        image: "/design/photos/artsider/color.jpg", // Original image path
        size: "half",
    },



   {
        image: "/design/photos/artsider/artsider.gif", // Original image path
        size: "half",  

    },

    {
        image: "/design/photos/artsider/logo_project.jpg",
        size: "large", 
    },


    {
        image: "/design/photos/artsider/artsider_socialmedia.jpg",
        size: "large", 
    },

        {
        image: "/design/photos/artsider/logo_rational.jpg",
        size: "large", 
    },
    
  
    // Add more projects as needed...
];
// Function to create and append tiles
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

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item", project.size);

        if (project.type === "image") {
            const img = document.createElement("img");
            img.src = project.image;
            img.loading = "lazy";
            gridItem.appendChild(img);

        } else if (project.type === "video") {
            const video = document.createElement("video");

            video.src = project.src;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;

            gridItem.appendChild(video);

        } else if (project.type === "text") {
            gridItem.classList.add("text-box");
            gridItem.innerHTML = project.content;
        }

        gridContainer.appendChild(gridItem);
    });
}

// Call the function
createTiles();
observeTiles();