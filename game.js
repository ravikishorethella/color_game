// instead of hard coding the color values we will generate the colors randomly  
var colors = generateRandomColors(6);

// selecting all the squares 
var squares = document.querySelectorAll(".square");

// for time being we are hard coding the target color
var pickedColor = pickColor();

//
var colorDisplay = document.getElementById("colorDisplay");

// targeting the h1 tag
var h1 = document.querySelector("h1"); 

// the colorDisplay should be changed to the picked color
colorDisplay.textContent = pickedColor;

// selecting the message
var messageDisplay = document.querySelector("#message");

// iterating over all the squares
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    
    // adding the click listeners to the squares
    squares[i].addEventListener("click",function(){
        
        //the color should be of the clicked  
        var clickedColor = this.style.backgroundColor;
        
        // chech the condition to see if the clickedColor matches with the pickedColor
        if(clickedColor === pickedColor){
            alert("correct");
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            // if the pickedcolor is not matched then we need to fade the color out
            // this is nothing bu tsetting the color to the original background color
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
} 

function changeColors(color){
    // we need to loop through the squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}  

// for picking the random color
function pickColor(){
    // to generate a random number in js we use the math.random()
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// code for generating the random colors
function generateRandomColors(num){
    // create an array
    var arr = [];
    //loop through the number
    for(var i=0; i<num; i++){
        // need to get the random color and push that into arr
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // SELECT one color of red from 0- 255
    var r = Math.floor(Math.random() * 256);
    // SELECT one color of green from 0- 255
    var g = Math.floor(Math.random() * 256);
    // SELECT one color of blue from 0- 255
    var b = Math.floor(Math.random() * 256);
    // return the color
    return "rgb(" + r + ", " + g + ", " + b +")";    
}