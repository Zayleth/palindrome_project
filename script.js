// DOM elements
const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const textResult = document.getElementById("result");

// function to check if the INPUT is a PALINDROME
function isPalindrome (inputText) {
    const cleaned_input = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversed_input = cleaned_input.split("").reverse().join("");
    return cleaned_input === reversed_input;
    // INPUT   - race car
    // return  - racecar
}

checkBtn.addEventListener("click", () => {
    // only to display on screen
    const original_input = userInput.value;
    
    const inputText = userInput.value.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const checkPalindrome = isPalindrome(inputText);
    
    if (inputText === "") {
        alert ("Please input a value");
    
    } else {
      textResult.textContent = checkPalindrome ? `${original_input} is a palindrome.` : `${original_input} is not a palindrome.`;
    }
    
});


/*

NOTES
- .replace(/[^a-zA-Z0-9]/g, ''); -> we can use a regular expression to remove any character that is not a letter or number before performing the comparison.
- checkBtn.addEventListener("click", (function to do) -> is a method in JavaScript that allows you to define a function that will be executed when a specific event occurs on that element.
- .value -> gets the current value of the HTML element named userInput. This is usually an element of type input.
// .trim(): It is a string method that removes whitespace from the START and END of the returned value.

*/
