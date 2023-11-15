import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/main/Main";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import PaymentDone from "./pages/payment/PaymentDone";

import Recipe from "./pages/recipe/Recipe";
import RecipeView from "./pages/recipe/RecipeView";
import RecipeWrite from "./pages/recipe/RecipeWrite";

import MyPage from "./pages/mypage/MyPage";
import UserInfoChange from "./pages/mypage/UserInfoChange";
import ConfirmPassword from "./pages/mypage/ConfirmPassword";
import OrderDetails from "./pages/mypage/OrderDetails";
import WriteList from "./pages/mypage/WriteList";
import CommentList from "./pages/mypage/CommentList";

import AdminOrder from "./pages/admin/adminOrder/AdminOrder";
import AdminMenu from "./pages/admin/AdminMenu";
import AdminUser from "./pages/admin/AdminUser";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentDone" element={<PaymentDone />} />

        <Route path="/recipe/recipe" element={<Recipe />} />
        <Route path="/recipe/recipeView" element={<RecipeView />} />
        <Route path="/recipe/recipeWrite" element={<RecipeWrite />} />

        <Route path="/myPage" element={<MyPage />} />
        <Route path="/mypage/userInfoChange" element={<UserInfoChange />} />
        <Route path="/mypage/confirmPassword" element={<ConfirmPassword />} />
        <Route path="/mypage/orderDetails" element={<OrderDetails />} />
        <Route path="/mypage/writeList" element={<WriteList />} />
        <Route path="/mypage/commentList" element={<CommentList />} />

        <Route path="/admin/order" element={<AdminOrder />} />
        <Route path="/admin/menu" element={<AdminMenu />} />
        <Route path="/admin/user" element={<AdminUser />} />
      </Routes>
    </Router>
  );
}

export default App;
