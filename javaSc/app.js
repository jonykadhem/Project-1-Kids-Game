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
const startBtn = document.querySelector('#start')
const answerp = document.createElement('p')
const startH1 = document.createElement('h1')
const alphaBody = document.querySelector('#alphaBody')
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
    event.target.remove(startBtn)
    
    
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
        
        optionBtn.addEventListener('click', function (correctOption) {
            if (correctOption.innerText === alphaQuestArr.answer) {
                console.log('correct')
            }else{
                console.log('incorrect')
            }
        })
        
    });

    
}