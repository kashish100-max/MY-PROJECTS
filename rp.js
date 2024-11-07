sub=document.querySelector("#sub");
btn1=document.querySelector("#btn1");
btn2=document.querySelector("#btn2");
btn3=document.querySelector("#btn3");
// button=document.querySelectorAll("button");

let player;
let pc;

btn1.addEventListener("click",()=>{
    
    player=1
    console.log(player)
    computer();

})
btn2.addEventListener("click",()=>{
    player=2
    console.log(player)
    computer();

})
btn3.addEventListener("click",()=>{
    player=3
    console.log(player)
    computer();

})

function computer(){
    pc=Math.floor(Math.random()*3)+1
    
    console.log(pc)
    check();

}
function check(){
    if(player===pc){
        sub.innerText="It's a DRAW";
        
    } else if(player===1){
        if(pc==2){
            sub.innerText="Oh, You Lost!!"
        } else if(pc===3){
            sub.innerText="Congrats You win!!"
        } 
    } else if(player===2){
        if(pc==1){
            sub.innerText="Congrats You win!!"
        } else if(pc===3){
            sub.innerText="Oh, You Lost!!"
        } 
    }  else if(player===3){
        if(pc==1){
            sub.innerText="Oh, You Lost!!"
        } else if(pc===2){
            sub.innerText="Congrats You win!!"
        } 
    }  
    let h3 = document.createElement("h3");
    h3.innerText = "To play again, choose your move!";
    h3.style.textAlign = "center";
    sub.appendChild(h3);  
    
    setTimeout(Resetgame,3000);

}

function Resetgame(){
    player=null;
    pc=null;
    sub.innerHTML="";
    sub.innerText="choose your move"

}