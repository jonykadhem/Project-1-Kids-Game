/*-------------------------------- Constants --------------------------------*/
let randomQuest = 0
/*-------------------------------- Variables --------------------------------*/
const alphaQuestArr = [{quist:'What is the first letter in the Alphabets', answer:'A', options:['A', 'B', 'C']},
    {quist:'What word starts with the letter "A"',answer:'Apple', options:['Melon', 'Apple','Barry']}
]
const numQuestArr = []
const colorQuestArr = []
const animleQuestArr = []

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
/*----------------------------- Event Listeners -----------------------------*/
startH1.textContent = 'Are You Ready !!!!!'
alphaBody.append(startH1)
startBtn.addEventListener('click',function (event) {
    randomQuest = Math.floor(Math.random()*2)
    console.log(randomQuest)
    quesiton.textContent = alphaQuestArr[randomQuest].quist
    // answerp.textContent = 
    answerOptions(alphaQuestArr[randomQuest].options)
    // answerDiv.append(answerp)
    event.target.remove()
    startH1.remove()
    
})
/*-------------------------------- Functions --------------------------------*/
startBtn.classList = 'start'


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
                winOrlosep.textContent= 'correct'
                answerDiv.append(winOrlosep)
            }else{
                winOrlosep.textContent= `incorrect😢. the correct answer is ${alphaQuestArr[randomQuest].answer}`
                answerDiv.append(winOrlosep)
                
            }
            const button = document.querySelectorAll('.options-btn')
            button.forEach(button => {
                button.disabled = true
            })
        })
        
    });

    
}