import image1 from "./images/accordion_1.jpeg";
import image2 from "./images/accordion_2.jpeg";
import image3 from "./images/accordion_3.jpg";
import { Link } from "react-router-dom";

import { Container, Accordion, Button } from "react-bootstrap";

const HowItWorks = () => {
  return (
    <Container className="bg-light mt-md-3 py-3 rounded w-100 ">
      <Container style={{ maxWidth: "950px" }} className="text-center">
        <h2>How our technology works.</h2>
        <h6 className="lead">
          Our team of industry-leading software engineers have developed an
          undetectable web tool that programmatically accesses and scans the
          Hermes web store for product restocks.{" "}
        </h6>
        <Link to="/recentrestocks">
          <Button className="btn-info mt-3 me-2">Recent Restocks</Button>
        </Link>
        <Link to="/pricing">
          <Button className="btn-success mt-3 ms-2">Pricing Info</Button>
        </Link>
      </Container>
      <Container>
        <Accordion
          defaultActiveKey="0"
          style={{ maxWidth: "800px", margin: "auto" }}
          className="text-left py-md-3 mt-4"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <strong>Fully Automated Web Tool</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>Seamless and uninterrupted operation.</strong> Our
                undetectable web tool operates continuously, scanning the Hermes
                web store 24/7 for restocks and new products. This ensures that
                subscribers receive timely alerts and updates without any
                disruptions.
                <br />
                <br />
                Our tool takes care of the entire monitoring process,
                eliminating the need for manual checks. Subscribers can rely on
                its automated functionality to stay informed about new product
                restocks effortlessly.
              </p>
              <img src={image1} className="image-width-100" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <strong>Customizable Alerts</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>
                  Customizable alerts offer unparalleled convenience.
                </strong>{" "}
                Subscribers can personalize their notifications based on their
                interests, ensuring they receive alerts for the products that
                matter most to them. This tailored approach streamlines the
                online shopping experience, saving valuable time and keeping
                users informed about restocks and new arrivals relevant to their
                tastes.
              </p>
              <img src={image2} className="image-width-100" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <strong>Advanced Anti-Bot Bypass</strong>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <strong>
                  Utilizes advanced tech to overcome bot-detection measures.
                </strong>{" "}
                Designed to surpass and overcome bot detection scripts when
                searching the Hermes web store for new product restocks.
                <br />
                <br />
                By utilizing advanced techniques, our technology effectively
                evades detection mechanisms, allowing our tool to search for
                restocks seamlessly. This ensures that our tool can identify and
                alert users about new product availability without being flagged
                as a bot or triggering automated security measures.
                <br />
                <br />
                This capability enhances the efficiency of our tool by enabling
                uninterrupted functionality, ensuring users can stay ahead and
                promptly seize opportunities for new product restocks.
              </p>
              <img src={image3} className="image-width-100" />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Container>
  );
};

export default HowItWorks;
