// Hero.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

describe("Hero", () => {
  it("renders the Hero component", () => {
    render(<Hero />);

    // Assert that the Hero component is rendered
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  it("renders the heading with the correct text", () => {
    render(<Hero />);

    // Assert that the heading with the specified text is present
    expect(screen.getByRole("heading")).toBeInTheDocument();

    expect(screen.getByText(/i'm hassan bulega/i)).toBeInTheDocument();
  });

  it("renders the subtitle with the correct text", () => {
    render(<Hero />);

    // Assert that the subtitle with the specified text is present
    expect(screen.getByText("Full Stack Engineer")).toBeInTheDocument();
  });

  it("renders the paragraph with the correct text", () => {
    render(<Hero />);

    // Assert that the paragraph with the specified text is present
    expect(
      screen.getByText(/turning ideas into exciting and interactive reality/i)
    ).toBeInTheDocument();
  });

  it("has valid links and renders social media icons", () => {
    render(<Hero />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
    });
    // Assert that social media icons are present
    expect(screen.getByTestId("github-icon")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin-icon")).toBeInTheDocument();
    expect(screen.getByTestId("twitter-icon")).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<Hero />);

    // Assert that the image is present
    expect(
      screen.getByAltText("man coding on a laptop with an extended screen")
    ).toBeInTheDocument();
  });
});
