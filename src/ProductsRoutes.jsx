import { Route, Routes, useRoutes } from "react-router-dom"
import ProductsPage from "./Pages/ProductsPage"
import Product from "./Pages/Product"
import NewProduct from "./Pages/NewProduct"
import ProductLayout from "./ProductLayout"
import Dashboard from "./Pages/Dashboard"

const ProductsRoutes = () => {
let element = useRoutes([
  {
    path: "/",
    element: <ProductLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: ":id",
        element: <Product />,
      },
      {
        path: "new",
        element: <NewProduct />,
      },
    ],
  },
])


  return (
    <>
      {element}
      {/* <Routes>
        <Route element={<ProductLayout/>}>
            <Route index element={<ProductsPage />} />
            <Route path=":id" element={<Product />} />
            <Route path="new" element={<NewProduct />} />
        </Route>
    </Routes> */}
    </>
  )
}
export default ProductsRoutes