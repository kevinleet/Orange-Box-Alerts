import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
import NotFound from "./NotFound";
import RecentRestocks from "./RecentRestocks";
import Pricing from "./Pricing";
import Login from "./Login";
import { useState, useEffect } from "react";
import UserPanel from "./UserPanel";
import Contact from "./Contact";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    given_name: "",
    family_name: "",
  });

  useEffect(() => {
    const loggedInState = localStorage.getItem("isLoggedIn");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const given_name = localStorage.getItem("given_name");
    if (loggedInState == "true") {
      setIsLoggedIn(true);
      setUserData({ email: email, name: name, given_name: given_name });
    }
  }, []);

  return (
    <Router>
      <Nav isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/howitworks" element={<HowItWorks />}></Route>
        <Route path="/recentrestocks" element={<RecentRestocks />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/login"
          element={
            <Login
              userData={userData}
              setUserData={setUserData}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
        <Route
          path="/userpanel"
          element={
            <UserPanel
              userData={userData}
              setUserData={setUserData}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
