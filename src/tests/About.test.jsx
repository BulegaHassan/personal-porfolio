import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About", () => {
  it("renders the About component", () => {
    render(<About />);

    // Assert that the About component is rendered
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  it("renders the heading with the correct text", () => {
    render(<About />);

    // Assert that the heading with the specified text is present
    expect(screen.getByRole("heading")).toBeInTheDocument();

    expect(screen.getByText(/about me/i)).toBeInTheDocument();
  });

  it("renders the paragraph with the correct text", () => {
    render(<About />);

    // Assert that the paragraph with the specified text is present
    expect(
      screen.getByText(
        /my expertise encompasses front-end and back-end development/i
      )
    ).toBeInTheDocument();
  });
});
