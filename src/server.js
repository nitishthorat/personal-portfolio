const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
// const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
const port = process.env.PORT || 8000;
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);
const jsonFilePath = path.join(__dirname, "data.json");
app.use(bodyParser.json());

// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "nitishthorat112gmail.com",
//     pass: "vrte tqcv oxtn npjp",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/send", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: "nitishthorat112gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });

app.post("/contact", (req, res) => {
  const newData = req.body;

  // Read the existing data from the JSON file
  fs.readFile(jsonFilePath, "utf8", (err, data) => {
    console.log(data);
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Error reading file");
    }

    let jsonData = null;
    if (data) {
      jsonData = JSON.parse(data);
    }

    // Add the new data to the JSON array
    jsonData.emails.push(newData);

    // Write the updated data back to the JSON file
    fs.writeFile(
      jsonFilePath,
      JSON.stringify(jsonData, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("Error writing file:", err);
          return res.status(500).send("Error writing file");
        }

        res.status(200).send("Data added successfully");
      }
    );
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
