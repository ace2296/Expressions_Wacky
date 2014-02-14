//Guerra, Andre 12/13/14 Expressions - Wacky

//Found out how many jelly beans you can eat in one sitting

var health = prompt("What is your overall fitness level 1 through 10?"); //Sets the based number for jelly bean equation
var age = prompt("What is your age?"); //This is multiplied by the health
var waist = prompt("What is your waist size? i.e. 28, 29, 30, 6, 8") //This is multiplied by the total teeth
var cavities = prompt("How many cavities do you have?"); //This will take away fromy our total number
var totalTeeth = prompt("How many bottom teeth do you have? Hopefully all of them."); //This will double up to come out with the total teeth you have

totalTeeth += 16 //Assignment operator to calculate total teeth

var jellyBeans = (health * age) + (waist * totalTeeth) - cavities; //This will come out with the total number of jelly beans you can eat in one sitting

//This will alert the user with the end result
alert("After calculating your inputs, we concluded that you can eat a total of " + jellyBeans + " jelly beans in one sitting. That's impressive!")

//This will be stored in console to read at a later time
console.log("After calculating your inputs, we concluded that you can eat a total of " + jellyBeans + " jelly beans in one sitting. That's impressive!");