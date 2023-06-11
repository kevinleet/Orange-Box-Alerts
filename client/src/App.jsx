import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";
import NotFound from "../NotFound";
import RecentRestocks from "../RecentRestocks";
import Pricing from "../Pricing";
import Subscribe from "../Subscribe";

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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
