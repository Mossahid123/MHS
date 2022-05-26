import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddReviews from './Pages/Dashboard/AddReviews';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageOrders from './Pages/AddProduct/ManageOrders';
import ManageProducts from './Pages/AddProduct/ManageProducts';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Shared/Navbar';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:partId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='my-review' element={<AddReviews></AddReviews>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path='making-admin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        </Route>
        <Route path='add-product' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
        <Route path='manage-orders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
        <Route path='manage-product' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
