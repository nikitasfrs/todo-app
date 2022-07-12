import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../../services/todos.service";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((todos) => setTodos(todos));
  }, [setTodos]);

  function handleAddTodo(text) {
    createTodo(text).then((todo) => setTodos([...todos, todo]));
  }

  function handleChangeTodoCompleted(id) {
    const todo = todos.find((todo) => todo.id === id);
    updateTodo(id, { completed: !todo.completed }).then(() => {
      const newTodos = [...todos];
      const modifiedTodoIndex = newTodos.findIndex((todo) => todo.id === id);
      newTodos[modifiedTodoIndex] = {
        ...newTodos[modifiedTodoIndex],
        completed: !newTodos[modifiedTodoIndex].completed,
      };
      setTodos(newTodos);
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
      <TodosInput onAddTodo={handleAddTodo} />
      <TodosList
        todos={todos}
        onChangeTodoCompleted={handleChangeTodoCompleted}
        onDeleteTodo={handleDeleteTodo}
      />
    </Container>
  );
}

export default Todos;
