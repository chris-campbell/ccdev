import emailjs from "@emailjs/browser";

const sendEmail = (e, form) => {
  e.preventDefault();

  emailjs
    .sendForm(
      process.env.serviceId,
      process.env.templateId,
      form.current,
      process.env.publicKey
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

export default sendEmail;
