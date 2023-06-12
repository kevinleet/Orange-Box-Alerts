import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { loadGapiInsideDOM as gapiLoad } from "gapi-script";
import Login from "./src/components/Login";
import Logout from "./src/components/Logout";

const Subscribe = () => {
  useEffect(() => {
    function loadGoogleAPI() {
      gapiLoad("client", initGoogleClient);
    }
    function initGoogleClient() {
      console.log("error");
      gapi.client.init({
        clientId:
          "550761020124-i556iaj3l2j98erpakq9nor5539tbnmn.apps.googleusercontent.com",
        scope: "",
      });
    }
    loadGoogleAPI();
  }, []);
  return (
    <Container className="bg-light mt-md-3 py-3 rounded w-100 text">
      <Container className="d-flex justify-content-center align-items-center mb-2">
        <Row style={{ maxWidth: "500px" }}>
          <Col>
            <Login />
          </Col>
          <Col>
            <Logout />
          </Col>
        </Row>
      </Container>
      <Form style={{ maxWidth: "600px", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Subscribe;
