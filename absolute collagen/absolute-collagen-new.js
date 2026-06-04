const projects = [
    {
        type: "image",
        image: "/design/photos/absolute-collagen/ac-mockup-closeup.png",
        size: "half",
    },
    {
        type: "image",
        image: "/design/photos/absolute-collagen/ac-nav.mp4",
        size: "half",
    },

    {
        type: "text",
        subtitle: "Identifying core problems",
        description: "I was given full freedom to decide the project’s focus, so I began by evaluating the existing webshop using heuristic analysis and quick user feedback sessions. The most critical issues emerged around navigation and product discovery, clarity of product information and purchase model, and overall brand coherence. These became the main areas I prioritized for redesign.",
    },
    {
        type: "text",
        subtitle: "Navigation",
        description: "The original mobile navigation felt cluttered and inconsistent, mixing articles, blog posts, and products under unclear labels. I reduced the number of categories to four to create a more focused structure with fewer distractions. This helped users quickly understand where to go and made the browsing experience feel calmer and more intentional.",
    },

    {
        type: "image",
        image: "/design/photos/absolute-collagen/product_page.jpg",
        size: "half",
    },
    {
        type: "video",
        src: "/design/photos/absolute-collagen/info_ac_square.mp4",
        size: "half",
    },

    {
        type: "text",
        subtitle: "Product showcase & pricing",
        description: "I added lifestyle previews to show the product in action and encourage clicks. A clickable rating next to the title directs users to reviews faster. I clarified pricing by showing cost per sachet, and made the total order cost, any gift offers, and delivery details very prominent — reducing surprises and building trust.",
    },
    {
        type: "text",
        subtitle: "Information Hierarchy",
        description: "The challenge was that the site had a lot of content but it was overwhelming. I reorganized it based on user expectations, added bullet points for scanning, and built clearer visual hierarchy with infographics and grouped information.",
    },

    {
        type: "image",
        image: "/design/photos/absolute-collagen/ac_type.jpg",
        size: "half",
    },
    {
        type: "image",
        image: "/design/photos/absolute-collagen/assets_dark.jpg",
        size: "half",
    },

    {
        type: "text",
        subtitle: "Brand consistency",
        description: "I unified the visual language by standardising colour, typography and UI components to create a more coherent and premium feel.",
    },
    {
        type: "text",
        subtitle: "Final outcome",
        description: "Refining an existing content-rich brand requires balancing clarity, consistency and engagement while preserving existing assets.",
    },
];

// -------------------- CREATE TILES --------------------

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