const questions = [
    {
  question: "A flashing red traffic light signifies that a driver should do what?",
  answers:[
    { text: "stop", correct: true},
    { text: "speed up", correct: false},
    { text: "proceed with caution", correct: false},
    { text: "honk the horn", correct: false}
  ]

}, {
  question: "A knish is traditionally stuffed with what filling?",
  answers:[
    { text: "potato", correct: true},
    { text: "creamed corn", correct: false},
    { text: "lemon custard", correct: false},
    { text: "raspberry jelly", correct: false}
  ]

}, {
  question: "A pita is a type of what?",
  answers:[
    { text: "fresh fruit", correct: false},
    { text: "flat bread", correct: true},
    { text: "French tart", correct: false},
    { text: "friend bean dip", correct: false}
  ]
 
}, {
  question: "A portrait that comically exaggerates a person's physical traits is called a what?",
  answers:[
    { text: "landscape", correct: false},
    { text: "caricature", correct: true},
    { text: "still life", correct: false},
    { text: "Impressionism", correct: false}
  ]
 
}, {
  question: "A second-year college student is usually called a what?",
  answers:[
    { text: "sophomore", correct: true},
    { text: "senior", correct: false},
    { text: "freshman ", correct: false},
    { text: "junior ", correct: false}
  ]
  
}, {
  question: "A student who earns a J.D. can begin his or her career as a what?",
  answers:[
    { text: "lawyer", correct: true},
    { text: "bricklayer", correct: false},
    { text: "doctor", correct: false},
    { text: "accountant", correct: false}
  ]
}, {
  question: "A triptych is a work of art that is painted on how many panels?",
  answers:[
    { text: "two", correct: false},
    { text: "three", correct: true},
    { text: "five", correct: false},
    { text: "eight", correct: false}
  ]

}, {
  question: "According to a famous line from the existentialist play 'No Exit' what is hell?",
  answers:[
    { text: "oneself", correct: false},
    { text: "other people", correct: true},
    { text: "little made large", correct: false},
    { text: "hued in green and blue", correct: false}
  ]
}, {
  question: "According to a popular slogan, what state should people not 'mess with'?",
  answers:[
    { text: "New York", correct: false},
    { text: "Texas", correct: true},
    { text: "Montana", correct: false},
    { text: "Rhode Island", correct: false}
  ]

}, {
  question: "According to a Yale University study, what smell is the most recognizable to American adults?",
  answers:[
    { text: "tuna", correct: false},
    { text: "laundry", correct: false},
    { text: "popcorn", correct: false},
    { text: "coffee", correct: true}
  ]


}, {
  question: "According to folklore, the 'jackalope' is an antlered version of what animal?",
  answers:[
    { text: "chicken", correct: false},
    { text: "moose", correct: false},
    { text: "rabbit", correct: true},
    { text: "snake", correct: false}
  ]
}
]

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex =0,
    score = 0;
    nextButton.innerHTML ='Next'
    showQuestion();
}

function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    }    
    )
}


function resetstate(){
    nextButton.style.display = 'none'
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
 const selectedBtn = e.target;
 const isCorrect = selectedBtn.dataset.correct === 'true';
 if(isCorrect){
    selectedBtn.classList.add('correct')
    score++
 }else{
    selectedBtn.classList.add('incorrect')
 }
 Array.from(answerButtons.children).forEach(button =>{
  if(button.dataset.correct === 'true'){
    button.classList.add('correct')
  }
  button.disabled = true
 })
  nextButton.style.display = 'block'
 
}

function showScore(){
  resetstate();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
  nextButton.innerHTML = 'Play Again'
  nextButton.style.display = 'block'
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion()
  }else{
    showScore();
  }
}

nextButton.addEventListener('click', ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton()
  }else{
    startQuiz()
  }
})



startQuiz()