const randomNumber = Math.floor (Math.random() * 100 ) +1 ;
console.log(randomNumber)


let score = 10;
let topScore = 0;

const msg = document.querySelector(".msg");


document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value);
    if (!guessInput){
        document.querySelector(".msg").innerText="Please enter a number";
    }
    else if (randomNumber === guessInput){
        document.querySelector(".msg").innerText = `Congratulations`;
        document.querySelector("body").style.background = "green";
        
        if (score > topScore){
            topScore = score;
            document.querySelector(".top-score").textContent = topScore;
        }
        document.querySelector(".secret-number").textContent = randomNumber;
    } else {
        score --;
        if (score > 1){
        guessInput > randomNumber
        ? (msg.innerText = "DECREASE")
        : (msg.innerText = "INCREASE");
        msg.innerText = "Try Again...";
            document.querySelector("body").style.background = "red";
            document.querySelector(".check-btn").disabled = true;
        }
            
        document.querySelector(".score").textContent = score;
    }
});

document.querySelector(".again-btn").addEventListener('click', () => {
    score = 10;
    const randomNumber = Math.floor (Math.random() * 100 ) +1 ;
    console.log(randomNumber)

})
