
import Main from "./components/Main/Main";
import { BrowserRouter as  Router, Routes, Route   } from 'react-router-dom';
import Agro from "./components/agroStore/Agro";

function App() {
  return (
     <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route path="/agroStore" element={<Agro/>} />
          </Routes>
        </Router>
      </div>
    </>
    
  );
}

export default App;
