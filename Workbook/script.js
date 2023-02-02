'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (
    { starterIndex = 1, mainIndex = 0, address, time = '00:00' } //  destrukturyzacja obiektu podanego jako argument funkcji, podstawiamy do funkcji nie pojedyncze zmienne, lecz cały obiekt zdestrukturyzowany do poszczególnych właściwości i ich wartości.
  ) {
    console.log(
      `Order received! The ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};
// 1) Destructuring
/*
// SPREAD użyty po prawej stronie znaku =
const arr = [1, 2, ...[3, 4]]; // [1, 2, 3, 4]
console.log(arr);

//REST, użyty po lewej stronie znaku =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, ...others); // 1 2 3 4 5
console.log(a, b, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, ...otherFood);
console.log(pizza, risotto, otherFood);

// OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
*/
// 2) Functions
//rest operator użyty do wstawienia wszystkich argumentów wpisanych przy wywoływaniu funkcji, bez względu na ich liczbę (gdy nie wiemy jaka będzie ilość zmiennych)
const add = function (...numbers) {
  // rest operator użyty w funkcji, pobranie wszystkich pojedynczych argumentów
  //console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5, 6);
add(8, 2, 4, 5, 6, 7, 8);

const x = [23, 5, 7];
add(...x); // spread operator użyty w funkcji, rozsmarowanie elementów z arrayki i użycie jako argumenty

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// mushrooms
// ['onion', 'olives', 'spinach']

// Spread operator vs rest operator: spread tam gdzie użylibyśmy wartości oddzielonych przecinkami, podczas gdy rest operator tam, gdzie zastępujemy wypiswanie nazw zmiennych odddzielone przecinkami.
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
*/
//Spread operator bierze elementy z tablicy i kolejno je wypisuje, (zastępując zapis z linii 3 powyżej)
//Spread operator różni się, tym, że bierze wszystkie elementy i wyciąga je na zewnątrz, nie tworząc nowych zmiennych, dlatego możemy użyć go w sytuacjach gdzie wartości oddzielone są przecinkami

/*
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
//ten zapis równy jest temu:
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, sttrings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']; // spread operator wziął string 'Jonas' i rozdzielił go na pojedyńcze litery w stringu --> ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(letters);
console.log(...str); // --> J o n a s

*/
//Real exemple
/*
const ingredients = [
  prompt("Let/'s make pasta! Ingredients 1?"),
  prompt('Ingredient 2'),
  prompt('Ingredient 3'),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); //Here is your delicious pasta with jeden, dwa and trzy
// zamiast powyższego zapisu możemy zawołać tą funkcję w następujący sposób:
restaurant.orderPasta(...ingredients); // Here is your delicious pasta with jeden, dwa and trzy
*/
/*
// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
*/
/*
////////////////////
Destructuring Objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Łopuszańska 23',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, openingHours, categories);
*/
// Default values
/*
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 98;
let b = 787;
const obj = { a: 23, b: 7, c: 5 };
({ a, b } = obj); // wyrażenie zmieniające wartość zmiennej a i b na 23 i 7 umieszczamy w nawiasie okrągłym
console.log(a, b); // 23 i 7

// Nested object

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/*
///////////////
Destructuring Arrays
// const arr = [12, 22, 222];

// const [x, y, z] = arr;

// console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
