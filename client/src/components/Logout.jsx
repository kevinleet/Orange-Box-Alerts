import { GoogleLogout } from "react-google-login";

function Logout() {
  const onSuccess = (res) => {
    console.log("Log out successful!");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId="550761020124-i556iaj3l2j98erpakq9nor5539tbnmn.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
