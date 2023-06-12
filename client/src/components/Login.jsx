import GoogleLogin from "react-google-login";
import { useState } from "react";

function Login({ onLoginSuccess }) {
  const onSuccess = (res) => {
    console.log(`Login Success!`);
    onLoginSuccess(res);
  };

  const onFailure = (res) => {
    console.log(`Login Failed! res: ${res}`);
  };

  return (
    <div>
      <GoogleLogin
        clientId="550761020124-i556iaj3l2j98erpakq9nor5539tbnmn.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
