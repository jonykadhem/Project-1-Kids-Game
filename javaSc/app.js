/*-------------------------------- Constants --------------------------------*/
let randomQuest = 0
// const alphaQuestArr = require('./data.js')
/*-------------------------------- Variables --------------------------------*/
// const alphaQuestArr = [{quist:'What is the first letter in the Alphabets', answer:'A', options:['A', 'B', 'C']},
//     {quist:'What word starts with the letter "A"',answer:'Apple', options:['Melon', 'Apple','Barry']}
// ]
// const numQuestArr = []
// const colorQuestArr = []
// const animalQuestArr = []
const game = {
    score: 0,
    heart: 3,
    quiestNumber: 0,
    usedQuestions: [],
    currentQuest: []
}
// let usedQuestions = []
// let currentQuest = []
// let countScore = 0
// let countHeart = 0
// let countQuestions = 0
// let previousQuist = -1

/*------------------------ Cached Element References ------------------------*/
const score = document.querySelector('#score')
const noQuest = document.querySelector('#noOfQuestions')
const heart = document.querySelector('#hearts')
const quesiton = document.querySelector('#quesiton')
const answerDiv = document.querySelector('#answers')
const startH1 = document.querySelector('#startH1')
const startBtn = document.querySelector('#start')
const answerp = document.createElement('p')
const alphaBody = document.querySelector('#alphaBody')
const popupMessage = document.querySelector('#popupP')
const nextQuist = document.querySelector('#popupBtn')
const tryagain = document.createElement('button')
const popup = document.querySelector("#popup");
const popupTitle = document.querySelector("#popupTitle");


// game.currentQuest=alphaQuestArr




startGame()
//start button
function startGame() {
    
    startBtn.addEventListener('click',function (event) {
        // console.log(previousQuist)
        game.heart = 3
        game.score = 0
        game.quiestNumber = 0
        game.usedQuestions = []
        // answerp.textContent = 
        updatGameStatus()
        // answerDiv.append(answerp)
        event.target.remove()
        startH1.remove()
        loadQuestion()
        
    })
}
    // startBtn.classList = 'start'

// 
function randomIndx() {
    if (game.usedQuestions.length === game.currentQuest.length) {
        return null
    }

     do{
        randomQuest = Math.floor(Math.random()*game.currentQuest.length)

    }while (game.usedQuestions.includes(randomQuest)) 
        game.usedQuestions.push(randomQuest)
        return randomQuest
}
    // randomQuest = randomIndx()

function loadQuestion() {
    
        randomQuest = randomIndx()
        // randomIndx()
        quesiton.textContent = game.currentQuest[randomQuest].question
        answerDiv.innerHTML = ''
        answerOptions(game.currentQuest[randomQuest].options)
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
            if (element === game.currentQuest[randomQuest].answer) {
                popupTitle.textContent= 'correct🎉'
                popupMessage.textContent = 'Great Jop! keep going 💪😍'
                // answerDiv.append(winOrlosep)
                game.score += 1
            }else{
                popupTitle.textContent= `incorrect😢.`
                popupMessage.textContent = ` the correct answer is ${game.currentQuest[randomQuest].answer}`
                // answerDiv.append(winOrlosep)
                game.heart --
            }
            game.quiestNumber +=1
            updatGameStatus()
            
            popup.classList.remove('hidden')
            const button = document.querySelectorAll('.options-btn')
            button.forEach(button => {
                button.disabled = true
            })
            
        nextQuist.style.display = 'block'

        })
        
    });

    
    // console.log(countHeart,countScore)
}   

//next question button method to load the next question

    nextQuist.addEventListener('click', function (event) {
        answerDiv.innerHTML=''
        popupMessage.textContent = ''
        nextQuist.style.display = 'none'
        if (gameFinishing()) {
            return
        }
        loadQuestion()
        popup.classList.add("hidden")
        console.log(popup.className)
    })




function gameFinishing() {
  if (game.heart <= 0) {
    answerDiv.innerHTML = ''
    const button = document.querySelectorAll('.options-btn')
     button.forEach(button => {
                button.disabled = true
            })
            quesiton.style.display = 'none'
    popupMessage.textContent = 'you lost ideot'
    return true
    
}
 if (game.quiestNumber === 5 ) {
    popupMessage.textContent = 'you finished the game '
    nextQuist.remove()
    quesiton.style.display = 'none'
    // answerDiv.append(winOrlosep)
    // console.log('finish')
    // answerDiv.append(winOrlosep)
    return true

  }
  return false
}

////////////////////////////////////////////////////////
//updating game status

function updatGameStatus(params) {
    score.textContent = `⭐ ${game.score}`
    heart.textContent = `❤ ${game.heart}`
    noQuest.textContent = `⁉ ${game.quiestNumber}/5`
}