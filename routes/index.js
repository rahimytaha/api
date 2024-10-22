var express = require('express');
var router = express.Router();
const mysql = require('mysql');

// ساخت اتصال با MySQL
const connection = mysql.createConnection({
  host: '185.10.75.21', // آدرس هاست MySQL
  port: 3306, // آدرس پورت
  user: 'Tt911957349', // نام کاربری MySQL
  password: 'Tt911957349', // رمز عبور MySQL
  database: 'Chat' // نام دیتابیس
});

// // برقراری اتصال
// connection.connect((error) => {
//   if (error) {
//     console.error('خطا در برقراری اتصال به MySQL: ' + error.stack);
//     return;
//   }
//   console.log('اتصال به MySQL با موفقیت برقرار شد.');
// });

// // انجام کوئری
// connection.query('SELECT * FROM table_name', (error, results) => {
//   if (error) {
//     console.error('خطا در اجرای کوئری: ' + error.stack);
//     return;
//   }
//   console.log('نتایج کوئری:', results);
// });

// // قطع اتصال
// connection.end((error) =>{
//   if (error) {
//     console.error('خطا در قطع اتصال از MySQL: ' + error.stack);
//     return;
//   }
//   console.log('اتصال با MySQL قطع شد.');
// });

/* GET home page. */
router.get('/app', async function (req, res, next) {
  await connection.connect((error) => {
    if (error) {
      console.error('خطا در برقراری اتصال به MySQL: ' + error.stack);
      return;
    }
    console.log('اتصال به MySQL با موفقیت برقرار شد.');
  })

  res.render('index', { title: 'Express' });
});
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
