import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import ProductListPage from "./components/pages/ProductListPage";
import CheckoutPage from "./components/pages/CheckoutPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductListPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
