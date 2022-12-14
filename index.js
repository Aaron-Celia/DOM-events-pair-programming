const cookieButton = document.querySelector("#cookie-button");
const counterDiv = document.querySelector("#counter");
let  counterNum = 0;

cookieButton.addEventListener("click", function(){
    counterNum++;
    counterDiv.innerText = counterNum;
});



// font size change
let paragraph = document.querySelector("#random-text");
let magnifyButton = document.querySelector("#increment-up");
let deMagnify = document.querySelector("#increment-down");
let counter = 16;

magnifyButton.addEventListener("click", function(){
    if (counter < 100){
        counter++;
        paragraph.style.fontSize = counter + "px";
    }
});

deMagnify.addEventListener("click", function(){
    if (counter > 1){
        counter--;
        paragraph.style.fontSize = counter + "px";
    }
});



// background color change
const colorBttn = document.querySelector("#background-color");

document.querySelector("#green-screen").style.marginTop = "30px";
document.querySelector("#input-box").style.marginBottom = "10px";

colorBttn.addEventListener("click", function(){
    let input = document.querySelector("#input-box").value;
    document.body.style.backgroundColor = input;
});



//crane game
const box = document.querySelector("#container");
//box styling
box.style.backgroundColor = "#333";
box.style.height = "400px";
box.style.width = "250px";

let crane = document.querySelector("#crane-image");
//image styles
crane.style.width = "50%"
crane.style.height = "50%"
// crane.style.position = "relative";

let topButton = document.querySelector("#top");
let bottomButton = document.querySelector("#bottom");
let leftButton = document.querySelector("#left");
let rightButton = document.querySelector("#right");

// click events
topButton.addEventListener("click", function(){
    crane.setAttribute("align", "top")
});

bottomButton.addEventListener("click", function(){
    crane.setAttribute("align", "bottom");
});

leftButton.addEventListener("click", function(){
    crane.className = "left";
});

rightButton.addEventListener("click", function(){
    crane.className = "right"
});



let mouseOver = document.querySelector("#mouseover-title")

mouseOver.addEventListener("mouseover", function(){
    mouseOver.style.color = "white"
})
