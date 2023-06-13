import { Container, Button, Tab, Tabs, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserPanel = ({ userData, setUserData, isLoggedIn, setIsLoggedIn }) => {
  const [dbUserData, setDbUserData] = useState({});
  const navigate = useNavigate();
  useEffect(async () => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      let response = await axios.get(`/api/users?email=${userData.email}`);
      const { subscription_active, notifyAllRestocks, productsToAlert } =
        response.data[0];
      setDbUserData({ subscription_active: subscription_active });
    }
  }, [isLoggedIn]);
  function logOut() {
    setUserData({
      email: "",
      name: "",
      given_name: "",
      family_name: "",
    });
    setIsLoggedIn(false);
  }
  return (
    <Container className="bg-light mt-md-3 py-3 rounded w-100 ">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Container style={{ maxWidth: "950px" }} className="text-center">
            <h2>Hello, {userData.given_name}. Nice to meet you.</h2>
            <h6 className="lead mt-4">
              We utilize Stripe for seamless payment processing of our
              subscriptions, providing our consumers with a secure and
              hassle-free experience, thanks to Stripe's robust security
              measures and user-friendly interface.
            </h6>
            <br />
            <p>
              Once your payment is successfully processed, your subscription
              will be activated within 24 hours. Once activated, you will start
              receiving restock alert notifications whenever they occur,
              ensuring you never miss out!
            </p>
          </Container>
          <Container className="d-flex justify-content-center mt-5">
            <stripe-buy-button
              buy-button-id="buy_btn_1NIIfAEnnrWrEekPzBiz7bGy"
              publishable-key="pk_live_51NII8dEnnrWrEekPneZfws2ml3BQSOZpEoJBL6ryNrGOSpWIypfA6OL9QP4YSYFC1SZYcLYlTbCPnGDvc15lM7AA00Fn6b3MDS"
            ></stripe-buy-button>
          </Container>
        </Tab>
        <Tab
          eventKey="Notification Settings"
          title="Notification Settings"
          disabled
        >
          Tab content for Alerts
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Container>
            <ListGroup>
              <ListGroup.Item>
                <strong>Email: </strong>
                {userData.email}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Name: </strong>
                {userData.name}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Subscription Status: </strong>
                {dbUserData.subscription_active ? (
                  <p style={{ color: "green" }}>Active</p>
                ) : (
                  <p style={{ color: "red" }}>Not Active</p>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Notify All Restocks: </strong>
                {dbUserData.notifyAllRestocks ? "Enabled" : "Disabled"}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Products To Alert</strong>
              </ListGroup.Item>
            </ListGroup>
          </Container>
        </Tab>
      </Tabs>
      <Container className="d-flex justify-content-center mt-4">
        <Button onClick={logOut} className=" btn-sm">
          Log Out
        </Button>
      </Container>
    </Container>
  );
};

export default UserPanel;
