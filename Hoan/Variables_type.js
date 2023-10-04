
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// Scope của là nơi các biến var, let, const này có sẵn để sử dụng (global, function/local)
var greeter = "bonjour"; 
function newFunction() {
  var hello = "hello";
}
// greeter là biến global scope vì nằm ngoài function
// hello là biến function scope vì nằm trong function
// => không thể gọi hello ở bên ngoài function
// console.log(hello) // ReferenceError: hello is not defined

// Biến trong cùng scope có thể khai báo lại và update
var greeter = "xin chào"
var greeter = "em chào đại ca"
greeter = "em chào đại ca ạ"
console.log(greeter)

// hoisting: khai báo biến/function thì chùng sẽ được đẩy lên đầu scope trước khi code được chạy
// hoisting di chuyển khai báo lên đầu scope, nhưng giá trị gán cho biến không được hoisting => undefined
// invalid
console.log (greeter);
var greeter = "bonjour"

// valid
var greeter;
console.log(greeter); // greeter is undefined
greeter = "bonjour"

// Vấn đề của var là scope quá rộng, dẫn đến nhiều trường hợp bị ghi đè biến
var greeter = "bonjour";
var times = 4;
if (times > 3) {
  var greeter = "hello"; 
}
console.log(greeter) // "say Hello instead"
// => Let và Const được khai sinh
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// Scope của let là block scope
// Block của let là một đoạn mã được giới hạn bởi {}
let greeter = "bonjour";
let times = 4;
if (times > 3) {
  let greeter = "hello"; 
  console.log(greeter) 
}
console.log(greeter) 

// Let có thể update nhưng không được khai báo lại
// Valid
let greeting = "bonjour";
greeting = "hello";
// Invalid
let greeting = "bonjour";
let greeting = "hello"; 

// hoisting: khai báo biến/function thì chùng sẽ được đẩy lên đầu scope trước khi code được chạy
// hoisting di chuyển khai báo lên đầu scope, nhưng giá trị gán cho biến không được hoisting => Reference Error
console.log (greeter);
let greeter = "bonjour"

// valid
let greeter;
console.log(greeter); // greeter is undefined
greeter = "bonjour"
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// Các biến được khai báo bằng const sẽ có giá trị không đổi
// Cách khai báo này có một số điểm tương đồng với let

// const không thể update hoặc khai báo lại => const là duy nhất, var và let không là duy nhất
const greeting = "bonjour";
greeting = "hello";
const greeting = "xin chào";
const greeting = "em chào đại ca";

// const sẽ không thể update, nhưng các thuộc tính của nó thì lại có thể update
const greeting = {
  message: "bonjour",
  times: 4
}

greeting.message = "bonjour";
console.log(greeting)

// Hoisting của const giống như let



