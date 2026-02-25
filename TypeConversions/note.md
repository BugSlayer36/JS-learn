1. String conversion: 
- Chuyển đổi chuỗi khi ta cần chuyển một giá trị nào đó về dạng chuỗi

let value = true;
alert(typeof value); // boolean
value = String(value);
alert(typeof value);// string

2. Number conversion:
- Chuyển đổi số thường được diễn ra một cách tự động.
    -->example: alert( "6" / "2" ); // 3, strings are converted to numbers
- Chúng ta có thể dùng Number() function để chuyển đổi biến thành 1 con số rõ ràng --> nếu biến chứa chuỗi ký tự không hợp lệ thì Number() sẽ trả về giá trị NaN

3. Boolean conversion:
- Quy tắc chuyển đổi:
    + Các giá trị theo trực giác là rỗng "", như 0 , empty string, null , undefined,NaN,.... sẽ trở thành false.
    + Và các giá trị khác sẽ trở thành true.