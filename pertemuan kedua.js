// if (condition) {
//     // eksekusi
// } else {
//     // ini akan di eksekusi kalau kondisi tidak terpenuhi
// }

// const age = 21;

// if (age >= 17) {
//     console.lo('di atas 17')
// } else {
//     console.log('di bawah 17')
// }

// const nilai = 78;

// if (nilai >= 90) {
//     console.log('nilai kamu A')
// } else if ( nilai >= 80) {
//     console.log('nilai kamu B')
// } else if (nilai >=70) {
//     console.log('nilai kamu C')
// } else  {
//     console.log('nilai kamu D')
// }

// console.log('session 2')

// const nilai = 81;

// switch (true) {
//   case nilai >= 90:
//     console.log("nilai kamu A!");
//     break;
//   case nilai >= 80:
//     console.log("nilai kamu B!");
//     break;
// }

// const bulan = 5;

// switch (bulan) {
//   case 1:
//     console.log("Bulan Januari");
//     break;
//   case 2:
//     console.log("Bulan Februari");
//     break;
//   default:
//     console.log("Belum tau nih");
// }

// let nilai = 0;
// if (nilai) {
//   console.log("Ada nilainya");
// } else {
//   console.log("Tidak ada nilainya");
// }

// logical operators

// jika nilai diatas 80 dan kehadiran diatas 7 pertemuan
// akan dinyatakan lulus

//  &&
// ||
// !!

// examples

// const nilai = 80
// const kehadiran = 6

// if (nilai >= 80 && kehadiran >= 7) {
//     console.log('lulus')
// } else {
//     console.log('Tidak lulus')
// }

// // and akan bernilai true jika dua/lebih kondisi true
// // or akan bernilai true jika salah satu bernilai true
// // ! negasi

// if (kehadiran !== 10) {
//     console.log('yah kehadirannya tidak sempurna')
// } else {
//     console.log('kamu hadir di semua pertemuan')
// }

// const nilai = 1;
// if (!nilai) {
//   console.log("wah belum lulus");
// } else {
//   console.log("lulus");
// }

// const firstCar = "BMW";
// const secondCar = "Toyota";
// const totalCar = '2';
// if (firstCar === "BMW" && secondCar === "toyota" && totalCar == 2) {
//   console.log("akan di eksekusi kalau keduanya true");
// }

// ternary operator === sama dengan if else (cara singkat)

// const area = firstCar === "BMW" ? "Eropa" : "asia";
//             // condition        ? if_true : if_false;
// console.log("area:", area);
// bisa langsung di console.log (console.log('area :', 'firstCar === BMW ? 'Eropa' : 'Asia'))

// pseudocode in conditional statement
// menentukan sebuah value itu genap

// const numberToCheck = 10;
// let isEven;

// if (numberToCheck % 2 === 0) {
//   isEven = true;
// } else {
//   isEven = false;
// }

// console.log(`Is ${numberToCheck} even? ${isEven ? "Yes" : "No"}`);

// console.log(
//   `Is ${numberToCheck} even? ${numberToCheck % 2 === 0 ? "Yes" : "No"}`
// );

// // FOR LOOP

// // const input = "purwadhika";
// // const lengthOfInput = input.length;
// // for (let i = 0; i < 11; i++)
// // console.log(input[i]);

// // while true do something

// // let i = 0;
// // while ( i < lengthOfInput) {
// //     console.log(input[i])
// //     i++;
// // }

// // let i = 0;
// // do {
// //   console.log(input[i]);

// // } while (i !== 0);

// const input = 'purwadhika'
// const lengthOfInput = input.length

// for (let i =0; i < lengthOfInput; i++) {
//     console.log(input[i])
//     if (input[i] === 'd') {
//         console.log('huruf d ada di index ke', i)
//         // break untuk menghentikan
//         break;
//     }
// }

// const str = 'ccbbbdaaacc'
// for (let i =0; i < lengthOfInput; i++) {
//     if (str[i] === 'a') {
//         // continue untuk skip
//         continue;
//         // console.log('*')
//     } else {
//         console.log(str[i]);
//     }
// }

const input = "a";
const targetLength = 10;

let i = 0;
let result = "";

while (i < targetLength) {
  result += input;
  i++;
}

console.log("result:", result);



