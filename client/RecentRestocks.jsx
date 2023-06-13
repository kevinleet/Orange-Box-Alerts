import { useState, useEffect } from "react";
import { Container, Card, Button, Row, Carousel } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const RecentRestocks = () => {
  const [restock, setRestock] = useState(null);
  useEffect(() => {
    const fetchRestock = async () => {
      try {
        let response = await axios.get("/api/restocks/recent");
        setRestock(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRestock();
  }, []);

  if (restock === null || restock.products.length == 0) {
    return <div></div>;
  }

  return (
    <Container className="bg-light mt-md-3 py-3 rounded w-100 text-center">
      <h2>Don't miss the next restock.</h2>
      <Link to="/pricing">
        <Button className="btn-success mt-1 mb-2 ms-2">Pricing Info</Button>
      </Link>
      <Container className=" pt-md-3 text-center">
        <h1 className="lead">
          <strong>Last Restock:</strong>{" "}
          {Math.floor((Date.now() - restock.date_unix) / 86400000)} Days Ago
        </h1>
        <Row className="justify-content-center">
          {restock.products.map((item) => (
            <Card
              key={item.sku}
              style={{ width: "18rem" }}
              className="m-2 pt-3 pb-0"
            >
              <Carousel>
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
                    size: {item.size.toLowerCase()} <br /> color:{" "}
                    {item.avgColor.toLowerCase()}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default RecentRestocks;
