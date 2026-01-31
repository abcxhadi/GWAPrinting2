import React from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useScroll } from "./hooks/useScroll";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { QuotePage } from "./pages/QuotePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  const scrolled = useScroll();
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-indie-cream">
      <Navbar scrolled={scrolled} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
