 
import './App.css';
import Pocetna from './Pocetna';
import Kontakt from './Kontakt';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
 
      
        
         
        <BrowserRouter className="App">
        <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={<Pocetna></Pocetna>}
        />
          
         <Route path="/kontakt" element={<Kontakt></Kontakt>} />
      </Routes>
     
  </BrowserRouter>
  
  );
}

export default App;
