/*Constructor Trong js là một kỹ thuật giúp ta có thể thêm các phương thức và thuộc tính cho một function, 
lúc này cách hoạt động của function này giống như một đối tượng
*/

function Person(name, age, job, address) {  
    this.name = name;
    this.age = age;
    this.job = job;
    this.address = address;
    this.info = function() { 
        return "Info of " + this.name + "are"  + ' ' + this.age + ' ' + this.job + ' ' + this.address; };
    }




/*----------------------------------------------------------------*/

/*Class cũng được sử dụng để tạo ra các đối tượng, nhưng nó là một cách tiện lợi hơn để khai báo các đối tượng. 
Nó cho phép bạn khai báo các thuộc tính và phương thức của đối tượng trong một cú pháp gọn gàng hơn */

// class Person {
//     constructor(name, age, job, address) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//         this.address = address;
// }}

var person1 = new Person("John", 30, "Software Engineer", "New York"); //Thêm thuộc tính vào hàm tạo
var person2 = new Person("Fred", 27, "Electric Engineer", "Texas"); // Thêm thuộc tính vào hàm tạo

person1.note = "Nope";
person2.tag = "Noooo";

            
// console.log(person1);
console.log(person2);
console.log(person1.info());

/* 
Constructor:
Khi một constructor được gọi, nó sẽ tạo ra một đối tượng mới.
Đối tượng mới này sẽ có thuộc tính prototype.
Ý nghĩa của thuộc tính prototype là nó chứa tất cả các thuộc tính và phương thức của constructor.
Khi một thuộc tính hoặc phương thức được gán cho constructor, nó sẽ được gán cho thuộc tính prototype của constructor.
Khi một đối tượng mới được tạo từ constructor, nó sẽ thừa hưởng các thuộc tính và phương thức từ thuộc tính prototype của constructor.

Class:
Khi một class được khai báo, nó sẽ tạo ra một đối tượng mới được gọi là prototype.
Prototype này chứa tất cả các thuộc tính và phương thức của class.
Khi một đối tượng mới được tạo từ class, nó sẽ thừa hưởng các thuộc tính và phương thức từ prototype của class.
Kết luận:

Constructor và class trong JavaScript đều là các phương thức được sử dụng để khởi tạo đối tượng. 
Tuy nhiên, có một số điểm khác biệt lớn giữa hai khái niệm này. Constructor là một hàm thông thường, trong khi class là một từ khóa. 
Constructor không có khả năng kế thừa, trong khi class có thể kế thừa từ các class khác. 
Constructor được khai báo bằng cách sử dụng từ khóa function, trong khi class được khai báo bằng cách sử dụng từ khóa class. 
Constructor được khởi tạo bằng cách sử dụng từ khóa new, trong khi class cũng được khởi tạo bằng cách sử dụng từ khóa new. */