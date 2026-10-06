const textarea = document.getElementById("message");
const characterCount = document.getElementById("textCount");

//Add Statistics
const wordCount = document.getElementById("words");

textarea.addEventListener('input', () => {
    // Get value 
    const textValue = textarea.value;
    // trim tha value
    console.log(textValue);

    // get length
    const textCount = textValue.length;
    console.log(textCount); 

    characterCount.textContent = `Characters: ${textCount} / 200`;

    wordCount.textContent = textCount;
})