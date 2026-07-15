import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const ContactForm = ({
  closeContactForm,
}: {
  closeContactForm: () => void;
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4 text-left"
      >
        <div className="bg-primary/90 rounded-xl shadow-xl w-full max-w-md px-4 py-5 sm:px-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">Get In Touch</h1>
            <button onClick={closeContactForm}>
              <FiX className="h-5 w-5 text-gray-300 font-extrabold" />
            </button>
          </div>

          <div>
            <form className="flex flex-col gap-4 text-left">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white-300 text-sm font-medium text-left mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg bg-primary/20 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white-300 text-sm font-medium text-left mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg bg-primary/20 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white-300 text-sm font-medium text-left mb-1"
                >
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-lg bg-primary/20 text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none h-32"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 w-auto self-end"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactForm;
