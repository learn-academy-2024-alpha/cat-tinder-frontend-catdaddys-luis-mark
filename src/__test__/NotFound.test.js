import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
    it("renders without crashing", () => {
      const { getByText } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>);
      expect(getByText("Meow! Cat Not Found!")).toBeInTheDocument();
    });
  });