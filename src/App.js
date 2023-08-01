import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { ProductsWrapper } from "./component/ProductsWrapper";
import { IndexPage } from "./pages/IndexPage";
import { CancelPage } from "./pages/CancelPage";
import { SuccessPage } from "./pages/SuccessPage";
import { NavBar } from "./component/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="cancel" element={<CancelPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
