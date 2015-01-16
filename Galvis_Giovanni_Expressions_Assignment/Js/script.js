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

