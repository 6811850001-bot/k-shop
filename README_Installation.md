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

### 3. ตั้งค่า Environment Variables
สร้างไฟล์ .env แล้วใส่ข้อมูลดังนี้
MONGODB_URI=mongodb://localhost:27017/kshop
SESSION_SECRET=your_secret_key
PORT=3000

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