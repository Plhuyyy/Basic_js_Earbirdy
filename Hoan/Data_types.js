// Kiểu dữ liệu trong JS là kiểu dữ liệu động 
// => Không cần khai báo kiểu dữ liệu khi tạo biến 
// Kiểu dữ liệu của biến được xác định bởi giá trị được gán

let a; // a chưa khởi tạo kiểu dữ liệu
a = 20; // a là số
a = "Something" // a là chuỗi

// 1. Primitive types
// 1.1 String - chuỗi, văn bản
let b = "Team 1 Intern Cybozu"
var c = 'Team 1 Intern Cybozu'
console.log(`\ntype of b is ${typeof b}\ntype of c is ${typeof c}`)

// 1.2. Number - số nguyên hoặc số thực
let d = 0.5 // số thập phân
let e = 1 //  số thường
let f = -5 // số âm
let g = 123e7 // số có giá trị lớn
let h = 123e-7 // số thập phân có giá trị bé
console.log(`type of d is ${typeof d}\ntype of e is ${typeof e}\ntype of f is ${typeof f}\ntype of g is ${typeof g}\ntype of h is ${typeof h}`)

// 1.3. Bigint - số nguyên có giá trị lớn
// Ranh giới giữa (int) và (bigint) là Number.MAX_SAFE_INTEGER. 
// Number.MAX_SAFE_INTEGER = 9007199254740991
console.log("Number.MAX_SAFE_INTEGER = " + Number.MAX_SAFE_INTEGER)
let i = 9007199254740991++
console.log(`type of i is ${typeof i}`)
console.log('i là kiểu int?: ' + Boolean(i.isSafeInteger))

// 1.4. Boolean - True hoặc False
let j = Boolean(1>0)
let k = 1<0
console.log(`type of j is ${typeof j}\ntype of k is ${typeof k}`)

// 1.5. Undefined - Biến chưa khởi tạo giá trị
let m
let n = undefined
console.log(`type of m is ${typeof m}\ntype of n is ${typeof n}`)

// 1.6. Null - Kiểu rỗng
let o = null
// Một biến được khai báo mà không gán giá trị khởi tạo 
// => JavaScript sẽ đặt giá trị mặc định là undefined
// & Kiểu dữ liệu cũng là undefined => type of = undefined
// Null = không có gì, nhưng type of = object
console.log(`type of o is ${typeof o}`)

// 1.7. Symbol - Kiểu dữ liệu không đổi và là duy nhất
let p = Symbol("id");
console.log(`type of p is ${typeof p}`)


// Ép kiểu:
// 1. Converting Strings to Numbers 
console.log("\n1. Converting Strings to Numbers")
// valid
console.log('Number("3.14"): ' + Number("3.14"))
console.log('parseFloat("3.14"): ' + parseFloat("3.14"))
console.log('parseInt("3.14"): ' + parseInt("3.14"))
console.log('Number(Math.PI): ' + Number(Math.PI))
console.log('Number(" "):' + Number(" "))
console.log('Number(""): ' + Number(""))
// invalid
console.log('Number("20 21 22"): ' + Number("20 21 22"))
console.log('Number("Quỳnh"): ' + Number("Quỳnh"))


// 2. Converting Numbers to Strings
console.log("\n2. Converting Numbers to Strings")
console.log('x.toString(): ' + (100).toString())
console.log('(123).toString(): '+ (123).toString())
console.log('(100 + 23).toString(): ' + (100 + 23).toString())
// toExponential() được sử dụng để chuyển đổi số thành dạng mũ
console.log('(123.456789).toExponential(): ' + (123.456789).toExponential())
// toFixed() sẽ làm tròn số đến một số lượng chữ số thập phân cụ thể
console.log('(123.456789).toFixed(3): ' + (123.456789).toFixed(3))
// toPrecision() sẽ làm tròn số đến một số lượng chữ số tổng thể cụ thể
console.log('(123.456789).toPrecision(3): ' + (123.456789).toPrecision(3))


// 3. Converting Dates
console.log("\n3. Converting Dates")
time = new Date();
// Dates to Numbers
//JavaScript stores dates as number of milliseconds since January 01, 1970.
console.log("Number.time: " + Number(time))
console.log("time.getTime(): " + time.getTime())
// Dates to Strings
console.log("String.time: " + String(time))
console.log("time.toString: " + time.toString())


// 4. Converting Booleans
// Booleans to Numbers
console.log("\n4. Converting Booleans")
console.log("Boolean(1<0): " + Number(Boolean(1<0)))
console.log("Boolean(1>0): " + Number(Boolean(1>0)))
// Booleans to Strings
console.log("Boolean(false).toString(): " + Boolean(false).toString())
console.log("Boolean(true).toString(): " + Boolean(true).toString())
console.log("Boolean(1<0).toString(): " + Boolean(1<0).toString())
console.log("Boolean(1>0).toString(): " + Boolean(1>0).toString())
// Numbers to Booleans
console.log("Boolean(Number(0)): " + Boolean(Number(0)))
console.log("Boolean(Number(1)): " + Boolean(Number(1)))
// Strings to Booleans
console.log("Boolean(false): " + Boolean(false))
console.log("Boolean(true): " + Boolean(true))


