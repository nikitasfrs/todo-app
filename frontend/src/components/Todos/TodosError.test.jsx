import TodosError from "./TodosError";
import { render, screen } from "@testing-library/react";

describe("TodosError", () => {
  it("should render when message is provided", () => {
    render(<TodosError message="foobar" />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });
  it("should not render message", () => {
    render(<TodosError />);
    expect(screen.queryByRole("alert")).toBe(null);
  });
});
