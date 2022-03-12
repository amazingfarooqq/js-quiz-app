const QuizData = [
    {
        "question": "Q#1: Which is the purpose of JavaScript?",
        "a": "To style HTML Pages",
        "b": "To add interactivity to HTML pages",
        "c": "To perform server side scripting operations",
        "d": "for adding tags",
        "ans": "ans2"
    },
    {
        "question": "Q#2: To insert a JavaScript into an HTML page, which tag is used?",
        "a": "script='java'",
        "b": "javascript",
        "c": "script",
        "d": "link",
        "ans": "ans3"
    },
    {
        "question": "Q#3: Which of the following is correct to write “Hello World” on the web page?",
        "a": "print('Hello World')",
        "b": "document.write('Hello World')",
        "c": "response.write('Hello World')",
        "d": "generate.write('Hello World')",
        "ans": "ans2"

    }
]



const startTest = document.querySelector('#startTest')


startTest.addEventListener('click',  () => {
    document.querySelector('.startPage').style.display = 'none'
})


const timer = document.getElementById("timer");
let timerInterval;

startTimer = () => {
  // Firs twe start by clearing the existing timer, in case of a restart
  clearInterval(timerInterval);
  // Then we set the variables
  let second = 0,
    minute = 1;
  
    // Next we set a interval every 1000 ms
    timerInterval = setInterval(function () {
      timer.classList.toggle("odd");

      // We set the timer text to include a two digit representation
      timer.innerHTML =
        (minute < 10 ? "0" + minute : minute) +
        ":" +
        (second < 10 ? "0" + second : second);

      // We check if the second equals 0
      if (second == 0) {
        // If so, we remove a minute and reset our seconds to 60
        if (minute === 0) {
          // Full done
          clearInterval(timerInterval);
          alert("Time is up!");
        }
        minute--;
        second = 60;
      }
      second--;
    }, 1000);
};





const quiz = document.querySelector('.quiz')

const question = document.querySelector('.question')

const option1 = document.querySelector('.option1')
const option2 = document.querySelector('.option2')
const option3 = document.querySelector('.option3')
const option4 = document.querySelector('.option4')

const answers = document.querySelectorAll('.answer')
const submit = document.querySelector('#submit')


let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    question.innerHTML = QuizData[questionCount].question
    option1.innerHTML = QuizData[questionCount].a
    option2.innerHTML = QuizData[questionCount].b
    option3.innerHTML = QuizData[questionCount].c
    option4.innerHTML = QuizData[questionCount].d
}

loadQuestion()

submit.addEventListener('click', () => {

    const CheckAnswer = () => {
        let answer
        answers.forEach(cur => {
            if (cur.checked) {
                answer = cur.id
            }
        })
        return answer
    }
    if (CheckAnswer() === QuizData[questionCount].ans) {
        score++
    }


    questionCount++

    answers.forEach(item => item.checked = false)


    if (questionCount < QuizData.length) {
        loadQuestion()
    } else {

        quiz.innerHTML = `
        <h1> scored ${score} / ${QuizData.length} </h1>
        <button class="btn" onclick="location.reload()"> Restart Quiz </button>
        `
    }

})




