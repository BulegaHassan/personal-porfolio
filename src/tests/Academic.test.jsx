import { Academic } from "../components/Academic";
import { render, screen } from "@testing-library/react";
import {expectTypeOf} from "vitest";

describe("Academic", () => {
  it("renders an image and academic records correctly", () => {
    const academicData = [
      {
        course: "BSc Physics & Mathematics with Education",
        date: "2015-2019",
        institution: "Makerere University",
      },
      {
        course: "Uganda Advanced Certificate of Education",
        date: "2012-2013",
        institution: "Gayaza Cambridge College",
      },
    ];
    // check whether data is an array
    expectTypeOf(academicData).toBeArray();
    
    render(<Academic academic={academicData} />);
    // Assert image presence
    expect(screen.getByAltText("man reading a math book")).toBeInTheDocument();

    // Assert that the Academic component is rendered
    expect(screen.getByTestId("academic")).toBeInTheDocument();

    // Assert that each academic record is displayed correctly
    academicData.forEach((record) => {
      expect(screen.getByText(record.course)).toBeInTheDocument();
      expect(screen.getByText(record.date)).toBeInTheDocument();
      expect(screen.getByText(record.institution)).toBeInTheDocument();
    });
  });
});
