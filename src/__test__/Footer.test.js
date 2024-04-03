import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

describe("<Footer />", () => {
    it("renders without crashing", () => {
      const { getByAltText } = render( 
      <BrowserRouter>
        <Footer />
      </BrowserRouter>);
      expect(getByAltText("small neon cat daddy logo")).toBeInTheDocument();
    });
  });