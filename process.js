const steps = [
  { title: "Discovery", 
    text: "Stage 1 is Discovery, after I've received an enquiry from you through my booking form, I will contact you to book in a Discovery Call if the project deems fit. This is the first step on setting the stage for our creative journey! This is where we hop on a call and meet to explore, understand, and align visions for the project. My primary focus is understanding your objectives, target audience, and the purpose behind your design project. I'll ask thoughtful questions to uncover specific details about your vision, desired outcomes, and what your looking to get out of this project. Just a friendly chit chat at the end of the day! After this call, I will send over a project proposal outlining all the deliverables and scope of work agreed upon during the call. When the Proposal is agreed upon, I will send you a Deposit Invoice and Contract, once settled, we're ready to go!", 
    size: "half" },

  { image: "/studio/absolute collagen/ac-mockup-far.jpg", size: "half" },
  { image: "/studio/absolute collagen/ac-mockup-far.jpg", size: "half" },
  { title: "Absolute Collagen", text: "Branding & UX", size: "half" },
    { title: "Absolute Collagen", text: "Branding & UX", size: "half" },
     { image: "/studio/absolute collagen/ac-mockup-far.jpg", size: "half" },
  { image: "/studio/absolute collagen/ac-mockup-far.jpg", size: "half" },
  { title: "Absolute Collagen", text: "Case Study", size: "half" },
];

function createTiles() {
  const gridContainer = document.getElementById("grid-container-process");
  if (!gridContainer) return;

  const frag = document.createDocumentFragment();

  steps.forEach(step => {
    const item = document.createElement("div");
    item.className = `grid-item-process ${step.size || "full"}`;

    if (step.image) {
      const img = document.createElement("img");
      img.src = step.image;
      img.alt = step.title || step.text || "";
      img.loading = "lazy";
      item.appendChild(img);
    } else {
      if (step.title) {
        const h = document.createElement("h3");
        h.textContent = step.title;
        h.className = "process-title"; 
        item.appendChild(h);
      }
      if (step.text) {
        const p = document.createElement("p");
        p.textContent = step.text;
        p.className = "process-text";
        item.appendChild(p);
      }
    }

    frag.appendChild(item);
  });

  gridContainer.appendChild(frag);
}

createTiles();