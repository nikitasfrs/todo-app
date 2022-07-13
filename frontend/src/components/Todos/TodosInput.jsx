import { useState } from "react";

import { Button, Icon, Paper, Box, TextField } from "@mui/material";

function TodosInput({ onAddTodo, currentDate }) {
  const [newTodoText, setNewTodoText] = useState("");
  const [dueDate, setDueDate] = useState(currentDate);

  const handleAddTodo = (opt) => {
    onAddTodo(opt);
    setNewTodoText("");
  };

  return (
    <Paper p={10}>
      <Box display="flex" flexDirection="row">
        <TextField
          fullWidth
          placeholder="Todo"
          value={newTodoText}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleAddTodo({ text: newTodoText, dueDate });
            }
          }}
          onChange={(event) => setNewTodoText(event.target.value)}
        />
        <TextField
          placeholder="Date"
          fullWidth
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
        <Button
          ml={5}
          startIcon={<Icon>add</Icon>}
          onClick={() => {
            handleAddTodo({ text: newTodoText, dueDate });
          }}
        >
          Add
        </Button>
      </Box>
    </Paper>
  );
}

export default TodosInput;
