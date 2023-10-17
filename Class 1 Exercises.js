/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
// Calculate the radius of each pizza
const smallPizzaSize = 13; // inches
const smallPizzaPrice = 16.99; // dollars
const largePizzaSize = 17; // inches
const largePizzaPrice = 19.99; // dollars

const smallPizzaRadius = smallPizzaSize / 2;
const largePizzaRadius = largePizzaSize / 2;

// Calculate the area of each pizza
const smallPizzaArea = Math.PI * Math.pow(smallPizzaRadius, 2);
const largePizzaArea = Math.PI * Math.pow(largePizzaRadius, 2);

// 2. What is the cost per square inch of each pizza?
const smallPizzaCostPerSquareInch = smallPizzaPrice / smallPizzaArea;
const largePizzaCostPerSquareInch = largePizzaPrice / largePizzaArea;

// Output the results:
console.log(`Small Pizza:
  - Area: ${smallPizzaArea.toFixed(2)} square inches
  - Cost per square inch: $${smallPizzaCostPerSquareInch.toFixed(2)}`);

console.log(`Large Pizza:
  - Area: ${largePizzaArea.toFixed(2)} square inches
  - Cost per square inch: $${largePizzaCostPerSquareInch.toFixed(2)}`);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
const randomCardValue = Math.floor(Math.random() * 13) + 1;

// Output:
console.log(`\nHi there, You drew a random card with a value of ${randomCardValue}\n`);

// 4. Draw 3 cards and use Math to determine the highest
// card

const card1 = Math.floor(Math.random() * 13) + 1;
const card2 = Math.floor(Math.random() * 13) + 1;
const card3 = Math.floor(Math.random() * 13) + 1;

const highestCard = Math.max(card1, card2, card3);
// Output:
console.log(`card 1 value: ${card1}`);
console.log(`card 2 value: ${card2}`);
console.log(`card 3 value: ${card3}`);
console.log(`The highest card value is ${highestCard}\n`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = "Viet";
const lastName = "Tran";
const streetAddress = "3800 NE SUNSET BLVD";
const city = "RENTON";
const state = "WA";
const zipCode = "98058";

const formattedAddress = `${firstName} ${lastName}\n${streetAddress}\n${city}, ${state} ${zipCode}`;
// Output:
console.log(`My formatted address block is as below: \n ${formattedAddress}`);
// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
//
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
const inputString = "Viet Tran 3800 NE 2ND ST RENTON, WA 98059";

// Find the index of the first space
const firstSpaceIndex = inputString.indexOf(" ");

// Extract the first name using substring
const myFirstName = inputString.substring(0, firstSpaceIndex);

// Alternatively, we can use slice. See below for using slice
// const firstName = inputString.slice(0, firstSpaceIndex);

console.log(`\nMy First Name: ${myFirstName}`);

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
// const endDate = new Date(2019, 3, 1);

const startDate = new Date(2020, 0, 1); // Jan 1, 2020
const endDate = new Date(2020, 3, 1);   // April 1, 2020

// Calculate the middle date and time
const middleTimestamp = startDate.getTime() + (endDate.getTime() - startDate.getTime()) / 2;
const middleDate = new Date(middleTimestamp);

console.log(`\nThe middle date and time of ${startDate} and ${endDate} is: ${middleDate}`);
