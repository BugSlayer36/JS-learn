for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // error, no such variable
trong đoạn code này biến i được khai báo bên trong vòng lập. Kiểu khai báo này hay còn được gọi là khai báo nội tuyến inline.
và dòng "alert(i);" sẽ throw ra lỗi vì biến i được khai báo nội tuyến bên trong vòng lập nên khi sử dụng nó bên ngoài sẽ không được định nghĩa.
--> để giải quyết vấn đề trên: 
+ Thay vì khởi tạo 1 biến mới thì ta sẽ sử dụng 1 biến đã có sẵn 
example :
    let i = 0;
    for(i = 0 ; i < n ; i++){
        alert(i);
    }
    alert(i);// lần này sẽ không còn báo lỗi nữa vì biến i đã được khai báo bên ngoài.

- vòng lặp vô hạn với for sẽ được khai báo như sau:
    for(;;){

    }
--> lưu ý rằng bên trong for phải có 2 dấu ; nếu không sẽ gây ra lỗi cú pháp.
--> cách để kết thúc vòng lặp vô hạn là dùng break.

- continue, thay vì dùng break để dừng hẳn vòng lặp lại thì ta có thể dùng continue để bỏ qua lần lặp hiện tại là bắt chương trình phải thực hiện vòng lặp tiếp theo.

- Label for break/continue:
    + Đôi khi chúng ta cần phải thoát khỏi nhiều vòng lặp lồng nhau cùng 1 lúc. Ví dụ khi đã tìm được toạ độ nhất định (i,j) thì cần dừng vòng lập để tránh mất thời gian. Thông thường chúng ta sẽ dùng break, nhưng nó sẽ chỉ kết thúc 1 vòng lặp, điều này là chưa đủ.
    + Label được dùng để giải quyết vấn đề trên. Label là một identifier có dấu 2 chấm trước vòng lập.
    --> example: labelName : for(;;){
        do something here;
    }

    + break <labelName> trong vòng lập dưới đây sẽ thoát ra ở lable
    outer : for(let i = 0 ; i < 999+1 i++ ){
        for (let j = i + 1 ; j < 999+1 ; j++){
            let input = prompt(`Please enter the value: (${i} , ${j})`,'(0,0)');
            //if an empty string or cancel, then break out of the both loops
            if(!input){
                break outer;
            }
            ...... 
            do something here
        }
    }
    alert('All done!');
    
    --> Trong đoạn mã trên , break outer nó sẽ tìm label có tên là outer và thoát khỏi vòng lặp đó.
    --> label không cho phép nhảy đến bất kỳ đâu, 1 break được chỉ thị phải nằm bên trong block code.