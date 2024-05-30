// let boxes =document.querySelectorAll(".box");
// let Reset = document.querySelector(".Reset");
// //let msg = document.querySelector("#result");
// let turn0=true;

// const winning =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
// let result=document.querySelector(".result");
// let msg=document.querySelector(".msg");
// let newBtn=document.querySelector(".newbtn");
// let hide = document.querySelector(".hide");



// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         if(turn0==true){//player o turn
//             box.innerText="X";
//             turn0=false;
//         }
//         else{
//             box.innerText="O"; 
//             turn0=true;
//         }
//         box.disabled=true;
//         checkWinner();
//     });
// });


// const checkWinner =()=>{
//     for(pattern of winning){
//        let pos1=boxes[pattern[0]].innerText;
//        let pos2=boxes[pattern[1]].innerText;
//        let pos3=boxes[pattern[2]].innerText;
//        if(pos1!=''&&pos2!=''&&pos3!=''){
//         if(pos1===pos2&&pos2===pos3){
//             //console.log("winner",pos1);
//             showWinner(pos1);
//         }
//        }
       

//     }
// }

// const showWinner=(winner)=>{
//     result.innerText=`Congratulation ,Winner is ${winner}`;
//     msg.classList.remove(".hide");
//     disabledBoxes();
//   }













// const disabledBoxes=()=>{
//     for(let box of boxes){
//         box.disabled = true;
//     }
// }



// const reset=()=>{
//     turn0=true;
//     enableBoxes();
//     msg.classList.add("hide");
// }


// const enableBoxes = ()=>{
//     for(let box of boxes){
//         box.disabled = false;
//         box.innerText="";
//     }
// }


 














// newGame.addEventListener("click",reset);
// Reset.addEventListener("click",reset);
















let  boxes = document.querySelectorAll(".box");
let result=document.querySelector(".result");
let msg=document.querySelector(".msg");
let newbtn=document.querySelector(".newbtn");
let resetbtn=document.querySelector(".Reset");

let turn0=true;
let winPattern =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0==true){
            box.innerText="X";
            turn0=false;
        }
        else{
            box.innerText="0";
            turn0=true;
        }
        box.disabled=true;
        Winnergame();
    })
})


const Winnergame=()=>{
    for(let pattern of winPattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1.length!==0&&val2.length!==0&&val3.length!==0){
             if(val1===val2&&val2===val3){
                //console.log("winner",val1);
                showWinner(val1);
             }

        }
        
    }
}

const showWinner=(val1)=>{
     result.innerText=`Congratulation winner is ${val1}`;
     msg.classList.remove('hide');
     disablebtn();
}

const disablebtn=()=>{
  for(box of boxes){
    box.disabled=true;
  }
}


newbtn.addEventListener("click",()=>{
    enablebtn();
    msg.classList.add('hide');
})

const enablebtn=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


resetbtn.addEventListener("click",()=>{
    enablebtn();
    msg.classList.add('hide');
})