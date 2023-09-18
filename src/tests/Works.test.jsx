import { Works } from "../components/Works";
import { render, screen } from "@testing-library/react";
import { ExpectTypeOf, expect } from "vitest";

describe("Works", () => {
  it("renders an image and work experience correctly", () => {
    const workData = [
      {
        title: "FULL-STACK DEVELOPER",
        period: "Sept. 2022 - Present",
        company: "Smarter Labs",
        description: [
          "Collaborated with other developers to build a react based UI for the online smartlabs. The UI used context API and later changed to use Redux.",
          "Collaborated with other developers to build the smart-labs API with node, express and mongo DB",
          "Deploying using firebase(frontend) and fly.io(backend) plus CI/CD.",
          "Maintaining the codebase, debugging and adding new features",
        ],
      },
      {
        title: "CEO AND FULL-STACK DEVELOPER",
        period: "July. 2021 - Present",
        company: "Hasgotech",
        description: [
          "A self company where I make web apps per client request.",
          "Use of MERN stack with nextjs-13,bootstrap,tailwindcss and other technologies to build both frontend and full stack apps",
          "Hosting of client projects using c-panel-hosting, firebase, vercel, fly.io and render",
        ],
      },
    ];
    // check whether data is an array
    expectTypeOf(workData).toBeArray();

    render(<Works works={workData} />);
    // Assert image presence
    expect(screen.getByAltText("man sitted with laptop")).toBeInTheDocument();

    // Assert that the Works component is rendered
    expect(screen.getByTestId("works")).toBeInTheDocument();

    // Assert that each work record is displayed correctly
    workData.forEach((work) => {
      expect(screen.getByText(work.title)).toBeInTheDocument();
      expect(
        screen.getByText(`${work.period} | ${work.company}`)
      ).toBeInTheDocument();
      work.description.forEach((desc) => {
        expect(screen.getByText(desc)).toBeInTheDocument();
      });
    });
  });
});
