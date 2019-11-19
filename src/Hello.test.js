import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import Hello from "./Hello";

describe("Fron-End Unit Test.", () => {
  it("should show 'Hello Marco!' on the page.", () => {
    const { getByText } = render(<Hello />);
    expect(getByText("Hello Marco Polo!")).toBeInTheDocument();
  });
});
