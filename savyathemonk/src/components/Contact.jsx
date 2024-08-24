import React, { useRef, useState } from "react";
import HorizontalRule from "./HorizontalRule";
import HorizontalRule2 from "./HorizontalRule2";
import Button1 from "./Button1";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  
  // reCAPTCHA Site Key
  const recaptchaKey = "6LeopDUoAAAAAFQU3FcRr7selobGyP2vWuE2_19q";

  // Validation
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name) {
      newErrors.name = "Please enter your name";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (!formData.email) {
      newErrors.email = "Please enter your email address";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const recaptchaRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  // Toast Notification Functions
  const success = () => toast.success("Thank you. I will get back to you as soon as possible.", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    className:"font-medium text-md md:mx-0"
    });

  const fields_error = () => toast.error("Ahh, something went wrong. Please try again.", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    className:"font-medium text-md md:mx-0"
    });

  const reCAPTCHA_error = () => toast.error("Please complete the reCAPTCHA challenge and fill in all required fields.", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    className:"font-medium text-md mx-6 md:mx-0"
    });

  // EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // reCAPTCHA validation
    if (validateForm() && recaptchaRef.current.getValue()) {
      console.log("Form submitted:", formData);

      emailjs
        .sendForm(
          "service_0y90kmk",
          "template_hf61l0d",
          formRef.current,
          "czPlhKpgkHGDhO1RW"
        )
        .then(
          () => {
            setLoading(false);
            //Toastify
            success();
  
            setFormData({
              name: "",
              email: "",
              company: "",
              message: "",
            });
          })
        .catch((error) => {
          setLoading(false);
          console.error(error);
          //Toastify
          fields_error();
          } 
        );
    } else {
      setLoading(false);
      //Toastify
      reCAPTCHA_error();
    }
  };

  return (
    <div name="contact">
      {/* Contact Heading */}
      <h2 className="text-5xl md:text-[72px] font-bold text-white mt-20 md:mt-40 uppercase text-center">
        Let's start <span className="text-[#906EF0]">building</span> your
        <span className="text-[#906EF0]"> vision</span>
        <div className="mx-2 md:mx-14 mt-[-15px]">
          <HorizontalRule />
        </div>
      </h2>

      {/* Contact Form */}
      <div 
        data-aos="fade-up"
        data-aos-duration="2000"
        className="border-solid bg-[#181818] border-[#808080] border-[1px] rounded-3xl mx-4 md:mx-16 mt-16 shadow-2xl shadow-black">
        <h4 className="text-center mt-3">New Message</h4>

        <form
          ref={formRef}
          className="rounded-3xl"
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <div className="ml-9 mt-10">
            <label htmlFor="name">Name: </label>
            <input
              className="appearance-none rounded ml-0 md:ml-3 bg-transparent w-[70%] md:w-[90%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>
          <div className="mx-7 md:mx-9 mt-[-15px]">
            <HorizontalRule2 />
          </div>

          {/* Email Field */}
          <div className="ml-9 mt-10">
            <label htmlFor="email">Email: </label>
            <input
              className="appearance-none rounded md:ml-4 bg-transparent w-[70%] md:w-[90%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="mx-7 md:mx-9 mt-[-15px]">
            <HorizontalRule2 />
          </div>

          {/* Company Field */}
          <div className="ml-9 mt-10">
            <label htmlFor="company">Company: </label>
            <input
              className="appearance-none rounded bg-transparent w-[60%] md:w-[90%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter Company"
            />
          </div>
          <div className="mx-7 md:mx-9 mt-[-15px]">
            <HorizontalRule2 />
          </div>

          {/* Message Textarea */}
          <div className="ml-4 md:ml-8 mt-10">
            <textarea
              className="appearance-none rounded text-white bg-[#0D0D0D] w-[96%] md:w-[97%] py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              rows="15"
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
          </div>

          
          {/* submit Button */}
          <div className="flex flex-col md:flex-row justify-between md:items-center text-right mt-5 md:mr-12 mb-5">
            {/* Add reCAPTCHA */}
            <div className="mx-auto md:ml-8">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                onChange={() => {
                }}
              />
            </div>
            <div className="mx-auto md:mx-0 mt-5 md:mt-0">
              <Button1 onClick={handleSubmit}>
                {loading ? "Sending..." : "Send"}
              </Button1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;