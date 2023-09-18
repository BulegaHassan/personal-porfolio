import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  test("renders the copyright text", () => {
    render(<Footer />);

    // Assert that the copyright text is present
    expect(screen.getByText(/ all rights reserved./i)).toBeInTheDocument();
  });

  test("renders contact information links", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
    });
    // Assert that contact information links are present
    // expect(screen.getByText("0789447622")).toHaveLength(10)
    expect(screen.getByText("0789447622")).toBeInTheDocument();
    expect(screen.getByText("hassanbulega@gmail.com")).toBeInTheDocument();
  });

  test("renders social media icons", () => {
    render(<Footer />);

    // Assert that social media icons are present
    expect(screen.getByTestId("github-icon")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin-icon")).toBeInTheDocument();
    expect(screen.getByTestId("twitter-icon")).toBeInTheDocument();
  });
});
