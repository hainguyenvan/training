# JavaScript by Examples
| Tài liệu training js

## 1. Cài đặt, cấu hình môi trường

## 2. Lessons

### 2.1. JavaScript front end vs JavaScript back end
* Cùng sử dụng chung ngôn ngữ JavaScript và trình dịch Google V8
* Node.js có bổ xung thêm một số [module](https://nodejs.org/dist/latest-v8.x/docs/api/)
* JavaScript front end tương tác với DOM, Window trong trình duyệt, không truy cập được hệ thống file trên máy tính
* Video sử dụng Chrome Dev Tools để run và debug **Javascript Front-end**
* Sử dụng NodeJS để run Javascript Back-end

### 2.2. Kiểu dữ liệu cơ bản - Basic data type
- Khai báo var, let và const. Sự khác biệt của từng khai báo. Kiểm tra xem trình duyệt Chrome, Firefox, Safari đã hỗ trợ let và const chưa
- Number - Số
- Boolean
- String - Chuỗi
- Scoping và Hoisting
- So sánh '==' và '==='
- Loose typing: phép cộng giữa chuỗi và số

### 2.3. Cấu trúc lập trình - Control structure:
- Các toán tử đặc biệt của JavaScript
- If then else
- For, for in, for of, forEach
- While - do while
- Switch - case
- Break - Continue

* Exampels: 
  * Vẽ bảng cửu chương, tính giai thừa, vẽ hình thoi, tính chỉ số BMI, cho mảng số tự nhiên, tìm ra mảng chứa phần tử duy nhất, tính lãi suất sau N tháng. 
  * Tham khảo quyển sách "Introduction to Java" hoặc CodeFight

### 2.4. Hàm căn bản -  Functions
- Khai báo hàm
- Truyền tham số cho hàm: byValue vs byReference
- Hàm là một đối tượng. Hàm trả về hàm
- Dùng prototype để bổ xung phương thức

### 2.5. Mảng - Array
- Mảng 1 chiều, chiều dài mảng, lấy phần tử thứ i trong mảng
- Duyệt mảng for và forEach
- Thêm, xoá phần tử mảng: push, pop
- Tìm kiếm phần tử trong mảng
- Sắp xếp mảng theo tiêu chí
- Array.prototype để bổ xung phương thức cho mảng. [Tham khảo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)
- Mảng 2 chiều

* Examples:
  - Nghịch đảo mảng
  - Tìm số phần tử chung có trong 2 mảng.

### 2.6. Chuỗi - String
* [Tham khảo](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String)
- Khai báo string sử dụng single quote, double quote, string trên nhiều dòng.
- Các escape character
- Template string

Examples: 
  * Đếm số từ khác biệt trong một chuỗi
  * Convert văn bản định dạng Markdown tối giản có 4 loại thẻ căn bản sang HTML

### 2.7. Đối tượng - Object
* [Tham khảo](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
* Đối tượng và thuộc tính
* JSON - Javascript Object Notation
* Tạo đối tượng, hàm tạo đối tượng, [Tham khảo](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
* Class trong ES6

### 2.8. Hướng đối tượng
- Encapsulation: Tính đóng gói, bảo mật. Javascript không có keyword public, private, protected, friend như C++
- Inheritance: Tính kế thừa. Có 2 loại single inheritance (kế thừa từ 1 base class) và multiple inheritance (kế thừa từ nhiều base class)
- Polymophism: Tính đa hình. [Xem thêm](https://www.youtube.com/watch?v=zdovG9cuEBA)
- Abstraction: Tính trừu tượng: abstract class hay interface thì JavaScript chưa có
[Object-Oriented JavaScript — A Deep Dive into ES6 Classes](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)

- Hãy so sánh kế thừa theo kiểu prototype với kế thừa từ Class trong ES6
- Tìm hiểu thêm về đa kế thừa [mixin](https://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/)
- Binding function

### 2.9. Quy ước lập trình - Coding Convention:
Tham khảo quy ước lập trình JavaScript của [AirBNB JavaScript coding convention](https://github.com/airbnb/javascript)
Phần này chỉ cần dịch ra tiếng Việt là được push lên Github.

### 2.10. Promise, Callback
- Vấn đề đặt ra khi chạy một hàm tốn thời gian gây hiệu ứng chờ đợi
- Timing function: setTimeout, setTimeInterval
- Hàm callback - Asynchronous: ví dụ cho front end và ví dụ cho back end
- Event Loop - Queueing Task - Single Thread

### 2.11. Tính năng mới trong ES6
- Async và Await:
- Yield / Next:
- Một số cấu trúc dữ liệu mới WeakMap, WeakSet

## Refs
* https://www.tutorialspoint.com/javascript/javascript_objects.htm
* https://www.w3schools.com/js/