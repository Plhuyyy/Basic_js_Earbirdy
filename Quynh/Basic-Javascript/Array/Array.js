/*
Định nghĩa: 
 Mảng dùng để lưu trữ nhiều phần tử dưới cùng một tên biến và có thể truy cập từng phần tử qua index
 Mảng là một dạng đối tượng đặc biệt 
Có thể chứa nhiều kiểu dữ liệu khác nhau 
Array thường được khai báo bằng từ khóa constant để tránh thay đổi giá trị
   { var cars = ["Volvo", "BMW"];   // Allowed
    const cars = ["Volvo", "BMW"]; // Not allowed
    }
   { const cars = ["Volvo", "BMW"]; // Allowed
    const cars = ["Volvo", "BMW"]; // Not allowed  or const cars = ["BMW"];}
*/
//I. Creating a array
//1. Use New Array
const languages= new Array('a','b','c')
// console.log(languages)
//2. Can use  Array() instead
var Array_1=Array(1,2,"hello",null)
//3. Recommend [] to create An Array
var Array_2=[1,2,3, "Hello"]
//4. Initialize an Array and assign value for each element
//var myArray= new Array()
// var myArray=[]
// var myFunction=function(){
//     console.log("Hello")
// }
// myCars="399-"
// myArray[0] = Date.now;
// myArray[1] = myFunction;
// myArray[2] = myCars;
// console.log(myArray)
//5. Assign value for array element by for loop
// var array_for = [];
// for (let i = 0; i < 10; i++) {
//   array_for[i]=i+1;
// }
// console.log("Array foor loop: "+array_for)
//6. Compare new Array & []
// const A1=[40]
// const A2=new Array(40)
// const A2=new Array()
// A2[0]=40
// console.log("New array: "+A2);
// console.log("Array []: "+A1);
//Nên dùng [] vì nó nhanh hơn new Array() và nó rõ ràng hơn
//II. Các Method đơn giản 
// //1. Array length
// const username = ["Anna", "Max", "Long", "Marry"];
// console.log(username.length)
// //performance
// // let l = arr.length;
// // for (let i = 0; i < l; i++) {}
// //2. Array toString() (converts an array to a string of (comma separated) array values.)
// console.log(username.toString())
// //3. Array join() (converts an array to a string instead of "," can use other "" between each element)
// console.log(username.join(" | "))
// //4. pop (Remove last element in array, return the removed element)
// username.pop()
// console.log("Mang sau khi pop: "+username)
// //5. push () (Add a new element at the last of the array, return the length of array)
// let username_2=username.push("Harry")
// console.log("Lenght mang push: "+username_2+"\nMang sau khi dung push: "+username)
// //6. shift & unshift
// //The shift() method removes the first array element and "shifts" all other elements to a lower index.
// //shift return a removed element
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.shift();
// console.log("Fruit shift: "+fruits);
// //The unshift() method add a new array element at the beginning of array
// //unshift return a new lenght of array
// let fruit1 = fruits.unshift("");
// console.log("Fruit unshift Mango: "+fruits);
// //7. splice
// //Change the origin array
// //Add, delete, replace element in array
// // Sử dụng hàm `splice()`
// //splice(start, deleteCount, item1, item2, /* …, */ itemN)
// const array1=[1,2,3,4,5]
// array1.splice(1, 1); // Xóa phần tử thứ hai
// array1.splice(0, 0, "Hello"); // Thêm phần tử mới vào đầu mảng
// array1.splice(3, 2, 6, 7); // Thay thế hai phần tử mới vào cuối mảng
// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(-2, 1);//Đi từ vị trí kết thúc
// //8. slice
// //Return a new array, extract the element of array
// const array = [1, 2, 3, 4, 5];
// // Sử dụng hàm `slice()`
// slice()
// slice(start)
// slice(start, end)
// const firstTwoNumbers = array.slice(0, 2); // [1, 2]
// const lastTwoNumbers = array.slice(3); // [3, 4, 5]
// const allNumbers = array.slice(); // [1,2,3, 4, 5]
//9. concat
const l1 = ['a', 'b', 'c'];
const l2 = ['d', 'e', 'f'];
const l4=['m','n','l']
const l3 = l1.concat(l2,l4);
console.log(l3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
//10. sort & reverse
//reverse đảo ngược vị trí của mảng 
const array1=["one", "two","three"]
const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]
const array_sort = [1, 30, 4, 21, 100000];
//chuyển đổi các số thành chuỗi rồi so sánh ra mã unicode 
array_sort.sort();
console.log(array_sort);
// Expected output: Array [1, 100000, 21, 30, 4]
array_sort.sort((a, b) => a - b);
console.log(array_sort);
// Expected output: Array [1, 4, 21, 30, 100000]
//11. includes()
//Kiểm tra xem có giá trị nào trong mảng giống với giá trị đưa vô (return true or false)
//syntax: includes(searchElement, fromIndex)
const array_in = [1, 2, 3];
console.log(array_in.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true
console.log(pets.includes('at'));
// Expected output: false