import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Currency from "./companent/Currency";

function App() {
  <Link to={"/"}></Link>;
  return (
    <Routes>
      <Route path="/" element={<Currency />}></Route>
    </Routes>
  );
}

export default App;
