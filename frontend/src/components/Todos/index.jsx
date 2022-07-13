import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";
import TodosError from "./TodosError";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../../services/todos.service";

import { getCurrentDate } from "../../util";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [filterToday, setFilterToday] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getTodos({ dueDate: filterToday ? getCurrentDate() : "" }).then((todos) =>
      setTodos(todos)
    );
  }, [setTodos, filterToday]);

  function updateTodoState(id, newTodo) {
    const newTodos = [...todos];
    const modifiedTodoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[modifiedTodoIndex] = {
      ...newTodo,
    };
    setTodos(newTodos);
  }

  function dispatchRequest(request) {
    setMessage("");
    return request.catch((err) => {
      const message = err.message ? err.message : err;
      setMessage(message);
      return Promise.reject(message);
    });
  }

  function handleAddTodo(opt) {
    dispatchRequest(createTodo(opt)).then((todo) => setTodos([...todos, todo]));
  }

  function handleChangeTodoCompleted(id) {
    const todo = todos.find((todo) => todo.id === id);
    dispatchRequest(updateTodo(id, { completed: !todo.completed })).then(
      (newTodo) => {
        updateTodoState(id, newTodo);
      }
    );
  }

  function handleDeleteTodo(id) {
    dispatchRequest(deleteTodo(id)).then(() =>
      setTodos(todos.filter((todo) => todo.id !== id))
    );
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h3" gutterBottom>
        Todos
      </Typography>
      <TodosError message={message} />
      <TodosInput onAddTodo={handleAddTodo} currentDate={getCurrentDate()} />
      <FormControlLabel
        label="Show only tasks due today"
        control={
          <Checkbox
            checked={filterToday}
            onChange={() => setFilterToday((prev) => !prev)}
          />
        }
      />
      <TodosList
        todos={todos}
        onChangeTodoCompleted={handleChangeTodoCompleted}
        onDeleteTodo={handleDeleteTodo}
      />
    </Container>
  );
}

export default Todos;
