import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
const navigate = useNavigate()

useEffect(() => {
  
  setTimeout(() => {
    navigate("/")
  }, 2000)

}, [])



  return <div> 404 NotFound</div>

  // <Navigate to="/" />
}
export default NotFound