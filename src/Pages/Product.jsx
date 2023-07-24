import { useOutletContext, useParams } from "react-router-dom"

const Product = () => {
   const {id} = useParams()
   const someFunc = useOutletContext()
  return (
    <div>Product {id}, {someFunc.logic}</div>
  )
}
export default Product