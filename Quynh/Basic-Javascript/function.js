/*
1.Function / hàm
- Một khối mã giúp thực hiện một việc cụ thể
2. Các loại function 
-Built in funtion(alert, settimeout, console.log..)
-Tự định nghĩa
3. Tính chất:
- Không thực thi khi định nghĩa
- Sẽ thực thi khi được gọi 
- Có nhận tham số
- Có thể trả về 1 giá trị 
- First-class Object: Cho phép hàm được sử dụng như biến 
(truyền hàm như một tham số, trả về một hàm khác, gán một hàm cho một biến )
4. Các cách định nghĩa hàm:
- Function Declaration:
    khi function được sử dụng trong global scope
    và muốn sử dụng hoisting
- Function Expression:
    Khi function được sử dụng ngay lập tức và 
5. Mục đích của function:
- Reuse lại code
- Code clean dễ đọc, dễ bảo trì 
*/
//I. Defining a function
//1. Function Declaration
// function Add1(a,b) {
//     return a+b;
//   }
// function Show(){
//     console.log("Ban da dang nhap")
// }
// Show()
// let a=Add1(2,3)
// console.log(a)
//2. Function expressions (Gán Hàm như một biến) (First-class Object)
// const x=function (a,b){
//     return a+b;
// }
// console.log(x(4,5))
//3. Arrow function 
//Arrow function được giới thiệu trong ES6 ->shorter
function Multiply_1(a,b){
 return a*b
}
// Change it to arrow function  
//let Multiply=(a,b)=>a*b

function sayHello() {
    return () => {
      console.log("Hello!");
    };
  }
  
//II. Callback 
//Truyền lại hàm như một đối số (First-class Object)
function calculate(functionCal,a,b){
    return functionCal(a,b);
}
function Subtract(a,b){
    return a-b;
}
const divide= function (a,b){
    return a/b;
}

// Function expressions khá tiện cho call back
function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
      result[i] = f(a[i]);
    }
    return result;
  }
  
  const cube = function (x) {
    return x * x * x;
  };

  const numbers = [0, 1, 2, 5, 10];
  console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
  

//IV.Hoisting
//Gọi hàm trước khi định nghĩa 
//1. Declaration function có thể khai báo ok
Show();
function Show(){
    console.log("Hoisting: Hello");
}
// 2. Function Expression lỗi 
// Show(1);
// let Show=function (a){
//     console.log(a);
// }
//V. Recursion (Đệ quy)
//Đệ quy là hàm gọi lại chính nó

// function Tinhgtdq(number){
//     if(number>0){
//         return number*Tinhgtdq(number-1)
//     }
//     return 1; 
// }
// console.log("Giai thua de quy: "+Tinhgtdq(3))
// function Tinhgiaithua(number){
//     var output=1;
//     for(var i=number;i>0;i--){
//         output=output*i;
//     }
//     return output;
// }
//-> Nên sử dụng vòng lặp nếu được 
//VI. Self-Invoking Functions
//Only using function expression
( function abc() {
  console.log("I will invoke myself")  // I will invoke myself
})();
//abc()

//VII. Lưu ý: Nếu hàm bị trùng tên
//1. Dùng function declaration
function Print(){
    console.log("Same name funtion: hello")
}
function Print(){
    console.log("Same name funtion: hi")
}
Print()
//2. Dùng function expression (luôn lỗi)
// let Calculate=function(a,b){
//     return a*b+b;
// }
// let function Calculate(a,b){
//   return a*b;    
//}
// console.log(Calculate(3,4))
// let Calculate=3;
// Tên hàm và tên biến không thể trùng tên nhau 