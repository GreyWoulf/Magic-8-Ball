let userName = "";
let userQuestion = "When will I be rich?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = 0;
if(userName === 'Jane'){
    console.log(`Hello, ${userName}. Your Question Was: ${userQuestion}`)
}
else {
    console.log(`Hello. Your Question Was: ${userQuestion}`)
}

if (randomNumber === 1){
    eightBall += randomNumber;
    console.log(`It is certain`)
}
else if (randomNumber === 2){
    eightBall += randomNumber;
    console.log(`It is decidedly so`)
}
else if (randomNumber === 3){
    eightBall += randomNumber;
    console.log(`Reply hazy try again`)
}
else if (randomNumber === 4){
    eightBall += randomNumber;
    console.log(`Cannot predict now`)
}
else if (randomNumber === 5){
    eightBall += randomNumber;
    console.log(`Do not count on it`)
}
else if (randomNumber === 6){
    eightBall += randomNumber;
    console.log(`My sources say no`)
}
else if (randomNumber === 7){
    eightBall += randomNumber;
    console.log(`Outlook not so good`)
}
else {
    console.log('Signs point to yes')
}