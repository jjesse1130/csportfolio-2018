/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);

background(24,20,20);

frameRate(8)






var bears = [];



var drawBear = function(x, y){

frameRate(mouseX) 

fill(random(270),random(270),random(200));
ellipse(x, y, 35, 35);
ellipse(x - 10, y - 20, 15, 15);
ellipse(x + 10, y - 20, 15, 15);
ellipse(x - 5, y, 5, 5);
ellipse(x + 5, y, 5, 5);
line(x - 4, y + 6, x + 4, y + 6);
};    
 
 
 mouseClicked = function(){
  bears.push({x:mouseX, y:mouseY})
  
 }
 
  draw = function () {
      
frameRate(mouseX /10) 



      for(var i = 0; i < bears.length; i++){
          drawBear(bears[i].x, bears[i].y)
}


for(var i = 0; i < width; i+=90){
    for(var j = 0; j < height; j+=30){
       var size = random(30);
       fill(random(270),random(270),random(20) ) 
       stroke(random(200),random(15),random(270) ) 
       ellipse(i, j, size,size);
        
    }
   

}

}
    

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);