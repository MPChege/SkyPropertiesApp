import './App.css';
import './index.css';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
      <Signup />
      <Signin />
    </>
  );
}

export default App;
