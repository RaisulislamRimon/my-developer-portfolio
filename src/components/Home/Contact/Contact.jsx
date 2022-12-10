import React from "react";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    console.log(name, email, phone, message);
  };
  return (
    <div>
      <h1 className="text-center text-4xl my-20">Contact</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-xs m-3"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs m-3"
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone"
            className="input input-bordered w-full max-w-xs m-3"
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered w-3/4 md:w-2/4 m-3"
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
  );
};

export default Contact;
