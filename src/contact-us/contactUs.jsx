import React, { Component, useState, useEffect } from "react";
import { Container, Form, FormControl, Button, Row } from "react-bootstrap";

const ContactUs = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Namerequired, setNameRequired] = useState(false);
  const [Emailrequired, setEmailRequired] = useState(false);
  const [Messagerequired, setMessageRequired] = useState(false);
  const [info, setInfo] = useState({});

  const handleChanges = (event) => {
    const { value, name } = event.target;
    if (name === "name") {
      setName(value);
      setNameRequired(false);
    } else if (name === "email") {
      setEmail(value);
      setEmailRequired(false);
    } else {
      setMessage(value);
      setMessageRequired(false);
    }
  };
  const handleEmailValidation = () => {
    const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Email.length > 0) {
      if (validation.test(Email)) {
        return true;
      }
      setEmailRequired(true);
      return false;
    }
  };

  useEffect(() => {
    console.log("use effect ran");
    handleEmailValidation();
  }, [Email]);

  const handleBlur = (event) => {
    const { name } = event.target;
    if (name === "name") {
      if (Name.length === 0) {
        setNameRequired(true);
      }
    } else if (name === "email") {
      if (Email.length === 0) {
        setEmailRequired(true);
      }
    } else {
      if (Message.length === 0) {
        setMessageRequired(true);
      }
    }
  };

  const handleClick = () => {
    setInfo({
      NameInfo: Name,
      EmailInfo: Email,
      MessageInfo: Message,
    });
    if (Name.length === 0) {
      setNameRequired(true);
    }
    if (Email.length === 0) {
      setEmailRequired(true);
    }
    if (Message.length === 0) {
      setMessageRequired(true);
    }
    console.log(info);
  };

  return (
    <div className="contactMe">
      <Container>
        <h2 className="lead">CONTACT ME NOW!</h2>
        <Form>
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <p>{Namerequired && "Required"}</p>
            <Form.Control
              type="text"
              name="name"
              onChange={handleChanges}
              onBlur={handleBlur}
              placeholder="Enter Name"
              value={Name}
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <p>{Emailrequired && "Invalid Email"}</p>
            <Form.Control
              onChange={handleChanges}
              onBlur={handleBlur}
              type="email"
              name="email"
              placeholder="Enter email"
              value={Email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <p>{Messagerequired && "Required"}</p>
            <FormControl
              as="textarea"
              name="message"
              aria-label="With textarea"
              onChange={handleChanges}
              onBlur={handleBlur}
              value={Message}
              placeholder="Enter Message"
            />
          </Form.Group>
          <Button onClick={handleClick}>Send</Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
