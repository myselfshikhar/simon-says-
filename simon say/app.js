let gameseq= [];
let userseq= [];
let btns=["yellow","red","purple","green"];

let started = false;
let level =0;
let hisc =0;
let h2= document.querySelector("h2");
let h3= document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started== false)
    {
        console.log("game is started");
        started = true;
        levelup();
    }

});
function gameflash(btn)
{
    // btn.classList.add("flash");
    btn.classList.add("flash");
    setTimeout(function(){btn.classList.remove("flash");},100);

}
function userflash(btn)
{
    // btn.classList.add("flash");
    btn.classList.add("userflash");
    setTimeout(function(){btn.classList.remove("userflash");},100);

}
function levelup()
{
    document.querySelector("body").style.backgroundColor="cornflowerblue";

    userseq=[];
    level++;
    if (hisc<level)
    {
        hisc=level;
    }
    h2.innerText=` level is ${level}`;
    h3.innerText=`highest score is ${hisc}`;
    let randIdx=Math.floor(Math.random()*3);
    let randcolor= btns[randIdx];
    let randbtn =document.querySelector(`.${randcolor}`);
    // console.log(randcolor);
    gameseq.push(randcolor);
    console.log(gameseq);



    gameflash(randbtn);

}

function checkans(idx){
    // console.log("current level:",level);
    // let idx= level-1;
    if(userseq[idx]===gameseq[idx])
    {
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over ! your score was <b>${level}</br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        // setTimeout(function(){document.querySelector("body").style.backgroundColor="cornflowerblue";},2000);
        reset();
    }

}

function btnpress(){
    let btn=this;
    console.log(btn);
    userflash(this);
    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let btnall= document.querySelectorAll(".btn");
for(btn of btnall)
{
    btn.addEventListener("click",btnpress);
}

function reset()
{
    document.querySelector("body").style.backgroundColor="red";
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}



