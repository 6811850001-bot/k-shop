# K-SHOP - วิธีการติดตั้งระบบ

## ความต้องการของระบบ
- Node.js (v16 ขึ้นไป)
- MongoDB
- npm

## ขั้นตอนการติดตั้ง

### 1. Clone โปรเจค
git clone https://github.com/6811850001-bot/k-shop.git 
cd k-shop

### 2. ติดตั้ง Dependencies
npm install

### 3. เชื่อมต่อ MongoDB
ตรวจสอบให้แน่ใจว่าเปิด MongoDB ไว้แล้ว

- เปิด MongoDB Compass
- สร้าง Collection ชื่อ **myShop**
- สร้าง Database ชื่อ **ITMISHOP**
- ระบบจะสร้าง Collection ให้อัตโนมัติเมื่อมีการใช้งาน ได้แก่
  - members
  - products
  - orders
  - employees

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