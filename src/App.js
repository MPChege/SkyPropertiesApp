import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingAbout } from "./components/LandingAbout";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingHome from "./components/LandingHome";
import { SellersHomePage } from "./components/SellersHomePage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LoginPage setUser={setUser} />;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/signup"
          element={<SignUpPage setUser={setUser} />}
        />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/home" element={<LandingHome />} />
        <Route path="/about" element={<LandingAbout />} />
        <Route path="seller" element={<SellersHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
