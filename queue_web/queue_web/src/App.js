import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CustomerPage } from "./components/CustomerPage";
import { CounterPage } from "./components/CounterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CustomerPage />}></Route>
      <Route path="/counter" element={<CounterPage />}></Route>
    </Routes>
  );
}

export default App;
