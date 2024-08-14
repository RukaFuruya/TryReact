import { useState, useCallback } from "react";
import "./index.css";
import { ChildArea } from "./childArea";
// rooterを使えるようにインポートする
// Linkもつけてみる
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import { Routing } from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}
