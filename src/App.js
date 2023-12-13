import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Purchase from "./pages/Purchase";
import Main from "./pages/Main";
import Racing from "./pages/Racing";
import Beverages from "./pages/Beverages";
import Header from "./components/header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/about/drink" element={<About />}></Route>
        <Route exact path="/purchase/product" element={<Purchase />}></Route>
        <Route exact path="/racing/team" element={<Racing />}></Route>
        <Route exact path="/our/beverages" element={<Beverages />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
