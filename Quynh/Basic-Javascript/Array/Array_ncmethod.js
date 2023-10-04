//Sử dụng cho vd 2-6
const listuser=[
    {
        id:1,
        name: 'nguyen van a',
        age:10
    },
    {
        id:2,
        name:'nguyen van b',
        age: 12
    },
    {
        id: 3,
        name: "nguyen van c",
        age: 21
    }
]
//1. forEach()
/*Gọi callback function dùng hàm duyệt qua từng phần tử của mảng
//Không chạy trên các phần tử rỗng
syntax: array.forEach(function(currentValue, index, arr), thisValue)
Giải thích: currentValue Required: The value of the current element
index: Optional. The index of the current element.
arr	Optional. The array of the current element.
thisValue Optional. Default undefined. A value passed to the function as its this value.
*/
const numbers = [1, 2,,3, 4];
numbers.forEach(function(num,index,numbers){
    // if(index>0){
    //     console.log(num)
    // }
    num[index]=num*num;
})
console.log(numbers)
numbers.forEach(nhandoi)
function nhandoi(value,index,array) {
    array[index]=value*2
    console.log("Dung moi function",array[index])
}
console.log(numbers)
//2. every()
/*
Kiểm tra tất cả các phần tử theo điều kiện trong hàm trả về true false
Dùng callback function 
*/

// const kiemtra=listuser.every((user)=>{
//     return user.age>20;})
// if(kiemtra){
//     console.log("Tat ca user tren 20 tuoi")
// }
// else{
//     console.log("Khong phai toan bo user tren 20 tuoi")
// }


//3. some()
//Trả về true khi có ít nhất một element trong array thỏa
// const kiemtra_some=listuser.some((user)=>{
//     return user.age>20;})
//     if(kiemtra_some){
//         console.log("Co it nhat 1 user tren 20 tuoi")
//     }
//     else{
//         console.log("Khong co user tren 20 tuoi")
//     }
//4. find()
//Trả về phần tử đầu tiên thỏa
const usertrue=listuser.find((user)=>{
    return user.age<20;})
console.log("User nhỏ hơn 20 tuổi: "+usertrue.name);
//5. filter()
//Trả về tất cả phần tử thỏa
const listtrue=listuser.filter((user)=>{
    // let listofuser=
    return user.age<20;})
// 
// console.log(listtrue)
listtrue.forEach((user)=>{
    console.log(user.name)
})
//6. map()
//syntax: array.map(function(currentValue, index, arr), thisValue)
//Trả về một mảng mới đã được biến đổi quan callback
tennguoidung=listuser.map((user)=>{return `<h1>${user.name}<h1>`})
console.log(tennguoidung)
//7. reduce()
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//Trả về một giá trị kết quả của tổng 
const Array_num = [1,2,3,4,5];
const sum=Array_num.reduce((total,num)=>{
    return total+num;
},2)
console.log(sum)
//Thay đổi biến khởi tạo 
// const Array_num = [1,2,3,4,5];
// const sum=Array_num.reduce((total,num)=>{
//     return total+num;
// }, total)
// console.log(sum)