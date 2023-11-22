const prompt = require("prompt-sync")() //get access to the prompt module
let canditate_name = "";
let score = 100;
let questions = [
    'what is the brain of the computer?',
    '4 + 5 is equal to what?',
    'apple is a what?',
    'how many months do we have in a year?'
]
let answers = [
    'cpu',
    '9',
    'friut',
    '12'
]

canditate_name = prompt('please enter your name: ');
console.log('=========>>>>>> hola welcome to the annual quiz competition ', canditate_name, ' ==========>>>>>')
console.log('enter start to begin quiz or anything else to cancel');
let choice = prompt('enter start choice: ')
if (choice.toLowerCase() === 'start') {
    console.log('=======>>> please answer the following questions======>>>>>')
    for(i=0; i<questions.length; i++)
    {
        console.log(questions[i]);
        answer = prompt('enter answer: ');
        if (answer === answers[i]) {
            console.log("======>>>great your answer is correct====>>>");
        } else {
            console.log("======>>>>>oh no you have the wrong answer======>>>");
            score = score - 10;
        }
    }

    console.log("thanks for participating you had ", score, "%")

} else {
    console.log("come back when you are ready")
}