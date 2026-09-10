// PHOTO PROJECTS
const projects = [
  {
    type: "image",
    image: "/design/photos/astrolume/logo-balck-astro.jpg",
    size: "half",
  },
    {
        type: "video",
        src: "/design/photos/astrolume/astro.mp4",
        size: "half",
    },
    
    {
      type: "text",
      content: "LOGO DESIGN",
      size: "half",
    },

  {type: "text",
    content: "<p>The logo needed to represent both wonder and scientific precision. A star shinning over a cube forms an abstract letter A. The thin lines inspired by equatorial grids and lines found on the sky map are utilised as an asset across different touchpoints. They give it that sense of scientificness.</p>",
    size: "half",
  },

    // {
    //   type: "image",
    //   image: "/design/photos/astrolume/brand-system-astro.jpg",
    //   size: "large",
    // },

  {
    type: "image",
    image: "/design/photos/astrolume/banner.jpg",
    size: "large",
  },
  {
    type: "image",
    image: "/design/photos/typography.jpg",
    size: "half",
  },

    {
    type: "image",
    image: "/design/photos/astrolume/mag.jpg",
    size: "half",
  },

  {
    type: "image",
    image: "/design/photos/astrolume/ui.jpg",
    size: "half",
  },
  {
    type: "image",
    image: "/design/photos/astrolume/colors-astro.jpg",
    size: "half",
  }

    {
    type: "image",
    image: "/design/photos/astrolume/posters.jpg",
    size: "half",
  },
  {
    type: "image",
    image: "/design/photos/astrolume/tshirt.jpg",
    size: "half",
  }



    
  {
    type: "text",
    content: "VISUAL IDENTITY",
    size: "half",
  },

  {type: "text",
    content: "<p>The visual identity had to balance inspiring visuals while highlighting the brand's scientific nature. This is not an astrological concept, neither it is a strictly hard-science tech brand. The imagery had to inspire, while not driffting too much into either lifestyle or litterarly showing the night sky. The color palette is a mix of deep blues and purples, with a heavy use of black and off-white. The typography is clean and modern, with a focus on readability and slightly technical touch of all-caps for more information-based pieces (thinking about UI and infographics here).</p>",
    size: "half",
  },



    {
    type: "image",
    image: "/design/photos/astrolume/cxc.jpg",
    size: "half",
  },

  
    {
    type: "image",
    image: "/design/photos/astrolume/crad.jpg",
    size: "half",
  },

  
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
            video.type = "video/mp4";

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