const textarea = document.getElementById("message");
const characterCount = document.getElementById("textCount");

//Add Statistics
const wordCount = document.getElementById("words");
const totalWords = document.getElementById("totalWords");
const noSpace = document.getElementById("NoSpace");

textarea.addEventListener('input', () => {
    // Get value 
    const textValue = textarea.value;

    // get length
    const textCount = textValue.length;

    characterCount.textContent = `Characters: ${textCount} / 200`;

    wordCount.textContent = textCount;

    // Add characters Total Words
    const cleanText = textValue.trim();
    const words = cleanText.split(" ");
    const wordCharacters = words.length;

    totalWords.textContent = wordCharacters;
    
    const nospaceText = textValue.replace(/\s/g, "");
    const nospaceCount = nospaceText.length;

    noSpace.textContent = nospaceCount;    
    console.log(nospaceCount);
})