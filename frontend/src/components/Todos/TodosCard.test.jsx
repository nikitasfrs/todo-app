import TodosCard from "./TodosCard";
import { render, screen, fireEvent } from "@testing-library/react";

describe("TodosCard", () => {
  let props;
  let onChangeTodoCompleted;
  let onDeleteTodo;

  beforeEach(() => {
    onChangeTodoCompleted = jest.fn();
    onDeleteTodo = jest.fn();
    props = {
      id: 1,
      text: "foo",
      dueDate: "2021-12-03",
      completed: true,
      onChangeTodoCompleted,
      onDeleteTodo,
    };
  });
  it("should render", () => {
    render(<TodosCard {...props} />);
    expect(screen.getByLabelText("todo-card")).toBeInTheDocument();
  });
  it("should render text content", () => {
    render(<TodosCard {...props} />);
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });
  it("should render due date", () => {
    render(<TodosCard {...props} />);
    expect(screen.getByText("Due date: " + props.dueDate)).toBeInTheDocument();
  });
  it("should call onDeleteTodo when delete button is clicked", () => {
    render(<TodosCard {...props} />);
    fireEvent.click(screen.getByLabelText("delete button"));
    expect(onDeleteTodo).toHaveBeenCalledWith(props.id);
  });
  it("should call onChangeTodoCompleted when checkbox is clicked", () => {
    render(<TodosCard {...props} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(onChangeTodoCompleted).toHaveBeenCalledWith(props.id);
  });
});
