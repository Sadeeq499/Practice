import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add-To-Cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
