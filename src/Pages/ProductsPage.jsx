import { Link } from "react-router-dom"

const ProductsPage = () => {
  return (
    <>
      <div>ProductsPage</div>

      <Link to="/productsPage/1">Product nr 1</Link>
      <Link to="/productsPage/2">Product nr 2</Link>
    </>
  )
}
export default ProductsPage