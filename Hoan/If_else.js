// if, else hay else if để mô tả các hành động xảy ra khác nhau phụ thuộc vào nhiều điều kiện khác nhau
// if để mô tả code sẽ được thực thi khi điều kiện được đáp ứng
// else để mô tả code sẽ được thực thi khi điều kiện bị sai
// else if để xác định thêm điều kiện mới, khi điều kiện đầu bị sai
// switch để xác định nhiều trường hợp code khác nhau có thể được thực thi

let age = 24


// if
console.log("\n[If]");
if (age => 18) {
    console.log("Là sinh viên hoặc người đi làm")
}


// if else
console.log("\n[If Else]");
if (age => 18) {
    if (age < 23) {
        console.log("Là sinh viên");
    } else {
        console.log("Là người đi làm");
    }

} else {
    console.log("Là học sinh")
}


// else if
console.log("\n[Else If]");
if (age < 18) {
    console.log("Là học sinh")
} else if (age < 23) {
    console.log("là sinh viên")
} else {
    console.log("Là người đi làm")
}


// switch case
console.log("\n[Switch case]");
let name = "Trân"
switch (name) {
    case "Hoàn":
        console.log("Nguyễn Khúc Khải Hoàn")
        break
    case "Trân":
        console.log("Võ Huyền Trân")
        break
    case "Quỳnh":
        console.log("Lữ Thị Thúy Quỳnh")
        break
    case "Huy":
        console.log("Võ Đoàn Gia Huy")
        break
}