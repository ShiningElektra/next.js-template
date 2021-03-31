import { Primary } from "./Button.stories";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders the button in the primary state", () => {
  render(<Primary {...Primary.args} />);
  expect(screen.getByRole("button")).toHaveTextContent("Button");
});
