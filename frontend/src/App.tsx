

import { BrowserRouter, Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"

const App = () => {
  return (
<div className="min-h-screen bg-base-200 ">
  <Navbar/>
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<HomePage/>}/>
    <Route path="/product/:id" element={<ProductPage/>}/>

  </Routes>
  </BrowserRouter>
</div>
  )
}

export default App