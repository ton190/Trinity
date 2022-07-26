import React, { createRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../../styles/pages/home/Contact.scss";

export default function Contact() {
  const messageButton = createRef();
  const messageDiv = createRef();

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const clearFormState = () => {
    messageDiv.current.className = "";
    messageButton.current.className = "";
    messageDiv.current.innerText = "";
  };

  const onValidSubmit = async (data, { resetForm }) => {
    messageButton.current.disabled = false;
    messageButton.current.innerText = "Sending";
    const msg =
      `<h2>Request for Trinity Group of Companies.</h2>` +
      `<p><b>Name:</b> ${data.name}<br>` +
      `<b>Email:</b> ${data.email}<br>` +
      `<b>Subject:</b> ${data.subject}<br></p>` +
      `<p>${data.message}</p>`;

    await axios
      .post("https://trinitycanada.com/sendemail/", {
        email: data.email,
        message: msg,
      })
      .then((response) => {
        if (response.data.status) {
          messageDiv.current.className = "success";
          messageButton.current.className = "success";
          messageDiv.current.innerText = "Message Send";
          resetForm();
        } else {
          messageDiv.current.className = "error";
          messageButton.current.className = "error";
          messageDiv.current.innerText = "Cannot send the message";
        }
      })
      .catch(() => {
        messageDiv.current.className = "error";
        messageButton.current.className = "error";
        messageDiv.current.innerText = "Cannot send the message";
      });
    messageButton.current.innerText = "Send";
    messageButton.current.disabled = false;
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid Email format"),
    subject: Yup.string(),
    message: Yup.string()
      .max(1000, "Maximum message size 1000 characters long")
      .required("Message is required"),
  });

  return (
    <section className="Contact" id="Contact">
      <div className="section_title" id="section_contact">
        CONTACT
      </div>
      <div className="container">
        <div className="form">
          <Formik
            initialValues={initialValues}
            onSubmit={onValidSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="field-group">
                <Field
                  id="contactForm"
                  name="name"
                  type="text"
                  placeholder="Name"
                  onInput={clearFormState}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error_message"
                />
              </div>
              <div className="field-group">
                <Field
                  id="contactForm"
                  name="email"
                  type="text"
                  placeholder="Email"
                  onInput={clearFormState}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error_message"
                />
              </div>
              <div className="field-group">
                <Field
                  id="contactFrom"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onInput={clearFormState}
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="error_message"
                />
              </div>
              <div className="field-group">
                <Field
                  as="textarea"
                  id="contactFrom"
                  name="message"
                  placeholder="Message"
                  maxLength="1000"
                  onInput={clearFormState}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error_message"
                />
              </div>
              <button type="submit" ref={messageButton}>
                Send
              </button>
              <div ref={messageDiv}></div>
            </Form>
          </Formik>
        </div>
        <div className="info">
          <div>
            <div className="title">Head Office</div>
            <div className="body">
              158 Rossdean Ave
              <br />
              North York, ON, M9L 251
              <br />
              (416)-630-9213
            </div>
          </div>
          <div>
            <div className="title">Employment</div>
            <div className="body">
              To apply for a job please send a cover letter together with your
              C.V. to: info@trinitycanada.com
            </div>
          </div>
          <div className="e-info">
            <div>
              <b>Phone:</b> (416)-630-9213
            </div>
            <div>
              <b>Email:</b> info@trinitycanada.com
            </div>
          </div>
        </div>
      </div>
      <center>
        <div className="map">
          <iframe
            title="google"
            width="1000"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=158%20Rossdean%20Ave%20%20North%20York,%20ON&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </center>
    </section>
  );
}
