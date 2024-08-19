// Bài 1 : Tạo 1 arrow function để tính bình phương của 1 số .
const square = a => a*a ;
console.log(square(4));


// Bài 2 : Viết một arrow function để kiểm tra xem một chuỗi có chứa một từ khóa cụ thể hay không . 
const checkWord = (number) => {
   let a = "world";
   if (number.indexOf(a) !== -1) {
    console.log("Hello world", a);
   } }
checkWord("Hello world!");


// Bài 3 : Viết arrow function thêm một tiền tố vào mỗi phần tử của một mảng chuỗi . 
const add = (number) => {
    for(let i = 0; i<number.length; i++) {
        number[i] = "number: " + number[i];
    }
    console.log(number);
}
add(["one", "two", "three"]);


// Bài 4 : Sử dụng Arrow function để nhân đôi giá trị của các phần tử trong một mảng số .
const double = (array) => {
    for(let i = 0; i<array.length; i++) {
        array[i] *= 2; 
    }
    console.log(array);
}
double([1, 2, 3, 4]);


// Bài 5 : Sử dụng Arrow function để lấy ra các phần tử là số lẻ từ một mảng . 

const odd = (...number) => {
    let number1
    for(let i = 0; i<number.length; i++) {
        if(number[i] % 2 === 1) {
           number1 = number[i];
        }
        console.log(number1);
    }
}
odd([1, 2, 3, 4, 5, 6]);
