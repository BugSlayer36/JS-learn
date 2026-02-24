JS có Dynamically typed meaning các biến sẽ không bị ràng buộc bởi các kiểu dữ liệu nào 

Javascript có 8 kiểu dữ liệu cơ bản:
1. Number:

- Kiểu dữ liệu này thể hiện cả số nguyên và số thập phân
- Ngoài các con số thông thường ra thì còn có: Infinity, -Infinity, NaN cũng thuộc kiểu Number
- Infinity là một giá trị đặt biệt lớn hơn bất kỳ các số nào , ta có thể thu được giá trị này khi chia 1 số cho 0
    --> example :let Result =  1/0  =  Infinity 
- Ngoài cách chia cho 0 thì ta cũng có thể dùng trực tiếp Infinity
- NaN là một giá trị biểu thị cho kết quả lỗi của một phép tính hoặc một giá trị không xác định

2. BigInt:

- Trong JS number không thể lưu các con số có giá trị lớn hơn hoặc bằng (2^53-1) hay nhỏ hơn hoặc bằng -(2^53-1). Ngoài phạm vi này sẽ dẫn đến sai sót nào đó, chỉ nên dùng để lưu trữ các chữ số vừa với bộ nhớ 64bit
- Kiểu dữ liệu BitInt được thêm vào để biểu diễn 1 dãy số nguyên tuỳ ý nào đó , ta có thể khai báo bằng cách thêm 'n' vào cuối dãy số nguyên
    -->example: const pi = 3.143712837182738172371n; //the "n" at the end means it's a BigInt
- Kiểu dữ liệu này hiếm gặp và chỉ phổ biến trong 1 số trường hợp nhất định

3. String:

- Trong Javascript các kỹ tự được gọi là chuỗi khi chúng nằm trong dấu ngoặc kép "helloworld";
- có 3 loại dấu ngoặc kép:
    + Dấu ngoặc kép : "hello"
    + Dấu ngoặc đơn : 'hello'
    + Dấu ngoặc kép ngược: `hello`
    --> về dấu ngoặc kép và ngoặc đơn thì chúng đều là dấu ngoặc đơn giản không có sự khác biệt gì giữa chúng trong JS.
    --> về dấu ngoặc kép ngược, đây là dấu ngoặc kép có chức năng mở rộng. Chúng ta có thể nhúng các biến và biểu thức vào chuỗi bằng cách bao bọc chúng trong ${}. Example let myAge = `My age is ${currentYear - 2005}`;
- 1 chuỗi có thể không chứa ký tự hoặc chứa nhiều ký tự

4. Logic(boolean):

- Kiểu dữ liệu boolean chỉ có 2 giá trị là true và false

5. Null value:

- giá trị Null không thuộc bất kỳ loại kiểu dữ liệu nào ở trên
- Nó chỉ đơn giản là đại diện cho: "Không có gì", "Rỗng", "Giá trị không xác định"

6.Undefined value:

- Giá trị Undefined cũng giống như Null nó là một loại dữ liệu riêng biệt.
- Nếu một biến được khai báo mà chưa được gán giá trị nào thì giá trị của nó là Undefined

7.Objects and Symbols:

- Objects là một loại dữ liệu đặc biệt, tất cả các kiểu dữ liệu khác được gọi là "primitive" (kiểu dữ liệu nguyên thuỷ) vì giá trị của chúng chỉ có thể chứa một thứ duy nhất. Còn với Object, kiểu này được dùng để lưu trữ một tập hợp dữ liệu.

- Symbols được dùng để tạo ra các mã định danh duy nhất

