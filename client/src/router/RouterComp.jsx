import React, { Fragment } from "react";
import { ROUTES_ARR } from "./Routes";
import { Routes, Route } from "react-router-dom";
import Headers from "../components/layout/Header/Headers";
import Footer from "../components/layout/Footer/Footer";
import { useLocation } from "react-router-dom";

const RouterComp = () => {
  const location = useLocation().pathname;

  console.log("location", location);

  return (
    <Fragment>
      <Headers location={location} />
      <Routes>
        {ROUTES_ARR.map((el) => (
          <Route key={el.path} path={el.path} element={el.element} />
        ))}
      </Routes>
      <Footer location={location} />
    </Fragment>
  );
};

export default RouterComp;
