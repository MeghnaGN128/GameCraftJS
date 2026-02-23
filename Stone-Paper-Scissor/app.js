let userscore= 0;
let computerscore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#computerscore");

const generateComputerChoice = ()=>{
    const options = ["stone","paper","scissor"];
   const ranIdx = Math.floor(Math.random() * 3);
   return options[ranIdx];
};

const drawGame = ()=>{
    console.log("Game was draw");
     msg.innerText = "Game was draw";
     msg.style.backgroundColor = "#154378";
};

const showWinner=(userWin,userChoice,computersChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win! ,${userChoice} beats ${computersChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerscore++;
        compScorePara.innerText = computerscore;
        msg.innerText = `You Lost........,${computersChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice)=>{
    const computersChoice =generateComputerChoice();
       if(userChoice === computersChoice){
            drawGame();
       }else{
        let userWin = true;
        if(userChoice === "stone"){
           userWin = computersChoice==="paper"? false : true;
        }else if(userChoice === "paper"){
           userWin = computersChoice==="scissor"? false:true;
        }else{
           userWin = computersChoice==="stone"? false: true;
        }
        showWinner(userWin,userChoice,computersChoice);
       }

};

choices.forEach((choice)=>{
 choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
     playGame(userChoice);
 });
});