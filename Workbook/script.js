'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // WZMOCNIENIE LITERAŁU OBIEKTU
  // 1. ES6 DODANIE MOŻLIWOŚCI umieszczenia właściwości obiektu z zewnątrz, czyli z zew zdefuniowanej zmiennej, poprzez wpisanie jej nazwy:
  openingHours,

  // 2. Usunięce napisu function, czyli bezpośrednie zdefiniowanie ekspresji funkcji
  // VSC oznacza ten zapis jako metoda, więc można poznać, że to funkcja
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(
    { starterIndex = 1, mainIndex = 0, address, time = '00:00' } //  destrukturyzacja obiektu podanego jako argument funkcji, podstawiamy do funkcji nie pojedyncze zmienne, lecz cały obiekt zdestrukturyzowany do poszczególnych właściwości i ich wartości.
  ) {
    console.log(
      `Order received! The ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};

// SETS nowy sposób przedstawienia danych, który bierze pod uwagę jedynie unikalne wartości, nie ma znaczenia kolejność danych, jest podobna do array, natomiast nie ma takiej użyteczności, jest mniej metod
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet); // {"Pasta", "Pizza", "Risotto"}

console.log(new Set('Bartłomiej')); // {"B", "a", "r", "t", "ł", "o", "m", "i", "e", "j"}

console.log(orderSet.size); // 3
console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
//orderSet.clear();
console.log(orderSet); // {"Pasta", "Pizza", "Garlic Bread"}

for (const order of orderSet) console.log(order); // Pasta Pizza Garlic Bread

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ["Waiter", "Chef", "Manager"]
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3

console.log(new Set('bartomiejciupa').size); // 13, ponieważ pomija powtarzające się litery a oraz i

/*
// Właściwość NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Właściwość WARTOŚCI
const values = Object.values(openingHours);
console.log(values);

// Cały Obiekt
const entries = Object.entries(openingHours);
//console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/
/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// OPTIONAL CHAINING ?.
// funkcjonalność, która sprawdza prawidłowość wyrażenia, jeśli jest null lub undefined, zwraca undefined i nie wykonuje kodu dalej (zapobiega Errorom).

//console.log(restaurant.openingHours.mon.open); // zwróci Uncaught TypeError: Cannot read properties of undefined (reading 'open')

console.log(restaurant.openingHours.mon?.open); // tylko jeśli wartość sprzed ? istnieje, to dalsza część będzie czytana

// Multi optional chaining:
console.log(restaurant.openingHours?.mon?.open);

// Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // Optional chaining oraz nullish coalescing działają razem, do tego zostały stworzone i polegają na koncepcji nullish, nie fasly
  console.log(`On ${day} we are ${open}`);
*/
/*
  On mon we are closed
  On tue we are closed
  On wed we are closed
  On thu we are 12
  On fri we are 11
  On sat we are 0
  On sun we are closed
  */

//}

/*
// Sprawdzanie czy METODA istnieje
console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist"); //['Focaccia', 'Pasta']
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist"); // zwraca undefined czyli wyświetla drugą stronę równania "Method doesn't exist"

// Sprawdzanie czy TABLICA jest pusta
const users = [{ name: 'Bartek', email: 'bartek@gmail.com' }];

console.log(users[0]?.name ?? 'User array is empty');
// Powyższy zapis zastępuje:
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array is empty');
}
*/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
//console.log([...menu.entries()]);
*/

/*
/////////////////////////////////////////////
// Logical Assignment Operators
const rest1 = {
  name: 'La Piazza',
  //numGuest: 23,
  numGuest: 0,
};

const rest2 = {
  name: 'Pax Romana',
  owner: 'Silvio Dante',
};

// OR assignment operator ||= - operator przypisania i wybrania truthy wartości jeśli pierwsza jest falsy
//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;

//rest1.numGuest ||= 10; // 23 lub 10 jeśli numGuest: 0
//rest2.numGuest ||= 10; // 10 bo pierwsza część wyrażenia jest falsy (undefined)

// nullish assignment operator ??= - operator przypisania wartości, która nie jest nullish
rest1.numGuest ??= 10; // 23 lub 0 jeśli numGuest: 0
rest2.numGuest ??= 10; // 10 bo pierwsza część wyrażenia jest nullish (undefined  )

//console.log(rest1);
//console.log(rest2);

// AND assignment operator - operator przypisania wartości tylko wtedy gdy pierwszy operand jest truthy
//rest1.owner = rest1.owner && '<Anonymous'; // udefined
//rest2.owner = rest2.owner && '<Anonymous'; // <Anonymous>

// powyższy zapis można zastąpić następującym:
rest1.owner &&= '<Anonymous';
rest2.owner &&= '<Anonymous';

console.log(rest1);
console.log(rest2);
*/
///////////////////////////////////////////////////////////
/*
//Nullish Coalescing operator ??
restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest); // wyświetla 10 chociaż prawidłową wartością jest 0

const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); // wyświetla 0 ponieważ 0 jest falsy, a nie nullish, podobnie jest z '';
// Nullish: null oraz undefined
// Short Circiting && and ||
*/
/*
// <---- OR ---->
// Wpisanie danych powoduje, że zwracane są dane
console.log(3 || 'Bartek'); //3
console.log('' || 'Bartek'); // 'Bartek'
console.log(true || 0); // true
console.log(undefined || null); // null <-- zwraca null, mimo, że null też jest falsy, bo zawsze jeśli pierwszy jest falsy to zwraca drugą stronę działania

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello' zwraca ponieważ jest to pierwsza truthy wartość w wyrażeniu

// <---- AND ---->
console.log(0 && 'Hello'); // 0
console.log(7 && 'Hello'); // 'Hello'

console.log('Hello' && 23 && null && 'Bartek'); // null ponieważ jest to pierwsza falsy wartość

// Przykład praktyczny
if (restaurant.orderPizza) {
  restaurant.orderPizza('pieczarki', 'salami'); // pieczarki ['salami']
}
//zamiast bloku if można użyć:
restaurant.orderPizza && restaurant.orderPizza('pieczarki', 'salami');
*/
// OR operator zwróci pierwsze truthy wyrażenie, lub ostatnie wyrażenie jeśli wszystkie są falsy
// AND operator zwórci pierwsze falsy wyrażenie, lub ostatnie wyrażenie jeśli wszystkie są truthy, możemy użyć do uruchomienia kodu w drugim operand, jesli pierwszy operand jest truthy

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
/*
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
*/
// Spread operator vs rest operator: spread tam gdzie użylibyśmy wartości oddzielonych przecinkami, podczas gdy rest operator tam, gdzie zastępujemy wypisywanie nazw zmiennych odddzielone przecinkami.
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
//Destructuring Arrays
const arr = [12, 22, 222];

const [x, y, z] = arr;

console.log(x, y, z); // 12 22 222

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
