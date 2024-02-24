import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailRead } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { sendEmail } from "@/actions/sendEmail";
import { motion } from "framer-motion";

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
  const handleSubmit = async () => {
    setLoading(true);
    await sendEmail(formData);
    // setLoading(false)
  };
  return (
    <motion.section
      whileInView={{ y: [-200, 100, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 1 }}
      className="bg-white h-full w-[500px] md:w-full lg:w-full ml-[4rem] md:ml-0 py-10"
      id="contact"
    >
      <h1 className="text-3xl text-center font-[600] mt-10">Contact Me</h1>
      <p className="text-textColor mt-5 text-2xl lg:text-base text-center leading-[30px]">
        Have a question or want to work together?
      </p>
      <h2 className="text-3xl text-center mt-3 font-[600] text-secondary">
        Let's Make It Happen!
      </h2>
      <div className="items-center justify-center flex flex-col">
        <div className="app__footer-cards">
          <motion.div
          whileInView={{ x: [-200, 100, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 1 }}
           className="app__footer-card">
            <a
              href="mailto:ssdeen313@gmail.com"
              className="text-xl lg:text-base flex justify-center items-center gap-4"
            >
              <MdMarkEmailRead className=" text-secondary lg:text-xl text-3xl" />{" "}
              ssdeen313@gmail.com
            </a>
          </motion.div>
          <motion.div
          whileInView={{ x: [50, 0], opacity: [0, 0, 1] }}
          // whileInView={{ x: [-200, 100, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 1 }}
           className="app__footer-card">
            <a
              href="tel: +234 (9011855909)"
              className="text-xl lg:text-base flex justify-center items-center gap-4"
            >
              <FiPhoneCall className="text-secondary lg:text-xl text-3xl" />{" "}
              +(234) 9011855909
            </a>
          </motion.div>
        </div>

        {!isFormSubmitted ? (
          <motion.form
          whileInView={{ y: [-300, 100, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 1 }}
           className="app__footer-form app__flex">
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
                required
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
                required
                onChange={handleChangeInput}
              />
            </div>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileInView={{ x: [-200, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
              type="button"
              className="bg-secondary rounded-md flex items-center text-xl lg:text-base gap-3"
              onClick={handleSubmit}
            >
              {!loading ? "Send Message" : "Sending..."} <FiSend />
            </motion.button>
          </motion.form>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
