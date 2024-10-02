import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CuratedWork from "./components/CuratedWork";


function App() {
  return (

    <Router>
      
      <Routes>
        <Route path="" element={<>
          <Navbar />
          <Home />
          <CuratedWork />
        </>} />
      </Routes>
    </Router>

  )
}

export default App;