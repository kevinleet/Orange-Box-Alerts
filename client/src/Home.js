import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-2 bg-light mt-4 px-5 py-3 rounded w-75">
      <div className="container">
        <h1 className="display-6 text-center">Add us to your wish list.</h1>
        <p className="lead text-center">
          Hermés Alerter is so good, you won't tell your friends about it.
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
            Learn more
          </Link>
        </p>
      </div>

      <div className="container-fluid w-75 p-3">
        <div
          id="carouselHomePage"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 rounded"
                src="https://sothebys-com.brightspotcdn.com/dims4/default/686d5cb/2147483647/strip/true/crop/5616x3744+0+0/resize/684x456!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fbf%2F05%2F23768102417f8fea466aecae8b24%2Fgettyimages-1336061149.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 rounded"
                src="https://sothebys-com.brightspotcdn.com/f4/83/ba1de1c145d8bb290ffa0fca7a05/gettyimages-1353580128.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 rounded"
                src="https://sothebys-com.brightspotcdn.com/66/fd/b852399248b49a62f873897294eb/gettyimages-1381444234.jpg"
                alt="Third slide"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
