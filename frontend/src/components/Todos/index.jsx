import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../../services/todos.service";

function getCurrentDate() {
  return new Date().toJSON().slice(0, 10);
}

function Todos() {
  const [todos, setTodos] = useState([]);
  const [filterToday, setFilterToday] = useState(false);

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

  function handleAddTodo(opt) {
    createTodo(opt).then((todo) => setTodos([...todos, todo]));
  }

  function handleChangeTodoCompleted(id) {
    const todo = todos.find((todo) => todo.id === id);
    updateTodo(id, { completed: !todo.completed }).then((newTodo) => {
      updateTodoState(id, newTodo);
    });
  }

  function handleDeleteTodo(id) {
    deleteTodo(id).then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h3" gutterBottom>
        Todos
      </Typography>
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
