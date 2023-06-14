import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className=" mt-md-3 pt-3 text-center">
      <h1 className="display-6">
        <strong>404: Page Not Found</strong>
      </h1>
      <p className="small">
        The page that you have requested could not be found.
      </p>
    </Container>
  );
};

export default NotFound;
