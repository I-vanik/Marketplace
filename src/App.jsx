import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import HeadeLogoField from "./components/Header-logo-field/HeaderLogoField";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agro from "./components/agroStore/Agro";
import { Item } from "./components/Item";

function App() {
  return (


    <>
      <div>
        {/* <Header /> Перенес его внутрь MAIN */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/agroStore" element={<Agro />} />
          </Routes>
        </Router>

        {/* <Footer /> Перенес его внутрь MAIN */}
      </div>
    </>

  );
}

export default App;
