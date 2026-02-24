1. alert:
- Đây là hàm hiển thị thông báo và chờ người dùng nhấn "OK".
- Khung cửa sổ hiện thị thông báo được gọi là modal window. Model ở đây có nghĩa là người dùng không thể tương tác với trang , nhấn các button khác cho đến khi họ nhấn "OK"

2.prompt:
- Hàm này hiển thị một cửa sổ bật lên với một đoạn văn bản và một field nhập liệu dành cho người dùng và các nút OK/cancel
- prompt function nhập 2 đối số là title,[default].result = prompt(title, [default]):
    + title văn bản để hiển thị trong khung
    +[default] tuỳ chọn, thường là số mặc định cho khung nhập
- Hàm này sẽ trả về giá trị trong ô nhập hoặc Null nếu thao tác nhập liệu bị huỷ

3.confirm:
- Hàm này hiển thị một cửa sổ model với một question và 2 lựa chọn Ok/Cancel
- Hàm sẽ trả về true nếu user nhấn ok , và false nếu người dùng nhấn cancel

--> Tất cả các phương pháp trên đều là phương pháp Model: chúng sẽ tạm dừng thực thi code và không cho phép người dùng tương tác với phần còn lại của trang cho đến khi cửa sổ model này được đóng lại.