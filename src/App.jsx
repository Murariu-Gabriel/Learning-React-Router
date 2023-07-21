import Dashboard from "./Pages/Dashboard"
import Categories from "./Pages/Categories"
import ProductsPage from "./Pages/ProductsPage"
import Product from "./Pages/Product"
import NewProduct from "./Pages/NewProduct"
import NotFound from "./Pages/NotFound"
import { Link, Route, Routes } from "react-router-dom"

function App() {
 

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/productsPage/">Products</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/productsPage/:id" element={<Product />} />
        <Route path="/productsPage/new" element={<NewProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
