import React, { useState } from "react";

import emailjs from "emailjs-com";

import { Form } from "react-bootstrap";

import "../Styles/Contact.css";

const Contact = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [textInTextArea, setTextInTextArea] = useState("");
  const [messageHasBeenSent, setMessageHasBeenSent] = useState(false);

  const controlInputs = (e) => {
    if (e.target.name === "from_name") setSenderEmail(e.target.value);
    if (e.target.name === "message") setTextInTextArea(e.target.value);
  };

  function sendEmail(e) {
    e.preventDefault();
    if (textInTextArea === "") return;

    emailjs
      .sendForm(
        "service_qu5ip1a",
        "template_rxnhy0c",
        e.target,
        "user_UYosc9RWSNIDMYdEpRAgH"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setMessageHasBeenSent(true);
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSenderEmail("");
    setTextInTextArea("");
    setTimeout(() => {
      setMessageHasBeenSent(false);
    }, 5000);
  }

  return (
    <form className="contactMe" onSubmit={sendEmail}>
      <div className="container contact-div">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>To</Form.Label>
          <Form.Control defaultValue="Krzysztof Makówka" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="from_name"
            value={senderEmail}
            onChange={(e) => controlInputs(e)}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={textInTextArea}
            onChange={(e) => controlInputs(e)}
            className="text-area"
          />
        </Form.Group>
        <div className="col-12">
          <button type="submit" className="btn btn-light">
            Send Email
          </button>
        </div>
      </div>
      {messageHasBeenSent && (
        <div
          className={
            messageHasBeenSent
              ? "alert alert-success alert visible-alert"
              : "alert alert-success alert "
          }
          role="alert"
        >
          Message has been sent
        </div>
      )}
    </form>
  );
};

export default Contact;
