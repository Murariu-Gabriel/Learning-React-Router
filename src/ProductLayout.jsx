import { Link, Outlet, useSearchParams } from "react-router-dom"

const ProductLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({search: 0})
  const number = searchParams.get("search")

  return (
    <>
      <Link to="/productsPage/1">Product nr 1</Link>
      <br />
      <Link to="/productsPage/2">Product nr 2</Link>
      <br />
      <Link to="/productsPage/new">New Product</Link>
      <Outlet context={{logic: "SomeFunction"}}/>
      <input type="number"
      value={number}
      onChange = {e => setSearchParams({search: e.target.value})}
      />
    </>
  )
}
export default ProductLayout
