var numSquares = 6;

// instead of hard coding the color values we will generate the colors randomly  
var colors = generateRandomColors(numSquares);

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

// selecting the button 
var resetButton = document.querySelector("#reset");

// selecting the easy and hard buttons
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


// focusing on the easy button
easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

// focusing on the hard button
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

// clicking the reset button
resetButton.addEventListener("click",function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick arandom color from the array
    pickedColor = pickColor();
    // change the color display to match the picked color
    colorDisplay.textContent = pickedColor;
    // change the messageDisplay text after winning the game
    messageDisplay.textContent = "";
    //change the text of the play again to new colors after starting the game
    resetButton.textContent = "New Colors";
    // change the color for the squares    
    // iterate over the squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    } 
    h1.style.background = "steelblue";
});

// iterating over all the squares
for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    
    // adding the click listeners to the squares
    squares[i].addEventListener("click",function(){
        
        //the color should be of the clicked  
        var clickedColor = this.style.background;
        
        // chech the condition to see if the clickedColor matches with the pickedColor
        if(clickedColor === pickedColor){            
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        }else{
            // if the pickedcolor is not matched then we need to fade the color out
            // this is nothing bu tsetting the color to the original background color
            this.style.background = "#232323";
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