import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Currency from "./companent/Currency";
import Finalcurrency from "./companent/Finalcurrency";

function App() {
  <Link to={"/"}></Link>;
  return (
    <Routes>
      <Route path="/" element={<Currency />}></Route>
      <Route path="/final" element={<Finalcurrency />}></Route>
    </Routes>
  );
}

export default App;
