import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [user, setUser] = useState(null)

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
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/signup" element={<SignUpPage setUser={setUser}/>} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        {/* <Route path='/seller' element={<SellerHomePgae /> }/> */}
        {/* <Route path='/buyer' element={<BuyerHomePage /> }/> */}
      </Routes>
      
    </Router>
    </>
  );

}


export default App;