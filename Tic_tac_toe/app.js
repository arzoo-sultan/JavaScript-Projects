let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-game-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");
let count=0;
let trunO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6], 
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8 ]
];

const newGame=()=>{
    trunO=true;
   enableBoxes();
   msgContainer.classList.add("hide");

}

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    disableBoxes();
    msgContainer.classList.remove("hide");
}
 const checkWinner=()=>{
    for(let pattern of winPatterns){
       //   console.log(pattern[0],pattern[1],pattern[2]);
     //  console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
     let posValue1=boxes[pattern[0]].innerText;
     let posValue2=boxes[pattern[1]].innerText;
     let posValue3=boxes[pattern[2]].innerText;
     
      if(posValue1!=""&&posValue2!=""&&posValue3!="")
     {
        if(posValue1===posValue2&&posValue2===posValue3)
        {
            console.log("winner",posValue1);
            showWinner(posValue1);
        }
        
     }
      
    
     }
    
     
 }
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button is clicked")
        if(trunO){
            box.innerText="O";
             box.style.color="yellow";
            trunO=false;
            
        }
        else{
            box.innerText="X";
            trunO=true;
             box.style.color="red";
        }
        box.disabled=true;
        checkWinner();
        
    })
})
newGameBtn.addEventListener("click",newGame);
reset_btn.addEventListener("click",newGame);