import { NextResponse } from "next/server";
import ContactEmailTemplate from "./ContactEmailTemplate";
import { dot } from "node:test/reporters";

const getData = async (component: any) => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return staticMarkup;
};

export async function POST(request: Request, response: any) {
  const body = await request.json();

  let nodemailer = require("nodemailer");
  var transporter = nodemailer.createTransport({
    // host: "live.smtp.mailtrap.io",
    // port: 587,
    // auth: {
    //   user: "api",
    //   pass: "e7812fb8f4c7aa7b4bdc41193d71620c"
    // }
    host: process.env.SMTP_SERVER_HOST,
    port: process.env.SMTP_SERVER_PORT,
    auth: {
      user: process.env.SMTP_SERVER_AUTH_USER,
      pass: process.env.SMTP_SERVER_AUTH_PASSWORD,
    },
  });

  const componentString = await getData(
    <ContactEmailTemplate body={body} />
  );

  const mailData = {
    from: body.email,
    to: process.env.CONTACT_US_EMAIL,
    subject: 'Trusmi - New Query | ' + body.subject,
    text: body.message,
    html: componentString,
  };

  let err;
  let info;

  await transporter.sendMail(mailData, function (errData: any, infoData: any) {
    if (errData) {
      console.log(errData);
      err = errData;
    } else {
      console.log(infoData);
      info = infoData;
    }
  });

  if (err) {
    return NextResponse.json(
      { message: "Failed to send email", success: false, error: err },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Email Sent Successfully", success: true },
      { status: 200 }
    );
  }
}
