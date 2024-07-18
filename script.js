console.log("Welcome to Tic Tac Toe")
let music = new Audio("tic-tac-ping-71824.mp3")
let audioTurn = new  Audio("snd_fragment_retrievewav-14728.mp3")
let gameOver=new Audio("mixkit-arcade-retro-game-over-213.wav")
let turn = "X"
let isgameover = false;
//Function to change the turn
const ChangeTurn= ()=>{
    return turn=== "X" ? "0": "X"
}

//Function to check for a win
const CheckWin= ()=>{
 let boxtext= document.getElementsByClassName('boxtext');    
 let wins = [
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,5,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135]
 ]
    wins.forEach(e =>{
      if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== "" ){
         document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
         isgameover = true
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
         document.querySelector(".line").style.width = "20vw"
         document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
      }

    } )
}

//Game Logic
 
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
 let boxtext=element.querySelector('.boxtext');
 element.addEventListener('click', ()=>{
  if(boxtext.innerText === ''){
    boxtext.innerText= turn;
    turn = ChangeTurn();
    audioTurn.play();
    CheckWin();
    if(!isgameover){
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn
    }
  }
   })
})

//Add onclick listener to reset button
reset.addEventListener('click', (e)=>{
   let boxtexts = document.querySelectorAll('.boxtext');
   Array.from(boxtexts).forEach(element => {
    element.innerText=""
   });
   turn = "X";
   isgameover = false
   document.querySelector(".line").style.width = "0vw"
      document.getElementsByClassName("info")[0].innerText = "Turn for" + turn   
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})