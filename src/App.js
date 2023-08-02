import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductsWrapper } from "./component/ProductsWrapper";
import { IndexPage } from "./pages/IndexPage";
import { CancelPage } from "./pages/CancelPage";
import { SuccessPage } from "./pages/SuccessPage";
import { NavBar } from "./component/NavBar";
import { CartModal } from "./component/CartModal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <NavBar showModal={() => setShowModal(true)} />
      <BrowserRouter>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="cancel" element={<CancelPage />} />
        </Routes>
      </BrowserRouter>
      <CartModal open={showModal} close={() => setShowModal(false)} />
    </>
  );
}

export default App;
