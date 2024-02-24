
import Main from "./components/Main/Main";
import { BrowserRouter as  Router, Routes, Route   } from 'react-router-dom';
import Agro from "./components/agroStore/Agro";
import SubAgro from "./components/subAgro/subAgro";


function App() {
  return (
     <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main/>} />
            <Route path="/agroStore" element={<Agro/>} />
            <Route path="/SubAgro" element={<SubAgro/>} />
          </Routes>
        </Router>
      </div>
    </>
    
  );
}

export default App;
