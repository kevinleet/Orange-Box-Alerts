import { Link } from "react-router-dom";
import { Button, Card, Container, Accordion, ListGroup } from "react-bootstrap";

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
            🍊 Orange Box Alerts Monthly Subscription - $15
          </Card.Title>
          <Card.Text>
            Unlimited access to restock alerts, delivered instantly to your
            inbox. Personalize your notifications based on your interests, to
            get alerts for the products that matter most to you.
          </Card.Text>
          <Link to="/login">
            <Button
              style={{ maxWidth: "200px", margin: "auto" }}
              className="btn-success"
            >
              Subscribe Now
            </Button>
          </Link>
        </Card>
      </Container>
      <Container style={{ maxWidth: "800px" }} className="mt-4">
        <h4 className="lead text-center">Frequently Asked Questions</h4>
        <Accordion className="mt-3">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What does Orange Box Alerts do?</Accordion.Header>
            <Accordion.Body>
              Our web tool is designed to help you stay updated on product
              restocks in the Hermes web store. We scrape the store regularly
              and send you instant alerts whenever new products become
              available.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How does the alert system work?</Accordion.Header>
            <Accordion.Body>
              Once you subscribe to our service, you can customize your
              notification settings. We'll send you real-time alerts via email
              whenever your desired products are restocked in the Hermes web
              store.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Can I trust the accuracy of the restock information?
            </Accordion.Header>
            <Accordion.Body>
              Absolutely! We use advanced scraping techniques to gather data
              directly from the Hermes web store. While we strive to provide
              accurate information, please note that restock availability can
              change rapidly, and we recommend acting promptly when you receive
              an alert.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Is my personal information secure?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we prioritize the security and privacy of our users. When you
              log in via Google OAuth 2.0, we adhere to strict security
              protocols to ensure that your information remains safe. We do not
              store any of your personal data on our servers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              How often do you update the restock information?
            </Accordion.Header>
            <Accordion.Body>
              We are committed to providing you with the most up-to-date
              information. Our scraping process occurs frequently throughout the
              day, ensuring that you receive timely alerts for any newly
              restocked products. Restock information is regularly updated to
              keep you informed of the latest availability.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Can I unsubscribe or modify my notification settings?
            </Accordion.Header>
            <Accordion.Body>
              Yes, you have complete control over your subscription and
              notification settings. You can easily modify your preferences,
              including opting out of notifications or updating your product
              alert preferences, by accessing your account settings.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              How can I sign up for this service?
            </Accordion.Header>
            <Accordion.Body>
              Signing up is a simple process! Follow these steps to get started:
              <ListGroup className="my-2">
                <ListGroup.Item>
                  1. Click on the "Sign Up" button and log in using your Google
                  account credentials via Google OAuth 2.0.
                </ListGroup.Item>
                <ListGroup.Item>
                  2. After logging in, you will be directed to a secure checkout
                  page powered by Stripe, where you can complete the payment
                  process for your Orange Box Alerts subscription.
                </ListGroup.Item>
                <ListGroup.Item>
                  3. Once your payment is successfully processed, your account
                  activation will be initiated. Please note that it may take up
                  to 24 hours for your account to be fully activated.
                </ListGroup.Item>

                <ListGroup.Item>
                  4. Once your account is activated, you can log in and access
                  your personalized dashboard. From there, you can easily
                  customize your notification preferences, selecting specific
                  product categories and fine-tuning your settings to receive
                  alerts tailored to your interests.
                </ListGroup.Item>
              </ListGroup>
              We aim to ensure a seamless and secure sign-up process, allowing
              you to start customizing your notification preferences and
              receiving restock alerts as soon as your account is activated.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              What if I have more questions or need support?
            </Accordion.Header>
            <Accordion.Body>
              We're here to assist you! If you have any further questions or
              require support, please reach out to our customer service team
              through the "Contact Us" page. We'll be happy to address any
              concerns or issues you may have.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Container>
  );
};

export default Pricing;
