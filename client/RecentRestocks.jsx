import { useState, useEffect } from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const RecentRestocks = () => {
  const [restock, setRestock] = useState(null);
  useEffect(() => {
    const fetchRestock = async () => {
      try {
        let response = await axios.get("/api/restocks");
        setRestock(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRestock();
  }, []);

  if (restock === null) {
    return <div></div>;
  }

  return (
    <Container className=" mt-md-3 pt-3 text-center">
      <h1 className="display-6">
        Days Since Last Restock:{" "}
        {Math.floor((Date.now() - restock[0].date_unix) / 86400000)}
      </h1>
      <Row className="justify-content-center">
        {restock[0].products.map((item) => (
          <Card key={item.sku} style={{ width: "18rem" }} className="m-2 p-3">
            <Card.Img
              variant="top"
              src={`https://${item.assets[0].url.slice(2)}`}
              className="card-image"
            ></Card.Img>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>${item.price}</Card.Text>
            </Card.Body>
            <Button
              variant="primary"
              href={`https://www.hermes.com/us/en${item.url}`}
              target="_blank"
            >
              View Product Details
            </Button>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default RecentRestocks;
