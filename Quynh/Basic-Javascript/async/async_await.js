/*
I/ Async & Sync 
Do JS là một ngôn đơn luồng (single thread) nên có tính chất Synchronous
 Synchronous (Đồng bộ) có nghĩa là chương trình chạy lần lượt dòng lệnh theo thứ tự
 Các dòng lệnh sau phải chờ dòng lệnh trước hoàn thành mới được thực thi
Bởi vì Synchronous nên các tác vụ khác bị chặn bởi các tác vụ mất thời gian trước đó
vd: Đọc file, tương tác với csdl, gọi API, nhập xuất 
Asynchronous (Bất đồng bộ) cho phép thực thi dòng lệnh tiếp theo thay vì bị chặn bởi dòng lệnh trước đó 
 Ex: Có 1 lệnh đọc file thay vì chờ lệnh này thực hiện xong mới thực hiện các lệnh còn lại ta có thể thực hiện song song 
 */

//1. seTimeout
//sync 
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
//Async
// console.log(1)
// console.log(2)
// setTimeout(()=>{
//     console.log("3: Call back function!")
// },2000)
// console.log(4)


//II. Các cách xử lý bất đồng bộ trong javascript 
//Định nghĩa một hàm đọc file sử dụng callback
import fs from 'fs'
//Sync
// function readFileBlocking(filePath) {
//     try {
//       const data = fs.readFileSync(filePath, 'utf8');
//       console.log(`Nội dung của tệp ${filePath} là:\n${data}`)
//       console.log('Kết thúc đọc file');
//     } catch (error) {
//       console.error('Lỗi khi đọc file:', error);
//     }
//   }
  
//   console.log('L1');
//   readFileBlocking(file.txt);
//   console.log('L2');
//---------------------------------------------------
//1. Callback
//Async with callback
// function readFilecallback(filepath) {
//   fs.readFile(filepath, 'utf8', (err, data) => {
//     try{
//         console.log(`Nội dung của tệp ${filepath} là:\n${data}`)
//         console.log('Kết thúc đọc file');
//     }
//     catch (err) {
//         console.error(`Lỗi: ${err}`);
//     }
    
//   });
// }
// console.log('L1');
// readFilecallback(file.txt);
// console.log('L2');
//Callback hell
// Đọc tệp 1
// fs.readFile('file1.txt', 'utf8', (err1, data1) => {
//     try{
//         console.log(`Nội dung của tệp là:\n${data1}`)
//     }
//     catch (err1) {
//         console.error(`Lỗi 1: ${err1}`);
//     }
//     // Đọc tệp 2
//     fs.readFile('file2.txt', 'utf8', (err2, data2) => {
//         try{
//             console.log(`Nội dung của tệp là:\n${data2}`)
//         }
//         catch (err2) {
//             console.error(`Lỗi 2: ${err2}`);
//         }

//     // Đọc tệp 3
//         fs.readFile('file3.txt', 'utf8', (err3, data3) => {
//             try{
//                 console.log(`Nội dung của tệp là:\n${data3}`)
//             }
//             catch (err3) {
//                 console.error(`Lỗi 3: ${err3}`);
//             }
//       // Thực hiện các hàm khác sau khi đã đọc và xử lý hết tất cả các tệp
//       console.log('Tất cả các tệp đã được xử lý.');
//     });
//   });
// });
//---------------------------------------------------
//2. Promise
/* ES6 
Promise là một object đại diện cho sự thành công hay thất bại trong bất đồng bộ và kết quả của nó. Khái niệm sinh ra để xử lí callback hell, được tạo ra từ phiên bản ES6 giúp viết code gọn hơn đọc dễ hiểu. 
Để tạo ra promise cần truyền vào constructor Promise 2 tham số Executor và function(resolve,reject) 
Trạng thái của promise 
Pendding : Trạng thái bắt đầu chưa thành công hay thất bại 
Fufilled: Thành công
Rejected: thất bại 
Ví dụ: Khi ta yêu cầu dữ liệu từ máy chủ bằng cách sử dụng một Promise , nó sẽ ở trạng thái chờ xử lý. 
Khi dữ liệu đến thành công, nó sẽ ở trạng thái hoàn thành. Nếu lỗi xảy ra, thì nó sẽ ở trạng thái từ chối.
//Create a promise
new Promise(executor)
const promise1 = new Promise(function (resolve, reject){
  if(..){
    reject()
  }
  resolve()
});
reject(reason)	Trả về đối tượng Promise Rejected
resolve(value)	Trả về đối tượng Promise Fufilled
Vậy promise sinh ra để xử lý kết quả của một hành động cụ thể, kết quả của mỗi hành động sẽ là thành công hoặc thất bại và Promise sẽ giúp 
chúng ta giải quyết câu hỏi “Nếu thành công thì làm gì? Nếu thất bại thì làm gì?”. Cả hai câu hỏi này ta gọi là một hành động gọi lại (callback action).
2.1 Promise chain
Promise chain là một cách tổ chức và xử lý các tác vụ bất đồng bộ liên tiếp trong JavaScript bằng cách sử dụng các hàm .then() để nối chúng lại với nhau. 
Mỗi .then() nhận giá trị hoặc kết quả từ Promise trước đó và trả về một Promise mới, cho phép thực hiện các tác vụ tiếp theo một cách tuần tự. Promise chain giúp mã trở nên dễ đọc hơn và tránh callback hell (lồng các callback sâu vào nhau).
promisename
.then()	
.catch()	
.finally()
*/
//2.2 Sử dụng Promise để đọc tệp xử lý bài toán callback hell ở trên 
// function readFileAsync(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         reject(err); // Từ chối Promise nếu có lỗi
        
