import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";

dotenv.config();

const app = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

app.use(express.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  console.log("Ruta /send-email fue llamada");
  const { name, email, text } = req.body;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "eliasjiminian@gmail.com",
    text: `De: ${name} (${email})\n\nMensaje: \n\n${text}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Correo enviado correctamente." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
