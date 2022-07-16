import emailjs from "@emailjs/browser";

const sendEmail = async (e, form) => {
  e.preventDefault();

  return await emailjs.sendForm(
    process.env.serviceId,
    process.env.templateId,
    form.current,
    process.env.publicKey
  );
};

export default sendEmail;
