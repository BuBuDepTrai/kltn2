# Khoá luận tốt nghiệp - chuyên ngành Công nghệ phần mềm
- Đề tài: **TÌM HIỂU CÔNG NGHỆ MERN STACK XÂY DỰNG WEBSITE BÁN THIẾT BỊ DI ĐỘNG**
- Giáo viên hướng dẫn: TS. MAI ANH THƠ

 - Sinh viên:
 # -Nguyễn Trúc An	 -   20110087
 # -Nguyễn Hoàng Kha  -   20110500
 # -Nguyễn Tuấn Kiệt 	 -   20110510


## Hướng dẫn cài đặt

### Yêu cầu

- NodeJS, nên dùng phiên bản LTS (Long Term Support). Có thể tại đây https://nodejs.org/en/download/

### Backend

- Mở command line (terminal) tại thư mục `Backend`
- Dùng lệnh sau để cài đặt các package trong project
    #### `npm install`
- Chuẩn bị các biến môi trường như sau
	|Tên biến              |Bắt buộc |Mô tả                                                                                     |Mặc định        |
	|----------------------|---------|------------------------------------------------------------------------------------------|----------------|
	|PORT                  |❌       |Port để listen (lắng nghe) server api                                                     |3001            |
	|MONGO_URI             |✔       |Connection string để kết nối tới MongoDb                                                  |                |
	|JWT_SECRET            |✔       |Khóa bí mật (secret key), dùng trong Json Web token                                       |                |
	|JWT_EXPIRES_IN        |✔       |Thời gian có hiệu lực của jsonWebToken. VD: 15m, 1d, 30d ...                              |                |
	|JWT_REFRESH_EXPIRES_IN|✔       |Thời gian có hiệu lực của refreshToken. VD: 15d, 30d ...                                  |                |
	|VNPAY_SECRET          |✔       |VNpay Secret                                                                              |                |
	|VNPAY_TMN_CODE        |✔       |VNPay TMN Code                                                                            |                |
	|VNPAY_URL             |✔       |VNPay Url                                                                                 |                |

- Có thể tạo file `.env` trong thư mục backend với nội dung như sau:
```PORT = 5000
MONGODB_URL = "mongodb+srv://tuankiet:kiet0910@cluster0.p7twmyv.mongodb.net/kltn"
JWT_SECRET = "2FxXT1NTf2K1Mo4i6AOvtdI"
JWT_EXPIRES = 1d
ACTIVATION_SECRET = '4qF>,hhfEK+@5rRP'
SMPT_SERVICE = gmail
SMPT_HOST = smtp.gmail.com
SMPT_PORT = 465 
MP = "sljtkwgstttmtxgj"
MAIL_ID = "ntkiet11082002@gmail.com"
STRIPE_API_KEY = 'pk_test_51OwUzZRppEdMsaprwla7GoqbLqX2X9b2sdCNwh5dO3kRtDCDJSQxoMEu4MjcsuGKWxIXMXt2xRVnbcsKBr92uzgn00fCtaW8ss'
STRIPE_SECRET_KEY = 'sk_test_51OwUzZRppEdMsaprLv83kGblqXrK6rslqw4RqKFtAtESdAVfb2an2QDx7alyOGYWyu7o7CgFNTE0OXmMZ2gQh1NT00FcE9c8Et'
CLOUD_NAME = "do8jmw60o"
API_KEY = "855599345713314"
SECRET_KEY = "8cdJ7hgkf3sbWTfPX9sfMA8cKA8"
```
- Dùng lệnh sau để chạy server ở môi trường production.
    #### `npm start`

### Frontend

- Mở command line (terminal) tại thư mục `Frontend`
- Dùng lệnh sau để cài đặt các package trong project
    #### `npm ci`
- Tạo file `.env` trong thư mục `client` với các biến sau

	|Tên biến                    |Bắt buộc |Mô tả                                   |Mặc định                     |
	|----------------------------|---------|----------------------------------------|-----------------------------|
	|PORT                        |❌       |Port để listen (lắng nghe) client app   |3000                         |
	|REACT_APP_API_BASE_URL      |❌       |Base URL của api                        |http://localhost:5000/api/v1 |

- Cài đặt thư viện và chạy Frontend
    #### `npm install`
    #### `npm start`
  ### Admin

- Mở command line (terminal) tại thư mục `Frontend`
- Dùng lệnh sau để cài đặt các package trong project
    #### `npm ci`
- Tạo file `.env` trong thư mục `client` với các biến sau

	|Tên biến                    |Bắt buộc |Mô tả                                   |Mặc định                     |
	|----------------------------|---------|----------------------------------------|-----------------------------|
	|PORT                        |❌       |Port để listen (lắng nghe) client app   |3001                         |
	|REACT_APP_API_BASE_URL      |❌       |Base URL của api                        |http://localhost:5000/api/v1 |

- Cài đặt thư viện và chạy Frontend
    #### `npm install`
    #### `npm start`
