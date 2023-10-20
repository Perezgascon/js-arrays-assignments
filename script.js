// Food exercise (exercise 1-10)

const food = []

food.push("pizza", "chessburger")

food.unshift("taco")

console.log(food[1]='favFood');

console.log(food.splice(2,0,"Tofu"));

food[1] = "sushi", "cupcake"

const yummy = food.slice(1,3)

let soyIdx = food.indexOf("Tofu")

hasSoup = food.includes("sushi")

console.log(hasSoup)

console.log(food)


// Exercise 11

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = []

nums.forEach(myFunction) 

function myFunction(item) {
  if (item % 2 != 0) {
    odds.push(item);
  }
}

console.log("Exercise 11 Result:\n", odds);

// Exercise 12

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let fizz = []

let buzz = []

let fizzbuzz = []

nums.forEach(myFunction) 

function myFunction(item) {
  if (item % 3 === 0 && item % 5 === 0) {
    fizzbuzz.push(item);
  } else if (item % 3 === 0) {
    fizz.push(item);
  } else if (item % 5 === 0) {
    buzz.push(item);
  }
}

console.log("Exercise 12 Results:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);

// Exercise 13

const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90],
  ];
  
  let numList = numArrays[3];
  
  console.log("Exercise 13 Result:\n", numList);

  // Exercise 14

  const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90],
  ];
  
  let numArraysNew = numArrays.flat()
  
  let num = numArraysNew[8]
  
  console.log("Exercise 14 Result:\n", num);

//   Exercise 15

  const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90],
  ];
  
  let total = 0; // Initialize the total variable to 0
  
  numArrays.forEach((array) => {
    array.forEach((num) => {
      total += num; // Add each number to the total
    });
  });
  
  console.log("Exercise 15 Result:", total);
  

