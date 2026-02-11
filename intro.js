const text = `Designing brands
for the unapologetically 
`;
const highlightWords = [
    { text: "honest", style: "highlight-sensible" }, 
    { text: "weird", style: "highlight-creative" }, 
    { text: "whimsical", style: "highlight-fun" },
    { text: "devoted", style: "highlight-boonka" },
    { text: "original", style: "highlight-lizzanka" }
]; 
let currentHighlightWordIndex = 0;
let index = 0;
let currentSpeed = 60; // Lower number = faster
const typingText = document.getElementById("typing-text");

function typeText() {
    // Type the text one character at a time as long as the current index has not yet reached the end of the text
    if (index < text.length) {
        
        // Gets the character from the text on the current index (first index is always 0)
        typingText.innerHTML += text.charAt(index);
        
        // Increment the current index by 1 so that we know that the current character has been typed and we can now move on to the next one
        index++;

        // For each character we type, the typing speed will increase by 2 until it reaches its max speed of 40
        if (currentSpeed > 40) {
            currentSpeed -= 2;
        }

        // We run this same function again but with a timeout, simulating the "typing" speed. Next run will be for the next index.
        setTimeout(typeText, currentSpeed);
    }
    // If we have now reached the end of the text...
    else {
        // ...we reset the index to use it for the highlight words...
        index = 0;

        // ...and start typing the first highlight word, with a bit higher timeout to make it slower
        setTimeout(typeHighlightWord, currentSpeed * 2);
    }
}

function typeHighlightWord() {
    // Checking which the current highlight word should be and fetching it into our currentHighlightWord variable
    const currentHighlightWord = highlightWords[currentHighlightWordIndex];

    // Try to look for the <span> container for the current highlight word
    let highlightWordSpan = document.getElementById(currentHighlightWord.text);
    
    // If the <span> container does _not_ exist...
    if (!highlightWordSpan) {
        
        // Create the element (the <span> tag)...
        highlightWordSpan = document.createElement("span");
        
        // ...set the class from the current highlight word's style property...
        highlightWordSpan.setAttribute("class", currentHighlightWord.style);
        
        // ...set the id from the current highlight word's text property...
        highlightWordSpan.setAttribute("id", currentHighlightWord.text);
        
        // ...and then put it into the typingText div
        typingText.appendChild(highlightWordSpan);
    }

    // Type the current highlight word one character at a time as long as the current index has not yet reached the end of the highlight word
    if (index < currentHighlightWord.text.length) {
        
        // Gets the character from the current highlight word on the current index (first index is always 0)
        highlightWordSpan.innerText += currentHighlightWord.text.charAt(index);
        
        // Increment the current index by 1 so that we know that the current character has been typed and we can now move on to the next one
        index++;

        // We run this same function again but with a timeout, simulating the "typing" speed. Next run will be for the next index.
        setTimeout(typeHighlightWord, currentSpeed * 2);
    } else {
        
        // End if this is the last word in the array...
        if (currentHighlightWordIndex == highlightWords.length - 1) {
            return;
        }

        // ...otherwise start deleting the newly typed out word
        setTimeout(deleteHighlightWord, currentSpeed * 10);
    }
}

function deleteHighlightWord() {
    // Checking which the current highlight word should be and fetching it into our currentHighlightWord variable
    const currentHighlightWord = highlightWords[currentHighlightWordIndex];

    // Get the <span> container for the current highlight word. We know that it will exist here since this function only runs for the first time after a highlight word has been typed out
    let highlightWordSpan = document.getElementById(currentHighlightWord.text);

    if (index > 0) {
        // We slice one character from the last index of the span container's text (the highlight word)
        highlightWordSpan.innerText = highlightWordSpan.innerText.slice(highlightWordSpan.innerText.lastIndexOf, -1);

        // Decrement by 1 to move on to the next character to remove
        index--;

        // Run this same function again but for the next letter to be deleted
        setTimeout(deleteHighlightWord, currentSpeed);
    }
    // We get here if the index is 0, indicating that the current highlight word has now been removed 
    else {
        // Increment currentHighlightWordIndex to indicate that we can now move on to the next word in the array
        currentHighlightWordIndex++;

        // Reset the index so that we can start on the first letter for the next word
        index = 0;

        // Start typing the next highlight word
        setTimeout(typeHighlightWord, currentSpeed * 2);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeText(); // Run typeText when page has loaded
});

