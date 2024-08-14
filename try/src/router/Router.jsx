import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../page1DetailA";
import { Page1DetailB } from "../page1DetailB";
import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Routing = () => {
  const navigate = useNavigate();

  const goToPage1 = () => {
    navigate("/page1");
  };

  const goToPage2 = () => {
    navigate("/page2");
  };

  return (
    <div>
      <button onClick={goToPage1}>Go to Page 1</button>
      <button onClick={goToPage2}>Go to Page 2</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />}>
          <Route path="detailA" element={<Page1DetailA />} />
          <Route path="detailB" element={<Page1DetailB />} />
        </Route>
        <Route path="/page2" element={<Page2 />}>
          <Route path=":id" element={<UrlParameter />} />
        </Route>
      </Routes>
    </div>
  );
};
