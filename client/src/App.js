import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import RecentRestocks from "./RecentRestocks";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Subscribe from "./Subcribe";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/howitworks" element={<HowItWorks />}></Route>
        <Route path="/recentrestocks" element={<RecentRestocks />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/subscribe" element={<Subscribe />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
