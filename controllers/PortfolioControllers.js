const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

// transport;
const transporter = nodemailer.createTransport(
  sendgridTransport({
    secure: true,
    auth: {
      api_key: "process.env.API_MAILPASS",
    },
  })
);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // validation
    if (!name || !email || !msg) {
      return;
      res.status(500).send({
        success: false,
        message: "please provide all valid fields",
      });
    }

    //  email matter
    transporter.sendMail({
      to: "abichalshukla6393@gmail.com",
      from: "abichalshukla9963@gmail.com",
      subject: "regarding portfolio website",
      html: `
         <h5>details information</h5>
     <ul>
     <li><p>

     name:${name}
     </p></li>
     <li><p>

     email:${email}
     </p></li>
     <li><p>

     msg:${msg}
     </p></li>
     </ul>
          `,
    });

    return res.status(200).send({
      success: true,
      message: "your message Send Successfully ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "send Email Api Error",
      error,
    });
  }
};
// const transporter = nodemailer.createTransport({
//   // Configure your email service provider here
//   service: "gmail",
//   auth: {
//     user: "abichalshukla9963@gmailcom",
//     pass: process.env.API_MAILPASS,
//   },
// });

// const sendEmailController = async (to, subject, text) => {
//   try {
//     const { name, email, msg } = req.body;

//     // validation
//     if (!name || !email || !msg) {
//       return;
//       res.status(500).send({
//         success: false,
//         message: "please provide all valid fields",
//       });
//     }

//     await transporter.sendMail({
//       from: "abichalshukla9963@gmail.com",
//       to: "shukla@12345",
//       subject: "mern portfolio related",
//       html: `
// //          <h5>details information</h5>
// //      <ul>
// //      <li><p>

// //      name:${name}
// //      </p></li>
// //      <li><p>

// //      email:${email}
// //      </p></li>
// //      <li><p>

// //      msg:${msg}
// //      </p></li>
// //      </ul>
// //           `,
//     });
//     console.log("Email sent successfully");
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send({
//       success: false,
//       message: "send Email Api Error",
//       error,
//     });
//   }
// };

module.exports = { sendEmailController };
