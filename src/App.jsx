import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Productos from "./Productos";
import Forgot from "./Forgot";
import Reset from "./Reset";
import ProductoCreate from "./ProductoCreate";
import ProductoEdit from "./ProductoEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/create" element={<ProductoCreate />} />
        <Route path="/productos/edit/:id" element={<ProductoEdit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset/:id" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
