import Dashboard from "./Pages/Dashboard"
import Categories from "./Pages/Categories"
import ProductsPage from "./Pages/ProductsPage"
import Product from "./Pages/Product"
import NewProduct from "./Pages/NewProduct"
import NotFound from "./Pages/NotFound"
import { Link, Route, Routes } from "react-router-dom"
import ProductLayout from "./Productlayout"
import ProductsRoutes from "./ProductsRoutes"

function App() {
  
  return (
    <>
      {/* <Routes 
      // location="/productsPage"
      >
        <Route path="/productsPage" element={<h1>EXTRA CONTENT</h1>} />
      </Routes> */}

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
        <Route path="/productsPage/*" element={<ProductsRoutes/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
