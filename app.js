const inputEl = document.getElementById("input");
const form1 = document.getElementById("form");
const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score")) || 0;

scoreEl.innerHTML = `Score: ${score}`;

let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let correctAns = num1 * num2;

questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`;

form1.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting
  const userAns = +inputEl.value; // Get the user's answer and convert it to a number

  if (userAns === correctAns) {
    score++;
  } else {
    score--;
  }

  updateLocalStorage();
  inputEl.value = ""; // Clear the input field
  
  // Generate new question
  num1 = Math.ceil(Math.random() * 10);
  num2 = Math.ceil(Math.random() * 10);
  correctAns = num1 * num2;
  questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`;

  scoreEl.innerHTML = `Score: ${score}`; // Update displayed score
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
