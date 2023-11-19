import React, { Fragment } from "react";
import { ROUTES_ARR } from "./Routes";
import { Routes, Route } from "react-router-dom";
import Headers from "../components/layout/Header/Headers";
import Footer from "../components/layout/Footer/Footer";

const RouterComp = () => {
  return (
    <Fragment>
      <Headers />
      <Routes>
        {ROUTES_ARR.map((el) => (
          <Route key={el.path} path={el.path} element={el.element} />
        ))}
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default RouterComp;
