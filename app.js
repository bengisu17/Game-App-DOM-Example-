let randomNumber = Math.floor (Math.random() * 100 ) +1 ;
console.log(randomNumber)


let score = 10;
// let topScore = 0;
let topScore = localStorage.getItem("topScore")||0;
document.querySelector(".top-score").textContent = topScore;

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
            // topScore = score;
            localStorage.setItem("topScore", score);
            document.querySelector(".top-score").textContent = score;
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
    randomNumber = Math.floor (Math.random() * 100 ) +1 ;
    document.querySelector(".secret-number").textContent = "?";
    console.log(randomNumber)
    document.querySelector("check-btn").disabled = false;
    document.querySelector("body").className.remove("green red");
    document.querySelector(".guess-input").value = "";
    document.querySelector(".msg").innerText = `Starting..`;
});


document.querySelector(".guess-input").addEventListener("keydown", (e) => {
    if (e.code === 'Enter'){
        document.querySelector(".check-btn").click();
    }
})



// myObj = { a:1 , b:2 , c:3 };

// localStorage.setItem("OBJ", JSON.stringify(myObj));
// const readObj = localStorage.getItem("OBJ");
// const readObJ = JSON.parse(localStorage.getItem("OBJ"));
// console.log(readObJ);
