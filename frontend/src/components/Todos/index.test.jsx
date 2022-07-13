import Todos from "./index";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import * as service from "../../services/todos.service";

const mockPromise = () => jest.fn(() => Promise.resolve({}));
describe("Todos", () => {
  let props = {
    todos: [],
    onChangeTodoCompleted: jest.fn(),
    onDeleteTodo: jest.fn(),
  };
  beforeEach(() => {
    service.getTodos = mockPromise();
    service.createTodo = mockPromise();
    service.updateTodo = mockPromise();
    service.deleteTodo = mockPromise();
  });
  it("should render", async () => {
    render(<Todos {...props} />);
    await act(async () => {
      await service.getTodos;
    });
  });
});
