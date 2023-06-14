import {
  Container,
  Button,
  Tab,
  Tabs,
  ListGroup,
  Card,
  Row,
  Table,
  Form,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserPanel = ({ userData, setUserData, isLoggedIn, setIsLoggedIn }) => {
  const [productToAdd, setProductToAdd] = useState("");
  const [users, setUsers] = useState([]);
  const [subscriptionStatus, setSubscriptionStatus] = useState({});
  const [products, setProducts] = useState([]);
  const [dbData, setDbData] = useState({
    subscription_active: "",
    notify_all_restocks: "",
    products_to_alert: [],
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      getDatabaseData();
    }
  }, [isLoggedIn]);
  function logOut() {
    setUserData({
      email: "",
      name: "",
      given_name: "",
      family_name: "",
    });
    setDbData({
      subscription_active: "",
      notify_all_restocks: "",
      products_to_alert: [],
    });
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
  }
  async function getDatabaseData() {
    let response = await axios.get(`api/users?email=${userData.email}`);
    const {
      _id,
      subscription_active,
      notify_all_restocks,
      productsToAlert,
      admin,
    } = response.data[0];
    if (productsToAlert.length == 0) {
      setDbData({
        id: _id,
        subscription_active: subscription_active,
        notify_all_restocks: notify_all_restocks,
        products_to_alert: [],
        admin: admin,
      });
    } else {
      setDbData({
        id: _id,
        subscription_active: subscription_active,
        notify_all_restocks: notify_all_restocks,
        products_to_alert: productsToAlert,
        admin: admin,
      });
    }
  }

  async function enableAllRestocks() {
    try {
      await axios.put(`api/users/1`, {
        email: userData.email,
        notify_all_restocks: "true",
      });
      getDatabaseData();
    } catch (error) {
      console.log(error);
    }
  }
  async function disableAllRestocks() {
    try {
      await axios.put(`api/users/1`, {
        email: userData.email,
        notify_all_restocks: "false",
      });
      getDatabaseData();
    } catch (error) {
      console.log(error);
    }
  }

  async function enableProductAlert(id) {
    try {
      await axios.put(`api/users/2`, {
        email: userData.email,
        action: "add",
        product: id,
      });
      await axios.put("api/products", {
        action: "add",
        product: id,
        user: dbData.id,
      });
      getDatabaseData();
    } catch (error) {
      console.log(error);
    }
  }

  async function disableProductAlert(id) {
    try {
      await axios.put(`api/users/2`, {
        email: userData.email,
        action: "remove",
        product: id,
      });
      await axios.put("api/products", {
        action: "remove",
        product: id,
        user: dbData.id,
      });
      getDatabaseData();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  async function activateUser(id) {
    console.log(`activating user: ${id}`);
    await axios.put(`api/users/3`, {
      id: id,
      action: "activate",
    });
    setSubscriptionStatus({
      ...subscriptionStatus,
      [id]: "true",
    });
  }

  async function deactivateUser(id) {
    console.log(`deactivating user: ${id}`);
    await axios.put(`api/users/3`, {
      id: id,
      action: "deactivate",
    });
    setSubscriptionStatus({
      ...subscriptionStatus,
      [id]: "false",
    });
  }

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
        for (const user of response.data) {
          setSubscriptionStatus({
            ...subscriptionStatus,
            [user._id]: user.subscription_active,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("handle submit triggered");
    console.log(event.target);
    try {
      if (event.target.name == "add") {
        console.log('add detected"');
        await axios.post("/api/products", {
          name: productToAdd,
        });
      } else if (event.target.name == "remove") {
        console.log("remove detected");
        console.log(`removing: ${productToAdd}`);
        await axios.delete("/api/products", {
          data: { name: productToAdd },
        });
      }
      setProductToAdd("");
    } catch (error) {
      console.log(error);
    }
  }
  // async function removeProduct(event) {
  //   event.preventDefault();

  //   try {

  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
            <p className="fs-6 mt-3">
              Once your payment is successfully processed, your account status
              will be updated to 'active,' granting you access to customize your
              notification settings. You will then start receiving restock alert
              notifications promptly whenever they occur. This ensures that you
              never miss out on any important updates!
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
          disabled={dbData.subscription_active !== "true"}
        >
          <Container>
            <Container className="mt-4 text-center">
              <Row className="justify-content-center">
                <Card style={{ width: "24rem" }}>
                  <Card.Body>
                    <Card.Title>Notify All Restocks</Card.Title>
                    <Card.Text>
                      Enable instant email notifications for all product
                      restocks!
                    </Card.Text>
                    {dbData.notify_all_restocks != "true" ? (
                      <Button
                        variant="danger"
                        className="btn-lg"
                        onClick={enableAllRestocks}
                      >
                        Disabled
                      </Button>
                    ) : (
                      <Button
                        variant="success"
                        className="btn-lg"
                        onClick={disableAllRestocks}
                      >
                        Enabled
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Row>
            </Container>
            <hr />

            <Container>
              <Row className="justify-content-center text-center">
                <p className="lead">Individual Product Alerts</p>
                {products.map((item) => (
                  <Card style={{ width: "14rem" }} className="m-2">
                    <Card.Body>
                      <Card.Title>
                        <span className="fs-6">{item.name} </span>
                      </Card.Title>
                      {dbData.products_to_alert.includes(item._id) ? (
                        <Button
                          variant="success"
                          className="btn-sm"
                          onClick={() => disableProductAlert(item._id)}
                        >
                          Enabled
                        </Button>
                      ) : (
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => enableProductAlert(item._id)}
                        >
                          Disabled
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                ))}
              </Row>
            </Container>
          </Container>
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
                {dbData.subscription_active != "true" ? (
                  <span style={{ color: "red" }}>Not Active</span>
                ) : (
                  <span style={{ color: "green" }}>Active</span>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Notify All Restocks: </strong>
                {dbData.notify_all_restocks != "true" ? (
                  <span style={{ color: "red" }}>Disabled</span>
                ) : (
                  <span style={{ color: "green" }}>Enabled</span>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Products To Alert: </strong>
              </ListGroup.Item>
            </ListGroup>
          </Container>
        </Tab>
        {dbData.admin != "true" ? null : (
          <Tab eventKey="admin" title="Admin">
            <Container style={{ maxWidth: "950px" }} className="text-center">
              <Tabs
                defaultActiveKey="manage_users"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="manage_users" title="Manage Users">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Subscription Status</th>
                        <th>Manage User</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr>
                          <td>{index}</td>
                          <td>{user.email}</td>
                          <td>{user.first_name}</td>
                          <td>{user.last_name}</td>
                          <td>
                            {subscriptionStatus[user._id] != "true"
                              ? "Not Active"
                              : "Active"}
                          </td>
                          <td>
                            {subscriptionStatus[user._id] != "true" ? (
                              <Button
                                className="btn-sm btn-success"
                                onClick={() => activateUser(user._id)}
                              >
                                Activate Subscription
                              </Button>
                            ) : (
                              <Button
                                className="btn-sm btn-danger"
                                onClick={() => deactivateUser(user._id)}
                              >
                                Deactivate Subscription
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="add_products" title="Manage Alertable Products">
                  <Container
                    style={{ maxWidth: "950px" }}
                    className="text-center d-flex flex-column align-items-center justify-content-center py-5 m-2"
                  >
                    <Form>
                      <Form.Group
                        style={{ maxWidth: "400px" }}
                        className="mb-3"
                      >
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                          placeholder="Enter product name"
                          onChange={(e) => setProductToAdd(e.target.value)}
                          value={productToAdd}
                        />
                      </Form.Group>
                      <Button
                        variant="success"
                        type="submit"
                        name="add"
                        className="mx-2"
                        onClick={handleSubmit}
                      >
                        Add Product
                      </Button>
                      <Button
                        variant="danger"
                        type="submit"
                        name="remove"
                        className="mx-2"
                        onClick={handleSubmit}
                      >
                        Remove Product
                      </Button>
                    </Form>
                  </Container>
                </Tab>
              </Tabs>
            </Container>
          </Tab>
        )}
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
