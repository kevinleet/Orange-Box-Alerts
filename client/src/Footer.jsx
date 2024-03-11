import { Container } from "react-bootstrap";
import linkedin from "./images/LI-Logo.png";
import github from "./images/GitHub_Logo.png";

const Footer = () => {
  return (
    <Container className="text-center mt-2">
      <p
        className="small text-body-secondary small-text"
        style={{ marginBottom: "0" }}
      >
        © Orange Box Alerts 2023
        {/* | Developed By{" "}
        <a href="https://kevinli.boston/" target="_blank">
          Kevin Li
        </a>{" "} */}
      </p>
      {/* <a target="_blank" href="https://github.com/kevinleet">
        <img src={github} style={{ maxHeight: "20px" }} />
      </a>
      {"   "}
      <a target="_blank" href="https://www.linkedin.com/in/kevinli617/">
        <img src={linkedin} style={{ maxHeight: "15px" }} />
      </a> */}
    </Container>
  );
};

export default Footer;
