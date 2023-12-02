import React, { useEffect, useRef, useState } from "react";
import "./form.css";
import Dialog from "../Dialog/Dialog";

export default function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const dialog = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setFormInfo({
      ...formInfo,
      name: nameInput.current.value,
      email: emailInput.current.value,
      message: messageInput.current.value,
    });
    dialog.current.showModal();

    // alert(`Thank you ${nameInput.current.value} for contacting me!`);
    localStorage.setItem("name", nameInput.current.value);
    // localStorage.setItem("email", emailInput.current.value);
    // localStorage.setItem("message", messageInput.current.value);

    nameInput.current.value = "";
    emailInput.current.value = "";
    messageInput.current.value = "";
  }

  useEffect(() => {
    localStorage.setItem("formInfo", JSON.stringify(formInfo));
  }, [formInfo]);

  return (
    <section id="contact" className="form-section">
      <h1>Contact Me</h1>
      <div className="welcoming-form-container">
        <div className="form-container">
          <form id="myForm" onSubmit={handleSubmit}>
            <Dialog ref={dialog} name={localStorage.getItem("name")} />

            <div className="name-form size">
              <label>Name:</label>
              <input
                type="text"
                required
                ref={nameInput}
                defaultValue={formInfo.name}
              />
            </div>
            <div className="email-form size">
              <label>Email:</label>
              <input
                type="email"
                required
                ref={emailInput}
                defaultValue={formInfo.email}
              />
            </div>
            <label id="message" className="size">
              Message:
            </label>
            <div className="textarea-form size">
              <textarea
                id="textarea"
                cols="50"
                rows="6"
                required
                ref={messageInput}
                defaultValue={formInfo.message}
              ></textarea>
            </div>
            <input className="submit-btn" type="submit" />
          </form>
          <div className="form-text">
            {/* <p className="form-welcoming">
              Thank you {formInfo.name} for contacting me I will respond to you
              soon!
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
