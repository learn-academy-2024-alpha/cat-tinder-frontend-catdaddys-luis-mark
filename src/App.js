import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatModel from "./pages/CatModel"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
import loadingCatImage from './assets/loadingcatimage.png'





const App = () => {
  const [cats, setCats] = useState([])
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    getCats()
  }, [])
  const getCats = async () => {
    setIsLoading(true);
    try {
      const getResponse = await fetch("http://localhost:3000/cats")
      if (!getResponse.ok) {
        throw new Error("Error on the get request for cats")
      }
      const getResult = await getResponse.json()
      setCats(getResult)
    } catch (error) {
      alert("Ooops something went wrong:", error.message)
    }finally{
      setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after a delay
      }, 3000); // Adjust the delay time as needed (in milliseconds)
    }
  }


  const createNewCat = async (newCat) => {
    try {
      const postResponse = await fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newCat)
      })
      if (!postResponse.ok) {
        throw new Error("Error on the post request for cats")
      }
      await postResponse.json()
      getCats()
    } catch (error) {
      alert("Ooops something went wrong:", error.message)
    }
  }
  const updateCat = async (editCat, id) => {
    try {
      const patchResponse = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editCat)
      })
      if (!patchResponse.ok) {
        throw new Error("Error on the patch request for cats")
      }
      await patchResponse.json()
      getCats()
    } catch (error) {
      alert("Ooops something went wrong:", error.message)
    }
  }
  const deleteCat = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "DELETE"
      })
      if (!response.ok) {
        throw new Error("Error on cat delete request")
      }
      getCats()
    } catch (error) {
      alert("Oops something went wrong:", error.message)
    }
  }

  if (isLoading) {
    return <div className="loading-screen">
      <img src={loadingCatImage} alt="Loading..." />
    </div>;
  }
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catmodel" element={<CatModel />} />
    <Route path="/catindex" element={<CatIndex cats={cats} />} />
    <Route path="catshow/:id"
          element={<CatShow cats={cats} deleteCat={deleteCat} />}
        />
        <Route
          path="catnew/"
          element={<CatNew cats={cats}createNewCat={createNewCat} />}
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
