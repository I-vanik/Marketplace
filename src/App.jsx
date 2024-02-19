import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import HeadeLogoField from "./components/Header-logo-field/HeaderLogoField";
import { BrowserRouter as  Router, Routes, Route   } from 'react-router-dom';
import Agro from "./components/agroStore/Agro";

function App() {
  return (

    
     <>
    <div className="header-logo">
      <div className="header-logo-field">
        <HeadeLogoField/>
       </div>

      <div className="wrapper"> 
        <Header/> 
        <Router>
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route path="/agroStore" element={<Agro/>} />
          </Routes>
        </Router>

        <Footer/>
      </div>
    </div>
    </>
    
  );
}

export default App;
