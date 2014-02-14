//Guerra, Andre 12/13/14 Expressions - Wacky

var health = prompt("What is your overall fitness level 1 through 10?"); //Sets the based number for jelly bean equation
var age = prompt("What is your age?"); //This is multiplied by the health
var waist = prompt("What is your waist size?") //This is multiplied by the total teeth
var cavities = prompt("How many cavities do you have?"); //This will take away fromy our total number
var totalTeeth = prompt("How many bottom teeth do you have?");

totalTeeth += 16

var jellyBeans = (health * age) + (waist * totalTeeth) - cavities;

alert("After calculating your inputs, we concluded that you can eat a total of " + jellyBeans + " jelly beans in one sitting. That's impressive!")

console.log("After calculating your inputs, we concluded that you can eat a total of " + jellyBeans + " jelly beans in one sitting. That's impressive!");


