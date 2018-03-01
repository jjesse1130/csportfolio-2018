/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
background(240,120,40);

frameRate(10)

draw = function() {
    
for(var i = 0; i < width; i+=10){
    for(var j = 0; j < height; j+=30){
       var size = random(30);
       fill(random(200),random(200),random(432) ) 
       stroke(random(200),random(150),random(23) ) 
       ellipse(i, j, size,size); 
        



     
    }
  
}
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
