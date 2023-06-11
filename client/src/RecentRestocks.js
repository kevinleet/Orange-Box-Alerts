import image1 from "./images/restock_1.jpg";

const RecentRestocks = () => {
  return (
    <div className="container bg-light mt-4 px-5 py-3 rounded w-100">
      <div className="d-flex justify-content-center">
        <div className="card mx-4" style={{ width: "18rem" }}>
          <img src={image1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Space Malice Bag</h5>
            <p className="card-text">Price: $22,700</p>
            <a href="#" className="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
        <div className="card mx-4" style={{ width: "18rem" }}>
          <img src={image1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Space Malice Bag</h5>
            <p className="card-text">Price: $22,700</p>
            <a href="#" className="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
        <div className="card mx-4" style={{ width: "18rem" }}>
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
  );
};

export default RecentRestocks;
