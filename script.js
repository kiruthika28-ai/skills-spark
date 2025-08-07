function loadLesson(topic) {
  const lessons = {
    excel: `
      <h3>Excel Basics</h3>
      <p>Excel is a spreadsheet program used to record and analyze data...</p>
    `,
    javascript: `
      <h3>JavaScript Fundamentals</h3>
      <p>JavaScript allows you to make web pages interactive...</p>
    `,
    resume: `
      <h3>Resume Writing</h3>
      <p>Writing a resume that stands out involves clarity, structure, and relevance...</p>
    `
  };
  document.getElementById("lessonContent").innerHTML = lessons[topic] || "Lesson not found.";
}

function startQuiz() {
  document.getElementById("quizContent").innerHTML = `
    <p><strong>Question:</strong> What is JavaScript used for?</p>
    <ul>
      <li><button onclick="checkAnswer('wrong')">Styling a page</button></li>
      <li><button onclick="checkAnswer('correct')">Adding interactivity</button></li>
      <li><button onclick="checkAnswer('wrong')">Creating databases</button></li>
    </ul>
  `;
}

function checkAnswer(result) {
  if (result === 'correct') {
    alert("✅ Correct! You've earned a micro-certificate!");
    // Certificate logic here in future
  } else {
    alert("❌ Incorrect. Try reviewing the lesson again.");
  }
}
