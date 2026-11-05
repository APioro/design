function setMarqueeContents() {
  // Get the elements from the HTML
  const marquee = document.querySelector(".marquee");
  const originalText = document.querySelector(
    ".marquee__content > .marquee__text"
  );
  const copiesContainer = document.querySelector(".marquee__copies");

  // Stop if any of the required elements are missing
  if (!marquee || !originalText || !copiesContainer) {
    return;
  }

  // Get the width of the browser window and the original text
  const windowWidth = window.innerWidth;
  const textWidth = originalText.getBoundingClientRect().width;

  // Avoid dividing by zero if the text hasn't loaded or rendered yet
  if (textWidth === 0) {
    return;
  }

  // Calculate how many copies are needed to fill the screen
  const numberOfCopies = Math.ceil(windowWidth / textWidth) + 1;

  // Set the CSS variable
  marquee.style.setProperty("--textWidth", `${textWidth}px`);

  // Remove any copies created previously
  copiesContainer.replaceChildren();

  // Create the required number of copies
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < numberOfCopies; i++) {
    const textCopy = originalText.cloneNode(true);
    fragment.appendChild(textCopy);
  }

  // Add all copies to the page
  copiesContainer.appendChild(fragment);
}


// Run the function once the HTML has loaded
document.addEventListener("DOMContentLoaded", function () {
  setMarqueeContents();
});


// Run the function again whenever the window is resized
window.addEventListener("resize", function () {
  setMarqueeContents();
});