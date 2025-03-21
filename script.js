// Define the timer variables
let timeLeft = 600; // 10 minutes in seconds
let timerInterval;

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function () {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Format time as MM:SS
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    document.getElementById("time").innerText = `${minutes}:${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      alert("Time's up! Exam submitted automatically.");
      submitExam();
    }
  }, 1000);
}

// Function to submit the exam
function submitExam() {
  clearInterval(timerInterval);

  // Get the selected answers
  let form = document.getElementById('examForm');
  let formData = new FormData(form);
  let answers = {
    q1: formData.get('q1'),
    q2: formData.get('q2'),
    q3: formData.get('q3')
  };

  // Check answers (you can compare with a predefined set of correct answers)
  let correctAnswers = {
    q1: 'B',
    q2: 'B',
    q3: 'C'
  };

  let score = 0;
  for (let question in answers) {
    if (answers[question] === correctAnswers[question]) {
      score++;
    }
  }

  // Display the result
  alert(`You scored ${score} out of 3.`);
}

// Start the timer when the page loads
startTimer();

// Submit button event
document.getElementById("submitBtn").addEventListener("click", submitExam);

