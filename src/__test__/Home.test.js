import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"

describe("<Home />", () => {
    it("renders without crashing", () => {
      const { getByText } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>);
      expect(getByText("Welcome To CatDaddy's")).toBeInTheDocument();
    });
  });