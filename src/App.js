import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyReview from "./Pages/Dashboard/MyReview";
import Home from "./Pages/Home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from "./Pages/Home/ProductDetail";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Order from "./Pages/Order/Order";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Users from "./Pages/Dashboard/Users";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import Payment from "./Pages/Dashboard/Payment";
import ProductSell from "./Pages/Dashboard/ProductSell";
import Investment from "./Pages/Dashboard/Investment";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path="/product/:productId" element={
        <RequireAuth>
          <ProductDetail></ProductDetail>
        </RequireAuth>
        }></Route>
        <Route path="/order" element={
        <RequireAuth>
         <Order></Order>
        </RequireAuth>
        }></Route>
        <Route path="/dashboard" element={
        <RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="manageProduct" element={<ManageProduct></ManageProduct>}></Route>
          <Route path="productSell" element={<ProductSell></ProductSell>}></Route>
          <Route path="investment" element={<Investment></Investment>}></Route>
          {/* <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route> */}
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
