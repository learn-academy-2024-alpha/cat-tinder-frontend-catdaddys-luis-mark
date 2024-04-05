import React, { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import mockCats from "./mockCats"

const App = () => {
  const [cats, setCats] = useState(mockCats)
  const createNewCat = (newCat) => {
    console.log(newCat)
  }
  const updateCat = (editCat, id) => {
    console.log(editCat, id)
  }
  const deleteCat = (id) => {
    console.log(id)
  }
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catindex" element={<CatIndex cats={cats} />} />
    <Route
          path="catshow/:id"
          element={<CatShow cats={cats} deleteCat={deleteCat} />}
        />
    <Route
          path="catnew/"
          element={<CatNew createNewCat={createNewCat} />}
        />
    <Route
          path="catedit/:id"
          element={<CatEdit cats={cats} updateCat={updateCat} />}
        />
    <Route path="*" element={<NotFound />} />
  </Routes>
    <Footer />
    </>
    )
}

export default App;
