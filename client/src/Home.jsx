import { Button, Container, Carousel } from "react-bootstrap";
import image1 from "./images/home_1.jpg";
import image2 from "./images/home_2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="bg-light mt-md-3 py-3 rounded w-100 text-center">
      <Container>
        <h2>Add us to your wish list.</h2>
        <h5 className="lead">
          Restock alerter that is so good, you won't tell your friends about it.
        </h5>
        <p>
          Utilizing advanced enterprise anti-detection technologies to deliver
          restock notifications directly to your inbox.
        </p>
        <Link to="/howitworks">
          <Button className="btn-success">Learn More</Button>
        </Link>
      </Container>
      <Container className="mt-4">
        <Carousel style={{ maxWidth: "800px", margin: "auto" }}>
          <Carousel.Item>
            <img src={image1} className="image-width-100" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={image2} className="image-width-100" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
};

export default Home;
