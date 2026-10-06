const textarea = document.getElementById("message");
const characterCount = document.getElementById("textCount");

textarea.addEventListener('input', () => {
    // Get value 
    const textValue = textarea.value;
    console.log(textValue);
    // get length
    const textCount = textValue.length;
    console.log(textCount); 

    characterCount.textContent = `Characters: ${textCount} / 200`;
})