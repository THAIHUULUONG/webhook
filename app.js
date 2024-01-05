const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3000;
const clientSecret = 'd6e83ba9d9ce9e57a83d3177d153e818'; // Thay YOUR_CLIENT_SECRET bằng client_secret của bạn

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const receivedHash = req.headers['x-hanet-hash']; // Lấy giá trị hash từ header
  const requestBody = JSON.stringify(req.body);

  // Tính toán hash từ dữ liệu và client secret
  const computedHash = crypto
    .createHash('md5')
    .update(clientSecret + requestBody)
    .digest('hex');

  // So sánh hash gửi từ HANET và hash tính toán
  if (receivedHash === computedHash) {
    // Xác thực thành công, xử lý dữ liệu ở đây
    console.log('Dữ liệu đã được xác thực:');
    console.log(req.body);

    // Phản hồi 200 OK cho HANET
    res.status(200).end();
  } else {
    // Xác thực không thành công, từ chối yêu cầu
    console.error('Xác thực không thành công');
    res.status(403).end();
  }
});

app.listen(port, () => {
  console.log(`Máy chủ đang lắng nghe trên cổng ${port}`);
});
