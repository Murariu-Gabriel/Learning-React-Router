import Dashboard from "./Pages/Dashboard"
import Categories from "./Pages/Categories"
import NotFound from "./Pages/NotFound"
import { Link, Route, Routes, NavLink, useLocation } from "react-router-dom"

import ProductsRoutes from "./ProductsRoutes"

function App() {
  const location = useLocation()
  console.log(location)
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
            <NavLink 
            // style={({ isActive }) =>{
            //   return isActive ? {color: "red"} : {}
            // }} 
            to="/" >

              {/* {({ isActive }) => {
                return isActive ? "Active Home" : "Home"
              }} */}

              Home
            </NavLink>
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
        <Route path="/productsPage/*" element={<ProductsRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
