import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homescreen />} />
          <Route exact path="/book" element={<Bookingscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
