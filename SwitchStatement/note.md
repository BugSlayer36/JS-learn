- Switch là 1 dạng copy có thể thay thế nhiều if.
- 1 Switch có nhiều case khác nhau và 1 giá trị mặc định tuỳ chọn

Cú pháp: 
switch(x){
    case 'value1':
        ..do st here..;
        [break];
    case 'value2':
        ..do st here..;
        [break];
    case 'value3':
        ..do st here..;
        [break];
    default:
        .. do st here..;
        [break];
}
--> Explain : Giá trị của x sẽ được kiểm tra xem có đúng chính xác với các giá trị đầu tiên của case không(case1), sau đó tới case 2 và cứ thế tiếp tục.
--> Nếu giá trị của x bằng giá trị của case thì sẽ thực thi code trong case đó cho đến break
--> Nếu từ đầu đến cuối giá trị x không bằng với giá trị case nào thì sẽ nhảy vào default thực thi.

* Nếu không có break thì sẽ xảy ra: Nếu không có break thì sau khi thực hiện case ở trên xong sẽ không dừng lại mà tiếp tục nhảy xuống thực hiện các case ở dưới mà không cần kiểm tra gì.

- Chúng ta có thể nhóm các case lại với nhau.
--> Example: Nếu ta muốn chạy cùng 1 đoạn mã cho case 3 và case 5 thì chỉ cần thực thi như dưới đây:
    
    let a = 3;

    switch (a) {
    case 4:
        alert('Right!');
        break;

    case 3: // (*) grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
    }
