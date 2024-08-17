import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetail";
import Profile from "./Profile";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
