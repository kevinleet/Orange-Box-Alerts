function Carousel() {
  return (
    <div className="container-fluid w-50 mt-3">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://sothebys-com.brightspotcdn.com/dims4/default/686d5cb/2147483647/strip/true/crop/5616x3744+0+0/resize/684x456!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fbf%2F05%2F23768102417f8fea466aecae8b24%2Fgettyimages-1336061149.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://sothebys-com.brightspotcdn.com/f4/83/ba1de1c145d8bb290ffa0fca7a05/gettyimages-1353580128.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://sothebys-com.brightspotcdn.com/66/fd/b852399248b49a62f873897294eb/gettyimages-1381444234.jpg"
              alt="Third slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
