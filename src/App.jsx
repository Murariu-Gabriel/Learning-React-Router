import { useState } from 'react'
import Dashboard from "./Pages/Dashboard"
import Categories from "./Pages/Categories"
import ProductPage from "./Pages/ProductPage"
import { Route, Routes } from "react-router-dom"

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/productPage" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
