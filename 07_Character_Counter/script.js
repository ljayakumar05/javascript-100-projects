// Get Input from DOM
const textarea = document.getElementById("message");
const characterCount = document.getElementById("textCount");

//Add Statistics DOM
const wordCount = document.getElementById("words");
const totalWords = document.getElementById("totalWords");
const noSpace = document.getElementById("NoSpace");
const lineCount = document.getElementById("lineCount");

textarea.addEventListener('input', () => {
    // Get value 
    const textValue = textarea.value;

    // get length
    const textCount = textValue.length;

    characterCount.textContent = `Characters: ${textCount} / 200`;

    wordCount.textContent = textCount;

    // Add characters Total Words
    const cleanText = textValue.trim();
    const words = cleanText.split(/\s+/);
    const wordCharacters = words.length;

    totalWords.textContent = wordCharacters;
    
    // Add NoSpace btn
    const nospaceText = textValue.replace(/\s/g, "");
    const nospaceCount = nospaceText.length;

    noSpace.textContent = nospaceCount;    

    //Add Line count
    const lineCountNum = textValue.split("\n").length;

    lineCount.textContent = lineCountNum;
    console.log(lineCountNum);  
})