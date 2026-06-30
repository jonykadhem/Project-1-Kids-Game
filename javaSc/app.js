/*-------------------------------- Constants --------------------------------*/
let randomQuest = 0

/*-------------------------------- Variables --------------------------------*/
const alphaQuestArr = [{quist:'What is the first letter in the Alphabets', answer:'A', options:['A', 'B', 'C']},
    {quist:'What word starts with the letter "A"',answer:'Apple', options:['Melon', 'Apple','Barry']}
]
const numQuestArr = []
const colorQuestArr = []
const animleQuestArr = []
let countScore = 0
let countHeart = 0
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
const winOrlosep = document.createElement('p')
const nextQuist = document.createElement('button')
const tryagain = document.createElement('button')

/*----------------------------- Event Listeners -----------------------------*/
nextQuist.textContent = 'Next'
nextQuist.style.display = 'none'
alphaBody.append(nextQuist)

startH1.textContent = 'Are You Ready !!!!!'
alphaBody.append(startH1)
startBtn.addEventListener('click',function (event) {
    do{
        randomQuest = Math.floor(Math.random()*2)

    }while (randomQuest === previousQuist) 
    previousQuist = randomQuest
    console.log(randomQuest)
    quesiton.textContent = alphaQuestArr[randomQuest].quist
    countHeart = 3
    countScore = 0
    // answerp.textContent = 
    answerOptions(alphaQuestArr[randomQuest].options)
    // answerDiv.append(answerp)
    event.target.remove()
    startH1.remove()
    
})
startBtn.classList = 'start'

/*-------------------------------- Functions --------------------------------*/
// function randomIndx() {
    
// }
// randomQuest = randomIndx()

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
            const button = document.querySelectorAll('.options-btn')
            button.forEach(button => {
                button.disabled = true
            })
        nextQuist.style.display = 'block'

        })
        
    });

    score.textContent = `⭐ ${countScore}`
    heart.textContent = `❤ ${countHeart}`
    // console.log(countHeart,countScore)
    
}

function nextQuestion() {
    nextQuist.addEventListener('click', function (next) {
        quesiton.textContent = ''
        optionBtn=''
    })
}