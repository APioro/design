// PHOTO PROJECTS
const projects = [
  {
    type: "image",
    image: "/design/photos/astrolume/logo-balck-astro.jpg",
    size: "half",
  },
  {
    type: "image",
    image: "/design/photos/astrolume/notepad-astro.jpg",
    size: "half",
  },

    
    {
      type: "text",
      content: "LOGO DESIGN",
      size: "half",
    },

  {type: "text",
    content: "A star shinning over a cube (which brings to mind a building to some) forms an abstract letter A. The thin lines and geometric shapes evoke a sense of scientific precision, while the star adds a touch of wonder and magic. The logo is designed to be simple and versatile, working well across a range of applications.",
    size: "half",
  },


  {
    type: "image",
    image: "/design/photos/astrolume/chain-astro.jpg",
    size: "half",
  },
  {
    type: "image",
    image: "/design/photos/astrolume/d.jpg",
    size: "half",
  },
  
    {
      type: "text",
      content: "VISUAL IDENTITY",
      size: "half",
    },

  {type: "text",
    content: "The visual language balances restraint with emotion: bold, expressive graphics are paired with subtle scientific accents to ground the brand in credibility. This approach avoids associations with astrology, while still evoking the sense of wonder and awe that define the experience of observing the night sky. The result is a system that feels both poetic and rigorous—inviting curiosity without sacrificing scientific integrity. ",
    size: "half",
  },
  {
    type: "image",
    image: "/design/photos/astrolume/cxc.jpg",
    size: "half",
  },
  {
    type: "image",
    image: "/design/photos/astrolume/tshirt.jpg",
    size: "half",
  }
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