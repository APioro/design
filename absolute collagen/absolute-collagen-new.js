const projects = [
    {
        type: "media",
        image: "ac-mockup-closeup.png",
        size: "half",
    },
    {
        type: "media",
        image: "ac-nav.mp4",
        size: "half",
    },

    {
        type: "text",
        subtitle: "Identifying Key Issues",
        description: "I had full freedom to determine the focus of the project, so I started by evaluating the existing online store using heuristic analysis and quick user sessions. The main issues were navigation and product discovery, clarity of product and purchase information, and brand consistency. These became the priority areas in the redesign.",
    },
    {
        type: "text",
        subtitle: "Navigation",
        description: "The original mobile navigation was cluttered and inconsistent, combining articles, blog posts, and products under unclear labels. I reduced the number of categories to four to create a more focused structure with fewer distractions. This helped users quickly understand where to go and made browsing calmer and more intuitive.",
    },

    {
        type: "media",
        image: "product_page.jpg",
        size: "half",
    },
    {
        type: "media",
        image: "info_ac_square.mp4",
        size: "half",
    },

    {
        type: "text",
        subtitle: "Product and Pricing Presentation",
        description: "I added lifestyle previews to show the product in use and encourage clicks. A clickable rating next to the title quickly directs users to reviews. I clarified pricing by showing the cost per sachet, and total order cost, gift offers, and delivery details were made highly visible — reducing surprises and building trust.",
    },
    {
        type: "text",
        subtitle: "Information Hierarchy",
        description: "The challenge was that the Absolute Collagen site had a lot of content but was overwhelming and hard to navigate. I reorganized product information based on a card-sorting exercise with users, categorizing content where users expected it. I added scannable points and combined ingredient info with usage instructions, addressing key clarity needs. I also created product highlights and infographics to showcase benefits and effects of the supplement, establishing a clear hierarchy and making the page both informative and visually digestible.",
    },

    {
        type: "media",
        image: "ac_type.jpg",
        size: "half",
    },
    {
        type: "media",
        image: "assets_dark.jpg",
        size: "half",
    },

    {
        type: "text",
        subtitle: "Brand Consistency",
        description: "I noticed the brand had multiple visual directions on the site, so I simplified it by choosing a single primary yellow, unifying buttons, icons, and typography, and designing flexible assets for infographics and social media. The goal was a clean, modern look with a luxurious feel, making the site cohesive, engaging, and approachable.",
    },
    {
        type: "text",
        subtitle: "Final Outcome",
        description: "Refining an existing, content-rich brand — improving clarity, consistency, and engagement — can be harder than starting from scratch but is also highly rewarding. I approached it strategically. The project involved extensive unseen work, from adjusting UX standards and competitive analysis to technical considerations.",
    },
];

// Function to create and append tiles to the grid (unchanged, works)
function createTiles() {
    const gridContainer = document.getElementById("grid-container");

    projects.forEach(project => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        if (project.size) gridItem.classList.add(project.size);

        if (project.type === "media") {
            const ext = project.image.split('.').pop().toLowerCase();
            let media;

            if (ext === 'mp4') {
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
                media = document.createElement("img");
                media.src = project.image;
                media.loading = "lazy";
            }

            gridItem.appendChild(media);

        } else if (project.type === "text") {
            const textWrapper = document.createElement("div");
            textWrapper.classList.add("project-text-wrapper");

            if (project.subtitle) {
                const subtitle = document.createElement("h4");
                subtitle.classList.add("project-subtitle");
                subtitle.textContent = project.subtitle;
                textWrapper.appendChild(subtitle);
            }

            if (project.description) {
                const descDiv = document.createElement("p");
                descDiv.textContent = project.description;
                textWrapper.appendChild(descDiv);
            }

            gridItem.appendChild(textWrapper);
        }

        gridContainer.appendChild(gridItem);
    });
}

document.addEventListener("DOMContentLoaded", createTiles);
