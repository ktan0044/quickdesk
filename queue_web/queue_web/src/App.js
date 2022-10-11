import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CustomerPage } from "./components/CustomerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CustomerPage />}></Route>
    </Routes>
  );
}

export default App;
