import { Container, Image } from "react-bootstrap";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import google from "./src/images/google.webp";

const Subscribe = () => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    given_name: "",
    family_name: "",
  });

  function logOut() {
    googleLogout();
    setUserData({
      email: "",
      name: "",
      given_name: "",
      family_name: "",
    });
  }

  useEffect(() => {}, [userData]);

  return (
    <Container className="bg-light mt-md-3 py-3 rounded w-100 text d-flex flex-column align-items-center justify-content-center">
      {userData.name === "" ? (
        <Container style={{ maxWidth: "950px" }} className="text-center">
          <h1 className="display-6">
            Subscribe Securely with{" "}
            <strong>
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#4285F4" }}>o</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </strong>
          </h1>
          <p className="fs-5">
            Orange Box Alerts takes your privacy seriously and that's why we use
            Google OAuth 2.0.
          </p>
          <p className="fs-6">
            {" "}
            We utilize Google's secure user authentication protocol, so that
            your private data stays private.
          </p>
          <Container className="d-flex flex-column align-items-center justify-content-center mt-4">
            <p>
              <strong>Click below to sign in with Google.</strong>
            </p>
            <GoogleOAuthProvider clientId="550761020124-i556iaj3l2j98erpakq9nor5539tbnmn.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  let decoded = jwtDecode(credentialResponse.credential);
                  const { email, name, given_name, family_name } = decoded;
                  setUserData({
                    email: email,
                    name: name,
                    given_name: given_name,
                    family_name: family_name,
                  });
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
                width="300"
                theme="filled_blue"
                shape="pill"
              />
            </GoogleOAuthProvider>
            <Container className="d-flex justify-content-center mt-0">
              <Image src={google} style={{ maxWidth: "300px" }} />
            </Container>
          </Container>
        </Container>
      ) : (
        <Container className="bg-light mt-md-3 py-3 rounded w-100 ">
          <Container style={{ maxWidth: "950px" }} className="text-center">
            <h1>
              <button onClick={logOut}>Log Out</button>
            </h1>
            <h2>Welcome, {userData.given_name}</h2>
            <h6 className="lead">
              How much is your time worth? We hope at least 15 dollars.
            </h6>
            <p>
              Because that's all we are charging. Only $15 a month for unlimited
              access to restock notifications.
            </p>
          </Container>
          <Container
            className="bg-light mt-md-3 py-3 rounded w-100 text-center"
            style={{ maxWidth: "500px" }}
          ></Container>
          <Container style={{ maxWidth: "600px" }} className="mt-4">
            <h4 className="lead text-center">Frequently Asked Questions</h4>
          </Container>
        </Container>
      )}
    </Container>
  );
};

export default Subscribe;
