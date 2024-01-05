const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 3000;

const firebaseConfig = {
    apiKey: "AIzaSyDiZExKQZtgJdRo2wmIhWbBancM4JY7-VU",
    authDomain: "webhook-24612.firebaseapp.com",
    databaseURL: "https://webhook-24612-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webhook-24612",
    storageBucket: "webhook-24612.appspot.com",
    messagingSenderId: "400672956398",
    appId: "1:400672956398:web:13c88955ac2d2c2eaaf8ff",
    measurementId: "G-1KMFW1RZYZ"
  };

// Khởi tạo Firebase Admin SDK với tệp cấu hình của bạn
const serviceAccount = require(firebaseConfig);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'webhook-24612', // Thay 'your-project-id' bằng ID dự án Firebase của bạn
});

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  // Xử lý dữ liệu từ HANET
  const checkinData = req.body;

  // Lưu trữ dữ liệu vào Firebase Realtime Database
  const db = admin.database();
  const ref = db.ref('checkinData'); // Thay 'checkinData' bằng tên node bạn muốn lưu trữ

  ref.push(checkinData, (error) => {
    if (error) {
      console.error('Lỗi khi lưu trữ dữ liệu:', error);
      res.status(500).json({ error: 'Lỗi khi lưu trữ dữ liệu' });
    } else {
      console.log('Dữ liệu đã được lưu trữ thành công');
      res.status(200).end();
    }
  });
});

app.listen(port, () => {
  console.log(`Máy chủ đang lắng nghe trên cổng ${port}`);
});
