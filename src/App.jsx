import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
  return (

    <Router>
      
      <Routes>
        <Route path="" element={<>
          <Navbar />
          <Home />
        </>} />
      </Routes>
    </Router>

  )
}

export default App;