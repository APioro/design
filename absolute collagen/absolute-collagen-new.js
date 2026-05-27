const projects = [
    {
        type: "media",
        image: "/design/photos/absolute-collagen/ac-mockup-closeup.png",
        size: "half",
    },
    {
        type: "media",
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
        type: "media",
        image: "/design/photos/absolute-collagen/product_page.jpg",
        size: "half",
    },
    {
        type: "media",
        image: "/design/photos/absolute-collagen/info_ac_square.mp4",
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
        type: "media",
        image: "/design/photos/absolute-collagen/ac_type.jpg",
        size: "half",
    },
    {
        type: "media",
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

function createTiles() {
    const gridContainer = document.getElementById("grid-container");

    projects.forEach(project => {

        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        if (project.size) gridItem.classList.add(project.size);

        // ---------------- MEDIA ----------------
        if (project.type === "media") {

            const isVideo = project.image.endsWith(".mp4");
            let media;

            if (isVideo) {
                media = document.createElement("video");
                media.src = project.image;
                media.autoplay = true;
                media.loop = true;
                media.muted = true;
                media.playsInline = true;
            } else {
                media = document.createElement("img");
                media.src = project.image;
                media.loading = "lazy";
                media.alt = "";
            }

            media.style.width = "100%";
            media.style.height = "100%";
            media.style.objectFit = "cover";

            gridItem.appendChild(media);
        }

        // ---------------- TEXT ----------------
        else if (project.type === "text") {

            const wrapper = document.createElement("div");
            wrapper.classList.add("project-text-wrapper");

            if (project.subtitle) {
                const h = document.createElement("h4");
                h.classList.add("project-subtitle");
                h.textContent = project.subtitle;
                wrapper.appendChild(h);
            }

            if (project.description) {
                const p = document.createElement("p");
                p.textContent = project.description;
                wrapper.appendChild(p);
            }

            gridItem.appendChild(wrapper);
        }

        gridContainer.appendChild(gridItem);
    });
}

// -------------------- OBSERVER --------------------

function observeTiles() {
    const items = document.querySelectorAll(".grid-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    items.forEach(item => observer.observe(item));
}

// -------------------- INIT (IMPORTANT FIX) --------------------

document.addEventListener("DOMContentLoaded", () => {
    createTiles();

    requestAnimationFrame(() => {
        observeTiles();
    });
});