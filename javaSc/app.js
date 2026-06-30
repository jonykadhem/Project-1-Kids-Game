/*-------------------------------- Constants --------------------------------*/
let randomQuest = 0
// const alphaQuestArr = require('./data.js')
/*-------------------------------- Variables --------------------------------*/
const alphaQuestArr = [{quist:'What is the first letter in the Alphabets', answer:'A', options:['A', 'B', 'C']},
    {quist:'What word starts with the letter "A"',answer:'Apple', options:['Melon', 'Apple','Barry']}
]
const numQuestArr = []
const colorQuestArr = []
const animleQuestArr = []
let countScore = 0
let countHeart = 0
let countQuestions = 0
let previousQuist = -1

/*------------------------ Cached Element References ------------------------*/
const score = document.querySelector('#score')
const noQuest = document.querySelector('#noOfQuestions')
const heart = document.querySelector('#hearts')
const quesiton = document.querySelector('#quesiton')
const answerDiv = document.querySelector('#answers')
const startH1 = document.createElement('h1')
const startBtn = document.querySelector('#start')
const answerp = document.createElement('p')
const alphaBody = document.querySelector('#alphaBody')
const winOrlosep = document.querySelector('#popupP')
const nextQuist = document.querySelector('#popupBtn')
const tryagain = document.createElement('button')
const popup = document.querySelector("#popup");
const popupTitle = document.querySelector("#popupTitle");




nextQuist.textContent = 'Next'
nextQuist.style.display = 'none'
alphaBody.append(nextQuist)

startH1.textContent = 'Are You Ready !!!!!'
alphaBody.append(startH1)
startGame()
//start button
function startGame() {
    
    startBtn.addEventListener('click',function (event) {
        // console.log(previousQuist)
        countHeart = 3
        countScore = 0
        countQuestions = 0
        // answerp.textContent = 
        
        // answerDiv.append(answerp)
        event.target.remove()
        startH1.remove()
        loadQuestion()
        
    })
}
    startBtn.classList = 'start'

// 
function randomIndx() {
     do{
        randomQuest = Math.floor(Math.random()*2)

    }while (randomQuest === previousQuist) 
        previousQuist = randomQuest
    }
    randomQuest = randomIndx()
    function loadQuestion() {
    
        // randomQuest = randomIndx()
        randomIndx()
        quesiton.textContent = alphaQuestArr[randomQuest].quist
        answerOptions(alphaQuestArr[randomQuest].options)
    }



// function for the options button
function answerOptions(options) {
    // console.log(options)

    options.forEach((element) => {
        const optionBtn = document.createElement('button')
        optionBtn.innerText = element
        answerDiv.appendChild(optionBtn)
        optionBtn.classList = 'options-btn'       
        optionBtn.addEventListener('click', function () {
            if (optionBtn.innerText === alphaQuestArr[randomQuest].answer) {
                winOrlosep.textContent= 'correct🎉, keep going 💪😍'
                answerDiv.append(winOrlosep)
                countScore += 1
            }else{
                winOrlosep.textContent= `incorrect😢. the correct answer is ${alphaQuestArr[randomQuest].answer}`
                answerDiv.append(winOrlosep)
                countHeart --
            }
            countQuestions +=1
            const button = document.querySelectorAll('.options-btn')
            button.forEach(button => {
                button.disabled = true
            })
        nextQuist.style.display = 'block'

        })
        
    });

    score.textContent = `⭐ ${countScore}`
    heart.textContent = `❤ ${countHeart}`
    noQuest.textContent = `⁉ ${countQuestions}/5`
    // console.log(countHeart,countScore)
}   

//next question button method to load the next question
function nextQuestion() {
    nextQuist.addEventListener('click', function (event) {
        answerDiv.innerHTML=''
        winOrlosep.textContent = ''
        nextQuist.style.display = 'none'
        
        loadQuestion()
        gameFinishing()
    })
}
nextQuestion()
function gameFinishing() {
  if (countQuestions === 5 && countHeart > 0) {
    winOrlosep.textContent = 'you finished the game '
    answerDiv.append(winOrlosep)
    // console.log('finish')
}else if (countHeart <= 0) {
    quesiton.disabled = true
    const button = document.querySelectorAll('.options-btn')
     button.forEach(button => {
                button.disabled = true
            })
    winOrlosep.textContent = 'you lost ideot'
    answerDiv.append(winOrlosep)

  }
}