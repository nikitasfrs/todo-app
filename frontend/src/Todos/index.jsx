import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import TodosInput from "./TodosInput";
import TodosList from "./TodosList";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  }, [setTodos]);

  function handleAddTodo(text) {
    fetch("http://localhost:3001/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ text }),
    })
      .then((response) => response.json())
      .then((todo) => setTodos([...todos, todo]));
  }

  function handleChangeTodoCompleted(id) {
    fetch(`http://localhost:3001/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        completed: !todos.find((todo) => todo.id === id).completed,
      }),
    }).then(() => {
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
    fetch(`http://localhost:3001/${id}`, {
      method: "DELETE",
    }).then(() => setTodos(todos.filter((todo) => todo.id !== id)));
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
