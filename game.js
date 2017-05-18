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
var pickedColor = colors[2];

//
var colorDisplay = document.getElementById("colorDisplay");

// the colorDisplay should be changed to the picked color
colorDisplay.textContent = pickedColor;

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
        }else{
            alert("wrong");
        }
    });
} 

