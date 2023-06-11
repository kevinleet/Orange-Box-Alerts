// import { useState } from "react";
import image1 from "./images/restock_1.jpg";

// const [restockItems, setRestockItems] = useState(getRestockItems())

// async function getRestockItems() {
// let response =
// }

const RecentRestocks = () => {
  return (
    <div className="container bg-light mt-4 px-5 py-3 rounded w-100">
      <div className="d-inline-flex flex-row ">
        <div class="card" style={{ width: "18rem" }}>
          <img src={image1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Space Malice Bag</h5>
            <p class="card-text">Price: $22,700</p>
            <a href="#" class="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={image1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Space Malice Bag</h5>
            <p class="card-text">Price: $22,700</p>
            <a href="#" class="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={image1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Space Malice Bag</h5>
            <p class="card-text">Price: $22,700</p>
            <a href="#" class="btn btn-primary">
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentRestocks;
