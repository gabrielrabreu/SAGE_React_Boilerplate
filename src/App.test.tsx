import { render } from "@testing-library/react";

import App from "./App";

describe("App Component", () => {
  test("renders the title correctly", () => {
    const { getByTestId } = render(<App />);

    const titleElement = getByTestId("title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent("Hello World!");
  });
});
