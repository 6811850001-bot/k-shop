# K-SHOP - วิธีการติดตั้งระบบ

## ความต้องการของระบบ
- Node.js (v16 ขึ้นไป)
- MongoDB
- npm

## ขั้นตอนการติดตั้ง

### 1. Clone โปรเจค
git clone https://github.com/ชื่อuser/k-shop.git
cd k-shop

### 2. ติดตั้ง Dependencies
npm install

### 3. เชื่อมต่อ MongoDB
ตรวจสอบให้แน่ใจว่าเปิด MongoDB ไว้แล้ว
จากนั้นเปิดไฟล์ที่มีการเชื่อมต่อ MongoDB แล้วตรวจสอบชื่อ database ให้ถูกต้อง

### 4. รันโปรเจค
node app.js

### 5. เปิดเบราว์เซอร์
http://localhost:8080

## เทคโนโลยีที่ใช้
- Node.js + Express.js
- MongoDB + Mongoose
- EJS Template Engine
- Bootstrap 4
- bcrypt
- express-session