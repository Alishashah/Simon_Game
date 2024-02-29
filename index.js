let gamesquence=[];
let userseq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2")
let btns=["red","green","yellow","purple"]


document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("game started")
        started=true
    }
     levelup()
})


// butn flash
function butnflash(btn){
 btn.classList.add("flash")
 setTimeout(()=>{
btn.classList.remove("flash")
 },150)
}


// levels
function levelup(){
    userseq=[]
    level++
    h2.innerHTML=`LEVEL ${level}`

    let randinx=Math.floor(Math.random()*4)
    let randcolor=btns[randinx]
    let randbtn=document.querySelector(`.${randcolor}`)
    // console.log(randbtn)
    // console.log(randinx)
    console.log(randcolor)
    gamesquence.push(randcolor)
    console.log(gamesquence)
    butnflash(randbtn)
    // checkans()
}

// userflash
function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(()=>{
   btn.classList.remove("userflash")
    },150)
   }

//    user btn press
function btnpress(){
    console.log(this)
    let btn=this
    // userFlash(btn)
    userflash(btn)
    let usercolor= btn.getAttribute("id")
    console.log(usercolor)
    userseq.push(usercolor)
    checkans(userseq.length-1)
}

// check ans

function checkans(indx){
    // console.log(`current level ${level}`)
    // let indx = level-1
    console.log(indx)
    if(userseq[indx] === gamesquence[indx]){
        // console.log("same value")
        if(userseq.length==gamesquence.length){
            setTimeout(levelup,500)
            // levelup()
        }
    }
    else{
        h2.innerHTML=`!! Game Over Your score is<b> ${level} <b/> <br>press any key to restart game</br>`
        reset()
    }
}

// reset

function reset(){
    started=false;
    gamesquence=[];
    userseq=[];
    level=0;
}

let allbtn=document.querySelectorAll(".btn")

allbtn.forEach((btn)=>{
    btn.addEventListener("click",btnpress)
})
