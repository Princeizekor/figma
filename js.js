document.getElementById("menu").innerHTML = "Hello World";
document.getElementById("menu").style.color = "yellow";
document.getElementById("menu").style.fontSize = "50px";
// document.getElementById('flat').style.float = "left";
function myFunction() {
    document.getElementById("plant").innerHTML = "Paragraph has been changed";
}

alert("This page is built by izekor on visual studio code,");

console.log(15 + 15);

document.getElementById('menu1').style.color = "grey";
var x, y, z;
var x = 10;
var y = 10;
var z = x + y;
document.getElementById("sharp").innerHTML = "The value of z is " + z ;

let text1 = "john";
let text2 = "doe";
let text3 = text1 +" "+ text2;
document.getElementById("proud").innerHTML = text3;

const myArray = [["people "], ["party "]];
myArray.push(["tomorrow"], ["sweet"]);
document.getElementById("Proud").innerHTML = myArray;

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
document.getElementById("note").innerHTML = ourArray;

function testStrict(val) {
    if (val == 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
// const myArray = [["people "], ["party "]];
// myArray.pop(["tomorrow"], ["sweet"]);
// document.getElementById("Proud").innerHTML = myArray;
// const myArray = [["people "], ["party "]];
// myArray.shift(["tomorrow"], ["sweet"]);
// document.getElementById("Proud").innerHTML = myArray;

