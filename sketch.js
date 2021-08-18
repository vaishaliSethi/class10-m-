var a = prompt("Enter first variable")
var b = prompt("Enter second variable")

var button =createButton(swap)
button.mousePressed(swap);
function draw() {
  background(220);
}

function swap(){
[a,b]=[b,a]
}