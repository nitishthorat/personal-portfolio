const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "./.env" });

const app = express();

// Define CORS options
const corsOptions = {
  origin: process.env.FRONTEND_URL, // Your front-end domain from .env
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable cookies if needed
  optionsSuccessStatus: 204,
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Use express.json() middleware to parse JSON request bodies
app.use(express.json());

// Handle preflight requests
app.options("*", cors(corsOptions));

// Apply the router to your app
app.use(router);

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

// Contact form route
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

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

// Test route
router.get("/", (req, res) => {
  res.send("App running");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
