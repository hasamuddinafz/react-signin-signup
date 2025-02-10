import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
