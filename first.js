let userScore=0;
let compScore=0;
 const choices=document.querySelectorAll(".choice");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

 const genCompChoice=() =>{
    const options=["rock","paper","scissor"];
    const rndIdx=Math.floor(Math.random()*3);
    return options[rndIdx];
 }
  
const drawGame= ()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw. Play Again!!"
    msg.style.backgroundColor="Red";
    
}

const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
    console.log("You Win!");
    msg.innerText=`You Win! Your ${userchoice} beats ${compChoice}`;
msg.style.backgroundColor="Green";
}
    

    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose!");
        msg.innerText=`You Lost!  ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="DeepPink";


    }

};
 const playGame= (userchoice) =>{
    console.log("user choice =",userchoice);
    const compChoice=genCompChoice();
    console.log("comp choice =",userchoice);


if(userchoice === compChoice){
    drawGame();}
    else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if( userchoice==="paper"){
            userWin=compChoice==="scissors"?false:true;

        }else{
            userWin=compChoice==="rock"?false:true;
        }
  
    showWinner(userWin,userchoice,compChoice);
}

 };
 choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);

    });

 });
