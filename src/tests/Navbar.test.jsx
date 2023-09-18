import Navbar from "../components/Navbar";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

describe("Navbar", () => {
  test("renders without errors", () => {
    render(<Navbar />);
    
    expect(screen.getByText("FullStack")).toBeInTheDocument();
  });

  test("renders navigation links correctly", () => {
    render(<Navbar />);

    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
    });

    expect(screen.getByText("home")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
    expect(screen.getByText("skills")).toBeInTheDocument();
    expect(screen.getByText("projects")).toBeInTheDocument();
    expect(screen.getByText("testimonials")).toBeInTheDocument();
  });

  test("renders the Switcher component within the Navbar", () => {
    render(<Navbar />);
    expect(screen.getByTestId("switcher")).toBeInTheDocument();
  });
});
