//Guerra, Andre 12/13/14 Expressions - Wacky

var health = prompt("What is your overall fitness level 1–10?");
var age = prompt("What is your age?");
var waist = prompt("What is your waist size?")
var cavities = prompt("How many cavities do you have?");
var totalTeeth = prompt("How many bottom teeth do you have?");

totalTeeth += 16

var jellyBeans = (health + age) * waist / cavities + totalTeeth;

alert("After calculating your inputs, we concluded that you can eat a total of " + jellyBeans + " jelly beans in one sitting. That's impressive!")

console.log("After calculating your inputs, we concluded that you can eat a total of " + jellyBeans + " jelly beans in one sitting. That's impressive!");


