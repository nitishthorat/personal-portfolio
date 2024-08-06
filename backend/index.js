const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "../.env" });

const app = express();
router.use(cors());
app.use("/", router);
const port = process.env.PORT || 8000;
const emailUser = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASSWORD;
const service = process.env.EMAIL_SERVICE;
const host = process.env.EMAIL_HOST;

const contactEmail = nodemailer.createTransport({
  service: service,
  host: host,
  port: 587,
  secure: false,
  auth: {
    user: emailUser,
    pass: password,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/api/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: emailUser,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  res.setHeader("Access-Control-Allow-Origin", "*");
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

router.get("/", (req, res) => {
  res.send("App running");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
