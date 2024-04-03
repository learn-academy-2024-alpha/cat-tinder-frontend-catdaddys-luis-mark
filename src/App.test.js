import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const footerImage = screen.getByAltText("small neon cat daddy logo");
  expect(footerImage).toBeInTheDocument();
});
