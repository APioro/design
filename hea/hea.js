// COMBINED PROJECTS + TEXT BOXES
const projects = [
    {
        type: "image",
        image: "/photos/hea/hea_big.jpg",
        size: "large",
    },
    {   type: "text",
        content: "<p>LOGO DESIGN</p>",
        size: "half",
    },
    {   type: "text",
        content:  `
        <p>The logo needed to feel stable and analytical. While many environmental labs rely on illustrative leaves or nature motifs, 
        I wanted to avoid the cliché. Instead, I drew inspiration from the visual patterns found in environmental analysis — lines, grids, and intersections
         reminiscent of spectroscopy and chromatography. To warm up the brand image, I incorporated a graphical bird in place of the letter "A".</p>`,
        size: "half",
    },
        {
        type: "image",
        image: "/photos/hea/hea_front.jpg",
        size: "half",
    },

    {
        type: "image",
        image: "/photos/hea/buliding.jpg",
        size: "half",
    },


    {
        type: "text",
        content: "VISUAL IDENTITY",
        size: "half",
    },
    {
        type: "text",
        content: `<p>The logo needed to feel stable and analytical. While many environmental labs rely on illustrative leaves or nature motifs, 
        I wanted to avoid the cliché. Instead, I drew inspiration from the visual patterns found in environmental analysis — lines, grids, and intersections
         reminiscent of spectroscopy and chromatography. To warm up the brand image, I incorporated a graphical bird in place of the letter "A".</p>`,
        size: "half",
    },
    
    {
        type: "image",
        image: "/photos/hea/box_hea.jpg",
        size: "half",
    },
    {
        type: "image",
        image: "/photos/hea/hea_social.jpg",
        size: "half",
    },

    {
        type: "image",
        image: "/photos/hea/hea_docs.jpg",
        size: "large",
    },

        {
        type: "text",
        content: "VISUAL IDENTITY",
        size: "half",
    },
    {
        type: "text",
        content: `<p>The logo needed to feel stable and analytical. While many environmental labs rely on illustrative leaves or nature motifs, 
        I wanted to avoid the cliché. Instead, I drew inspiration from the visual patterns found in environmental analysis — lines, grids, and intersections
         reminiscent of spectroscopy and chromatography. To warm up the brand image, I incorporated a graphical bird in place of the letter "A".</p>`,
        size: "half",
    },

    {
        type: "image",
        image: "/photos/hea/hea_datasheet.jpg",
        size: "half",
    },
    {
        type: "image",
        image: "/photos/hea/brand_hea.jpg",
        size: "half",
    },
    {
        type: "image",
        image: "/photos/hea/tote.jpg",
        size: "half",
    },

    {
        type: "image",
        image: "/photos/hea/hea_colors.png",
        size: "half",
    },

        {
        type: "text",
        content: "VISUAL IDENTITY",
        size: "half",
    },
    {
        type: "text",
        content: `<p>The logo needed to feel stable and analytical. While many environmental labs rely on illustrative leaves or nature motifs, 
        I wanted to avoid the cliché. Instead, I drew inspiration from the visual patterns found in environmental analysis — lines, grids, and intersections
         reminiscent of spectroscopy and chromatography. To warm up the brand image, I incorporated a graphical bird in place of the letter "A".</p>`,
        size: "half",
    },

    {
        type: "video",
        src: "/photos/hea/web_hea.mp4",
        size: "half",
    },

    // {
    //     type: "image",
    //     image: "/photos/hea/hea_papers_large.jpg",
    //     size: "large",
    // },
    

    // You can add more images or text blocks anywhere
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