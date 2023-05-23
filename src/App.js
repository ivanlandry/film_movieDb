import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Liste1 from "./pages/Liste1";
import Zoom1 from "./pages/Zoom1";
import Zoom2 from "./pages/Zoom2";
import Liste2 from "./pages/Liste2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/liste1" element={<Liste1></Liste1>}></Route>
        <Route path="/zoom1/:id" element={<Zoom1></Zoom1>}></Route>
        <Route path="/liste2" element={<Liste2></Liste2>}></Route>
        <Route path="/zoom2/:id" element={<Zoom2></Zoom2>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
