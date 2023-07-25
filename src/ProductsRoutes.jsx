import { Route, Routes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage"
import Product from "./Pages/Product"
import NewProduct from "./Pages/NewProduct"
import ProductLayout from "./ProductLayout"

const ProductsRoutes = () => {
  return (
    <>
    <Routes>
        <Route element={<ProductLayout/>}>
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<Product />} />
            <Route path="new" element={<NewProduct />} />
        </Route>
    </Routes>
    </>
  )
}
export default ProductsRoutes