import React from "react";
import { ROUTES_ARR } from "./Routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";

const RouterComp = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Main />} />

      <Route path="/log-in" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ProductDetail/:id" element={<ProductDetail />} />

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
      <Route path="/admin/user" element={<AdminUser />} /> */}

        {ROUTES_ARR.map((el) => (
          <Route key={el.path} path={el.path} element={el.element} />
        ))}
      </Routes>
    </>
  );
};

export default RouterComp;