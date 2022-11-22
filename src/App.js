import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Pages/Home/ProductDetail";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/product/:productId" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
