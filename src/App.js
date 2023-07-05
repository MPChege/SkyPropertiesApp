import Topbar from "./components/topbar/topbar";
import Contact from "./components/contact/contact";
import Form from "./components/form/form";
import Profile from "./components/profile/profile";
import Search from "./components/search/search";
import Houses from "./components/houses/houses";


import './App.css';

function App() {
  return (

    <div className="app">

      <Topbar/>
      
   <div className="sections">
      <Contact/>
      <Form/>
      <Houses/>
      <Search/>
      <Profile/>
      </div>
   
    </div>
    

    
  );
}

export default App;
