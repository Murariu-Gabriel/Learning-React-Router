import { Link, Outlet } from "react-router-dom"

const ProductLayout = () => {
  return (
    <>
      <Link to="/productsPage/1">Product nr 1</Link>
      <br />
      <Link to="/productsPage/2">Product nr 2</Link>
      <br />
      <Link to="/productsPage/new">New Product</Link>
      <Outlet context={{logic: "SomeFunction"}}/>
    </>
  )
}
export default ProductLayout
