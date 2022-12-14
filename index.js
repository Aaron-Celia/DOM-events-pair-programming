//cookie click count
const cookieButton = document.querySelector("#cookie-button");
const counterDiv = document.querySelector("#counter");
let  counterNum = 0;

cookieButton.addEventListener("click", function(){
    counterNum++;
    counterDiv.innerText = counterNum;
});



// font size change
let paragraph = document.querySelector("#random-text");
const magnifyButton = document.querySelector("#magnify");
const normal = document.querySelector("#normal");

magnifyButton.addEventListener("click", function(){
    paragraph.style.fontSize = "25px";
});

normal.addEventListener("click", function(){
    paragraph.style.fontSize = "16px";
});



// background color change
const colorBttn = document.querySelector("#background-color");

document.querySelector("#green-screen").style.marginTop = "30px";
document.querySelector("#input-box").style.marginBottom = "10px";

colorBttn.addEventListener("click", function(){
    let input = document.querySelector("#input-box").value;
    document.body.style.backgroundColor = input;
});

