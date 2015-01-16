/**
 * Created by Giovanni a Galvis on 1/15/15.
 * Expressions Assignment
 */

//first we will add up you had for dinner
var appetizer = prompt("How much was your appetizer?");
console.log(appetizer);
var dinner = prompt("How much was your main course?");
console.log(dinner);
var dessert = prompt("How much was your dessert?");
console.log(dessert);
//formula for adding up everything at the restaurant
var billAmount = Number(appetizer) + Number(dessert) + Number(dinner);
console.log(billAmount);
var restaurantBill = alert("Your total is $" + billAmount);
console.log(restaurantBill);
//prompt user the customary 15% tip
var tipAmount = billAmount * 0.15;
alert("The recommended tip should be $" + tipAmount);
alert("Have a safe drive home");

//now we will figure out the total for eating at home
var groceryBill = prompt("How much was your bill at the supermarket?");
parseInt(groceryBill);
console.log(groceryBill);

var meals = prompt("How many meals did you end up making?")
console.log(meals);

//find out how much each home made meal costs
var totalForDinner = Number(groceryBill)/Number(meals);
console.log(totalForDinner);
alert("Each meal that you made on average cost $" + totalForDinner);

var myArr = [restaurantBill,tipAmount,totalForDinner];
var totalWithTip = myArr[0] + myArr[1];
console.log(totalWithTip);
alert("Total with tip for dinner at restaurant is " + String(totalWithTip));
