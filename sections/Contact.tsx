"use cli";
import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailRead } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: "name",
      email: "email",
      message: "message",
    };
    // client.create(contact).then(() => {
    //   setLoading(false);
    //   setIsFormSubmitted(true);
    // });
  };
  return (
    <section className="bg-white h-full w-[500px] lg:w-full ml-[4rem] lg:ml-0 py-10" id="contact">
      <h1 className="text-3xl text-center font-[600] mt-10">Contact Me</h1>
      <p className="text-textColor mt-5 text-2xl lg:text-base text-center leading-[30px]">
        Have a question or want to work together?
      </p>
      <h2 className="text-3xl text-center mt-3 font-[600] text-secondary">
        Let's Make It Happen!
      </h2>
      <div className="items-center justify-center flex flex-col">
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <a href="mailto:ssdeen313@gmail.com" className="text-xl lg:text-base flex justify-center items-center gap-4">
              <MdMarkEmailRead className=" text-secondary lg:text-xl text-3xl" /> ssdeen313@gmail.com 
            </a>
          </div>
          <div className="app__footer-card">
            <a href="tel: +234 (9011855909)" className="text-xl lg:text-base flex justify-center items-center gap-4">
              <FiPhoneCall className="text-secondary lg:text-xl text-3xl" /> +(234) 9011855909 
            </a>
          </div>
        </div>

        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                className="text-xl lg:text-base"
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="text-xl lg:text-base"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="text-xl lg:text-base resize-none"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="bg-secondary rounded-md flex items-center text-xl lg:text-base gap-3" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."} <FiSend />
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
