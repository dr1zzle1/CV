const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();

// Настройка для обработки данных из формы
const upload = multer({ dest: "uploads/" });

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: "dr1zzle112@yandex.ru",
    pass: "opqabgdvdbfjuihz",
  },
});

// Обработка POST запроса с данными формы
app.post("/submit-form", upload.array("myfile"), (req, res) => {
  // Получаем данные из формы
  const { name, phone, subject, message } = req.body;
  const files = req.files;

  let mailOptions = {
    from: "dr1zzle112@yandex.ru",
    to: "dr1zzle112@yandex.ru", // Ваша почта
    subject: subject,
    html: `
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>Сообщение:</strong> ${message}</p>
        `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Ошибка при отправке письма:", error);
      res.status(500).send("Произошла ошибка при отправке письма");
    } else {
      console.log("Письмо успешно отправлено:", info.response);
      res.send("Данные успешно отправлены на сервер и на вашу почту");
    }
  });
});

// Раздача статики
app.use(express.static(path.join(__dirname, "public")));

// Запуск сервера
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
