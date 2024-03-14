import { Button, Container, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import ReactGA from "react-ga4";

const Contact = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/contact",
    title: "Contact",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(
      "/api/messages",
      {
        name: name,
        email: email,
        message: message,
      },
      { headers: { "x-api-key": import.meta.env.VITE_APIKEY } }
    );
    setName("");
    setEmail("");
    setMessage("");
    handleShow();
  };
  return (
    <Container className="bg-light mt-md-3 py-3 rounded w-100 text-center">
      <h1 className="lead my-4">
        Fill out the form below to get in touch with us.
      </h1>
      <Container style={{ maxWidth: "600px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="contact" className="my-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="my-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="my-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="my-2">
            Submit
          </Button>
        </Form>
      </Container>
      <p className="mt-3">
        Alternatively, you can{" "}
        <a href="mailto:admin@orangeboxalerts.com">email us</a> directly.
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your message has been successfully submitted.</p>
          <p>We will get back to you as soon as possible.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contact;
