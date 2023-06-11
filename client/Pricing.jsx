import { Link } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";

const Pricing = () => {
  return (
    <Container className="bg-light mt-md-3 py-3 rounded w-100 ">
      <Container style={{ maxWidth: "950px" }} className="text-center">
        <h2>The price of convenience.</h2>
        <h6 className="lead">
          How much is your time worth? We hope at least 15 dollars.{" "}
        </h6>
        <p>
          Because that's all we are charging. Only $15 a month for unlimited
          access to restock notifications.
        </p>
      </Container>
      <Container
        className="bg-light mt-md-3 py-3 rounded w-100 text-center"
        style={{ maxWidth: "500px" }}
      >
        <Card style={{ "width:": "18rem" }} className="p-3">
          <Card.Img></Card.Img>
          <Card.Title className="lead">
            Hermes Alerter Monthly Subscription - $15
          </Card.Title>
          <Card.Text>
            <p className="my-0">
              Unlimited access to restock alerts, delivered instantly to your
              inbox. Personalize your notifications based on your interests, to
              get alerts for the products that matter most to you.
            </p>
          </Card.Text>
          <Link to="/subscribe">
            <Button
              style={{ maxWidth: "200px", margin: "auto" }}
              className="btn-success"
            >
              Subscribe Now
            </Button>
          </Link>
        </Card>
      </Container>
    </Container>
  );
};

export default Pricing;
