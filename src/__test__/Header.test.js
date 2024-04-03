import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
      const { getByAltText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>);
      expect(getByAltText("outline of a cat profile and cat tinder in capitalized letters")).toBeInTheDocument();
    });
  });