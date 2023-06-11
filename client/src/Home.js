import { Link } from "react-router-dom";
import image1 from "./images/home_1.jpg";
import image2 from "./images/home_2.jpg";
import image3 from "./images/home_3.jpeg";

const Home = () => {
  return (
    <div className="container mt-2 bg-light mt-4 px-5 py-3 rounded w-100">
      <div className="container">
        <h1 className="display-6 text-center">Add us to your wish list.</h1>
        <p className="lead text-center">
          Hermes Alerter is so good, you won't tell your friends about it.
        </p>
        <p className="text-center">
          Utilizing advanced enterprise anti-detection technologies to deliver
          restock notifications directly to your inbox.
        </p>
        <p className="lead text-center my-4">
          <Link
            className="btn btn-primary btn-lg"
            to="/howitworks"
            role="button"
          >
            Learn More
          </Link>
        </p>
      </div>

      <div className="container-fluid w-100 p-3">
        <div
          id="carouselHomePage"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 rounded mx-auto"
                src={image1}
                alt="First slide"
                style={{ "max-width": "600px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 rounded mx-auto"
                src={image2}
                alt="Second slide"
                style={{ "max-width": "600px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 rounded mx-auto"
                src={image3}
                alt="Third slide"
                style={{ "max-width": "600px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
