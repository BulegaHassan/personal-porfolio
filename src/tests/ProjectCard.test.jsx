import ProjectCard from "../components/ProjectCard";

import { render, screen } from "@testing-library/react";

describe("ProjectCard", () => {
  it("renders the ProjectCard component with an image", () => {
    const projectData = {
      img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "first project",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
    };

    render(<ProjectCard {...projectData} />);

    // Assert that the ProjectCard component is rendered
    expect(screen.getByTestId("project-card")).toBeInTheDocument();
    // Asert image presence
    expect(screen.getByAltText(projectData.title)).toBeInTheDocument();
    // Assert that specific content within the ProjectCard component is present
    expect(screen.getByAltText(projectData.title)).toBeInTheDocument();
    expect(screen.getByText(projectData.title)).toBeInTheDocument();
    expect(screen.getByText(projectData.text)).toBeInTheDocument();
  });
});
