/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


var xPos = 0;
var yPos = 0;


draw = function() {

   
    strokeWeight(3);
    stroke(10,10,10);
    fill(100,20,24)
    ellipse(xPos, yPos,30,30);
    xPos = xPos + 20
    yPos = yPos + 20
   
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);