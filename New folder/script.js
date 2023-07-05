document.addEventListener("DOMContentLoaded", function() {
    // Define quiz data
    const quizData = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer: "Jupiter"
      },
      // Add more quiz questions and answers here
    ];
  
    // Get quiz container element
    const quizContainer = document.getElementById("quiz-container");
  
    // Create quiz questions and options
    function createQuiz() {
      quizData.forEach((quiz, index) => {
        const questionElement = document.createElement("h3");
        questionElement.textContent = `Question ${index + 1}: ${quiz.question}`;
  
        const optionsElement = document.createElement("div");
        quiz.options.forEach(option => {
          const optionElement = document.createElement("input");
          optionElement.type = "radio";
          optionElement.name = `question-${index + 1}`;
          optionElement.value = option;
  
          const labelElement = document.createElement("label");
          labelElement.textContent = option;
  
          optionsElement.appendChild(optionElement);
          optionsElement.appendChild(labelElement);
        });
  
        quizContainer.appendChild(questionElement);
        quizContainer.appendChild(optionsElement);
      });
    }
  
    // Check answers and calculate score
    function calculateScore() {
      let score = 0;
  
      quizData.forEach((quiz, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index + 1}"]:checked`);
  
        if (selectedOption && selectedOption.value === quiz.answer) {
          score++;
        }
      });
  
      const outputContainer = document.getElementById("output-container");
      outputContainer.textContent = `Your score: ${score}/${quizData.length}`;
    }
  
    // Call the createQuiz function to generate quiz
    createQuiz();
  
    // Add event listener to the submit button
    const submitButton = document.getElementById("submit-btn");
    submitButton.addEventListener("click", calculateScore);
  });
  