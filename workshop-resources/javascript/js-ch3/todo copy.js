function submitQuiz() {
    // Get the user's answers
    let answer1 = parseInt(document.getElementById("q1").value);
    let answer2 = document.getElementById("q2").value.toLowerCase();
  
    // Initialize score and feedback
    let score = 0;
    let feedback = "";
  
    // Check answers
    if (answer1 === 4) {
      score++;
      feedback += "Question 1 is correct! ";
    } else {
      feedback += "Question 1 is incorrect. ";
    }
  
    if (answer2 === "paris") {
      score++;
      feedback += "Question 2 is correct!";
    } else {
      feedback += "Question 2 is incorrect.";
    }
  
    // Display results
    document.getElementById("result").textContent = 
      `Score: ${score}/2. ${feedback}`;
  }