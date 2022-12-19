import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const form = e.target;
    // const name = form.name.value;
    // const email = form.email.value;
    // const phone = form.phone.value;
    // const message = form.message.value;
    // console.log(name, email, phone, message);

    emailjs
      .sendForm(
        "service_wxt64ds",
        "template_e95qeis",
        form.current,
        "0Ay6Hmyk5xEeB8rCh"
      )
      .then(
        (result) => {
          // console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <h1 className="text-center text-4xl my-20 text-white underline">
        Contact
      </h1>
      <div className="flex justify-center items-center">
        <form ref={form} onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full max-w-xs m-3 hover:border-blue-500"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs m-3 hover:border-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone"
              className="input input-bordered w-full max-w-xs m-3 hover:border-blue-500"
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered w-3/4 md:w-2/4 m-3 hover:border-blue-500"
            placeholder="Write your message"
          ></textarea>
          <br />
          <input
            type="submit"
            className="btn btn-primary m-3 btn-wide"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