//       }
//       resolve(data); // Hoàn thành Promise và trả về dữ liệu
//     });
//   }); 
// }
//Xử lý Resolve và Reject
//-----------------------------------
// console.log('Lệnh 1');
// //Xử lý lần lượt file 
// readFileAsync('file1.txt')
//   .then((data1) => {
//     console.log(`Dữ liệu từ tệp 1:\n${data1}`);
//     return readFileAsync('file2.txt');
//   })
//   .then((data2) => {
//     console.log(`Dữ liệu từ tệp 2:\n${data2}`);
//     return readFileAsync('file3.txt');
//   })
//   .then((data3) => {
//     console.log(`Dữ liệu từ tệp 3:\n${data3}`);
//   })
//   .catch((error)=>{
//   console.error(`Lỗi: ${error}`);
//   throw error;
//    })
//   .finally(()=>{
//     console.log('Tất cả các tệp đã được xử lý.');
//   })

// console.log('Lệnh 2');
//2.3 Sử dụng promise.all() để chạy hết 3 file
//Trả về 1 input promise duy nhất đại diện cho tất cả kết quả trả về của các promise
// const promises = [
//   readFileAsync('file1.txt'),
//   readFileAsync('file2.txt'),
//   readFileAsync('file3.txt'),
// ];
// console.log("Xử lí các promise: ")
// Promise.all(promises)
//   .then((results) => {
//     console.log('Dữ liệu từ tất cả các tệp:');
//     results.forEach((data) => {
//       console.log(`Dữ liệu từ tệp:\n${data}`);
//     });
//   })
//   .catch((error) => {
//     console.error(`Lỗi: ${error}`);
//   });
//---------------------------------------------------
//3. Async Await 
/*
Mặc dù Promise chain rất mạnh mẽ và hữu ích, tuy nhiên, một số lập trình viên thấy nó có thể trở nên khó đọc và quản lý khi có nhiều bước trong chuỗi. 
Vì vậy, ES7 đã giới thiệu async/await, một cú pháp mới giúp viết mã bất đồng bộ một cách dễ đọc hơn.
Với async/await, có thể viết mã bất đồng bộ giống như mã đồng bộ truyền thống. 
async đánh dấu một hàm là bất đồng bộ và await cho phép bạn đợi cho việc thực hiện Promise hoàn thành trước khi tiếp tục. Điều này giúp tránh việc phải sử dụng .then() và .catch() để quản lý chuỗi Promise dài.
--3.1 Syntax:
Từ “async” trước một function có nghĩa đơn giản: một hàm luôn trả về một promise. 
async function f() {
  return 1;
}
=
async function f() {
  return Promise.resolve(1);
}
// works only inside async functions
Từ khóa "await" khiến JavaScript phải đợi cho đến khi promise đó được thực hiện và trả về kết quả.
let value = await promise;
"await" theo nghĩa đen là tạm dừng việc thực thi hàm cho đến khi promise được thực hiện và sau đó tiếp tục lại với kết quả promise.
Trong lúc đó chương trình vẫn có thể thực thi các dòng lệnh khác
*/
//--3.2 Viết lại callback hell ở trên  

// async function readFileAsync1(filePath) {
//   try {
//     const data = fs.readFileSync(filePath, 'utf8');
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }
// async function main() {
//   try {
//     const data1 = await readFileAsync1('file1.txt');
//     console.log(`Dữ liệu từ tệp 1:\n${data1}`);

//     const data2 = await readFileAsync1('file2x.txt');
//     console.log(`Dữ liệu từ tệp 2:\n${data2}`);

//     const data3 = await readFileAsync1('file3.txt');
//     console.log(`Dữ liệu từ tệp 3:\n${data3}`);

//     console.log('Tất cả các tệp đã được xử lý.');
//   } catch (error) {  
//     throw error;
//   }
// }
// console.log('Lệnh 1');
// main();

// console.log('Lệnh 2');

