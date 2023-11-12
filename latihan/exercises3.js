// Write a code to display the
// multiplication table of a given
// integer.
// ○ Example : Number → 9
// ○ Output :
// ■ 9 x 1
// ■ 9 x 2
// ■ ...
// ■ 9 x 10

const multiplicationInput = 9;
const multiplicationLimit = 10;

for (let i = 1; i <= multiplicationLimit; i++) {
    console.log(`${multiplicationInput} x ${i} = ${multiplicationInput * i}`);
}

