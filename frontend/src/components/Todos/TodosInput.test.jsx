import TodosInput from "./TodosInput";
import { render } from "@testing-library/react";

describe("TodosInput", () => {
  let props;
  let onAddTodo;

  beforeEach(() => {
    onAddTodo = jest.fn();
    props = {
      todos: [],
      onAddTodo,
      currentDate: "2021-2-3",
    };
  });
  it("should render", () => {
    render(<TodosInput {...props} />);
  });
});
