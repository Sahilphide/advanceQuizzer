const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "c",
  },
  {
    questionText: "Arrays in JavaScript can be used to store __.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "d",
  },
  {
    questionText:
      "String values must be enclosed within _ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "c",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "d",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "a",
  },
];



//displaying the quiz on div
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const ansStatus = document.getElementById('ansStatus')
const submitBtn = document.getElementById('submit')

const startbtn=document.getElementById('avishkar')
const startdiv=document.getElementById('avishkar1')

const highScoresList = document.getElementById("highScoresList");


let currentQuiz = 0
let score = 0


const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;



// loadQuiz()

function loadQuiz() {
  console.log("working")

    deselectAnswers()
    
   

    const currentQuizData = questions[currentQuiz]
    

    questionEl.innerText = currentQuizData.questionText
    a_text.innerText = currentQuizData.options[0]
    //console.log( currentQuizData.questionText)
    b_text.innerText = currentQuizData.options[1]
    c_text.innerText = currentQuizData.options[2]
    d_text.innerText = currentQuizData.options[3]

     
};


function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
    
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) { 
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === questions[currentQuiz].answer) {
           score++
           ansStatus.innerText = "correct";

       }else{
           ansStatus.innerText  = "incorrect";
       }

       currentQuiz++

       if(currentQuiz < questions.length) {
           loadQuiz()

       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${questions.length} questions correctly</h2>
           <form>
              <div for="lfname">First name:</div> 
              <input id="lfname" name="fname" type="text" />
              <input type="submit" onclick="addPlayer()" value="submit">
            </form>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

// timer function




function setTime()
{
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds%60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val)
{
  var valString = val + "";
  if(valString.length < 2)
  {
    return "0" + valString;
  }
  else
  {
    return valString;
  }
}


// // function to store input (thusrday work)
 
addPlayer = ()=>{

  var value1 = document.getElementById("lfname").value;  //get the value of an element by it's id
  if(value1===""){
    alert("please add your name")
  }
  else{
    const scored = {
      score: score,
      name: value1,
  };
  highScores.push(scored);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  }
   
};

// starting 
start =()=>{
  if (quiz.style.display !== "none") {
    quiz.style.display = "none";
  } 


  startbtn.onclick=function() {
    loadQuiz() 
    setInterval(setTime, 1000);
    quiz.style.display = "block";
    startdiv.style.display = "none";
    
  }

  
};

start()


/////////////
// high score
highScoreGenerator = ()=>{

  if(highScores.length !==0){
    const scorediv=document.getElementById('highScore')
    quiz.style.display = "none";
    startdiv.style.display = "none";
    scorediv.style.display = "block"

    highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

  }
  else{
    alert("no entry found")
  }
}

// clear score
clearScore = ()=>{
  localStorage.clear();
}


 