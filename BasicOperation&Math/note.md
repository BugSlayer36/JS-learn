Terms : unary(đơn phân) , binary(nhị phân) , operand(toán hạng)

1. Luỹ thừa: 

a ** b = a^b

2. Nối chuỗi bằng dấu "+":
 - Ta có thể sử dụng toán tử "+" để nối 2 biến có giá trị string lại với nhau
 *note: Nếu trong 1 biểu thức có 1 toán hạng là chuỗi thì kết quả đều là chuỗi
 - nếu 1 phép tính có nhiều toán hạng thì sẽ thực hiện từ trái qua phải. 
 --> ex: 3 + 3 + '1' = '61' chứ không phải là '331'

3. Numeric conversion , unary+:
- Dấu + tồn tại ở 2 dạng là nhị phân và đơn phân. 
- Dấu + ở dạng đơn phân áp dụng cho một giá trị duy nhất, không làm thay đổi giá trị của nó. Nếu giá trị là kiểu khác không phải number thì sẽ được chuyển thành number
--> example: let apple = "123"
             let orange = "321"
             alert(apple + orange) // the result is "123321"
    nhưng nếu thêm toán tử + trước giá trị thì chuỗi sẽ thành số và sẽ cho ra kết quả khác
             alert(+apple + +orange) // the result is 444

4. Increment & Decrement:
- Phép ++ sẽ làm tăng giá trị của biến lên 1 đơn vị
- Phép -- sẽ làm giảm giá trị của biến xuống 1 đơn vị

prefix tiền tố ++a;
postfix hậu tố a++;