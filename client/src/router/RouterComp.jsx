import React from "react";
import { ROUTES_ARR } from "./Routes";
import { Routes, Route } from "react-router-dom";

const RouterComp = () => {
  return (
    <>
      <Routes>
        {ROUTES_ARR.map((el) => (
          <Route key={el.path} path={el.path} element={el.element} />
        ))}
      </Routes>
    </>
  );
};

export default RouterComp;
