import image1 from "./images/restock_1.jpg";

const RecentRestocks = () => {
  return (
    <div className="container bg-light mt-4 px-3 py-3 rounded">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card mb-4" style={{ width: "100%" }}>
            <img src={image1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Space Malice Bag</h5>
              <p className="card-text">Price: $22,700</p>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card mb-4" style={{ width: "100%" }}>
            <img src={image1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Space Malice Bag</h5>
              <p className="card-text">Price: $22,700</p>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card mb-4" style={{ width: "100%" }}>
            <img src={image1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Space Malice Bag</h5>
              <p className="card-text">Price: $22,700</p>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentRestocks;
