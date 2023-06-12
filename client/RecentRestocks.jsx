import { useState, useEffect } from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

const RecentRestocks = () => {
  const [restock, setRestock] = useState(null);
  useEffect(() => {
    const fetchRestock = async () => {
      try {
        let response = await axios.get(
          // change this back to relative path for deployment
          // "http://localhost:3001/api/restocks/recent"
          "/api/restocks/recent"
        );
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
    <Container className="bg-light mt-md-3 py-3 rounded w-100 ">
      <Container className=" pt-md-3 text-center">
        <h1 className="lead">
          <strong>Last Restock:</strong>{" "}
          {Math.floor((Date.now() - restock.date_unix) / 86400000)} Days Ago
        </h1>
        <Row className="justify-content-center">
          {restock.products.map((item) => (
            <Card key={item.sku} style={{ width: "18rem" }} className="m-2 p-3">
              <Card.Img
                variant="top"
                src={`https://${item.assets[0].url.slice(2)}`}
                className="card-image"
              ></Card.Img>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  $ {Intl.NumberFormat("en-US").format(item.price)}
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
