/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);

//creates a backround for my aryt piece
background(0,0,0);

//balances the speed of the colors in my art piece 
frameRate(8)





//creates a variable to tell your array  
var bears = [];


//creats bears as you clique your mouse 
var drawBear = function(x, y){

frameRate(mouseX) 

// creates bears and alows you change their color
fill(random(450),random(390),random(490));
fill(random(450),random(390),random(490));
ellipse(x, y, 35, 35);
ellipse(x - 10, y - 20, 15, 15);
ellipse(x + 10, y - 20, 15, 15);
ellipse(x - 5, y, 5, 5);
ellipse(x + 5, y, 5, 5);
line(x - 4, y + 6, x + 4, y + 6);
};    
 
 //you clique the mouse and a circle will appear on the x and y axis of the mouse
 mouseClicked = function(){
  bears.push({x:mouseX, y:mouseY})
  
 }
  //tells the processing.js to draw your bears
  draw = function () {
//balances the speed of the color for the bears      
frameRate(mouseX /10) 
      for(var i = 0; i < bears.length; i++){
          drawBear(bears[i].x, bears[i].y)
          
}

//creates circles in a certain pattern  and allows to change the color
for(var i = 0; i < width; i+=99){
    for(var j = 0; j < height; j+=30){
       var size = random(30);
       fill(random(450),random(390),random(490))
       stroke(random(200),random(15),random(270) ) 
       ellipse(i, j, size,size);
       
    }
}

}
    

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);