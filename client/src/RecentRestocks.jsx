import { useState, useEffect } from "react";
import { Container, Card, Button, Row, Carousel } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const RecentRestocks = () => {
  const [restocks, setRestocks] = useState(null);
  useEffect(() => {
    const fetchRestock = async () => {
      try {
        let response = await axios.get("/api/restocks/recentover2", {
          headers: { "x-api-key": import.meta.env.VITE_APIKEY },
        });
        setRestocks(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRestock();
  }, []);

  if (!restocks) {
    return <div></div>;
  }

  function getRestockTime(restock_date) {
    let restockdays = Math.floor((Date.now() - restock_date) / 86400000);
    let restockhours = Math.floor((Date.now() - restock_date) / 3600000);
    let restockminutes = Math.floor((Date.now() - restock_date) / 60000);
    if (restockdays > 1) {
      return `${restockdays} Days Ago`;
    } else if (restockdays == 1) {
      return `${restockdays} Day Ago`;
    } else if (restockdays == 0) {
      if (restockhours == 1) {
        return `${restockhours} Hour Ago`;
      } else if (restockhours > 1) {
        return `${restockhours} Hours Ago`;
      } else {
        return `${restockminutes} Minutes Ago`;
      }
    }
  }

  return (
    <Container className="bg-light mt-md-3 py-3 rounded w-100 text-center">
      <h2>Don't miss the next restock.</h2>

      {restocks.map((restock) => (
        <Container className=" pt-md-3 text-center mb-5">
          <h1 className="lead">
            <strong>Restocked:</strong> {getRestockTime(restock.date_unix)}
            <br />
            <strong>Number of Products: </strong> {restock.products.length}
          </h1>
          <Row className="justify-content-center">
            {restock.products.map((item) => (
              <Card
                key={item.sku}
                style={{ width: "18rem" }}
                className="m-2 pt-3 mb-5"
              >
                <Carousel interval={null}>
                  {item.assets.map((img) => (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        style={{ maxHeight: "262px" }}
                        src={`https://${img.url.slice(2)}`}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    $ {Intl.NumberFormat("en-US").format(item.price)}
                    <br />
                    <span className="small-text">
                      color: {item.avgColor.toLowerCase()}
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Row>
          <hr />
        </Container>
      ))}
    </Container>
  );
};

export default RecentRestocks;
