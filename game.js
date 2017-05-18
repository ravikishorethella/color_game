var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

// selecting all the squares 
var squares = document.querySelectorAll(".square");

// for time being we are hard coding the target color
var pickedColor = pickColor();

//
var colorDisplay = document.getElementById("colorDisplay");

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