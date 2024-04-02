import React, { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatEdit from "./pages/CatEditPage"
import CatIndex from "./pages/CatIndexPage"
import CatNew from "./pages/CatNewPage"
import CatShow from "./pages/CatShowPage"
import Home from "./pages/HomePage"
import NotFound from "./pages/NotFoundPage"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import mockCats from "./mockCats"

const App = () => {
  const [cats, setCats] = useState(mockCats)
  console.log(cats)
  return (
    <>
    <Header />
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/cat-index" element={<CatIndex />} />
    <Route path="/cat-show" element={<CatShow />} />
    <Route path="/cat-new" element={<CatNew />} />
    <Route path="/cat-edit" element={<CatEdit />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
    <Footer />
    </>
    )
}

export default App;
