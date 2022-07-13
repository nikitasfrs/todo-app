import TodosList from "./TodosList";
import { render } from "@testing-library/react";

describe("TodosList", () => {
  let props;
  beforeEach(() => {
    props = {
      todos: [],
      onChangeTodoCompleted: jest.fn(),
      onDeleteTodo: jest.fn(),
    };
  });
  it("should render", () => {
    render(<TodosList {...props} />);
  });
});
