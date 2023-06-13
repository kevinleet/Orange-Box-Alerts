import { Container, Image, Button } from "react-bootstrap";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import google from "./src/images/google.webp";
import { useNavigate } from "react-router-dom";

const Login = ({ userData, setUserData, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/userpanel");
    } else {
      googleLogout();
    }
  }, [isLoggedIn]);

  return (
    <Container className="bg-light mt-md-3 py-3 rounded w-100 text d-flex flex-column align-items-center justify-content-center">
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
          We leverage Google OAuth 2.0 for user authentication, ensuring a
          convenient and secure login experience for our users by leveraging
          Google's robust authentication infrastructure and trusted user
          identity verification.
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
                setIsLoggedIn(true);
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
          <Container className="d-flex justify-content-center mt-4">
            <Image src={google} style={{ maxWidth: "300px" }} />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Login;
