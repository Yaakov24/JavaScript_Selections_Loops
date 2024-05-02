console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 101; i++) {
  if (i % 2 != 0) {
    console.log(`${i}`);
  }
}
// Exercise 2 Section

console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FizzBuzz${i}`);
  } else if (i % 5 == 0) {
    console.log(`Buzz ${i}`);
  }
  if (i % 3 == 0) {
    console.log(`Fizz ${i}`);
  }
}
console.log("EXERCISE 3:\n==========\n");
let i = 0;
while (i < 100) {
  i++;
}
console.log(`${i}`);
do {
  i++;
} while (i < 100);
console.log(`${i}`);

console.log("EXERCISE 4:\n==========\n");

let value = Math.round(Math.random() * 500);

let n1 = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 0; i <= n1; i++) {
  if (i == value) {
    console.log(`Found value! ${value}`);
    break;
  }
  if (i == n1) {
    console.log(`Did not find ${value} within 1 - ${n1}`);
  }
}
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (i = start; i <= n; i++) {
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log(`FizzBuzz${i}`);
  } else if (i % buzzDivisor == 0) {
    console.log(`Buzz ${i}`);
  }
  if (i % fizzDivisor == 0) {
    console.log(`Fizz ${i}`);
  }
}
