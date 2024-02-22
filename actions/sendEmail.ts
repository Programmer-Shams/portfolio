"use server"
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: { name: string; email: string; message: string }) => {
    
    const {name, email, message} = formData
    console.log(email)
    resend.emails.send({
        from: email,
        to: 'seostore313@gmail.com',
        subject: `it ${name} Let Connect`,
        html: message
      });
}





