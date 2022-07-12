import { useState } from "react";

import { Button, Icon, Paper, Box, TextField } from "@mui/material";

function TodosInput({ onAddTodo }) {
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = (newTodoText) => {
    onAddTodo(newTodoText);
    setNewTodoText("");
  };

  return (
    <Paper p={10}>
      <Box display="flex" flexDirection="row">
        <Box flexGrow={1}>
          <TextField
            fullWidth
            value={newTodoText}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleAddTodo(newTodoText);
              }
            }}
            onChange={(event) => setNewTodoText(event.target.value)}
          />
        </Box>
        <Button
          ml={5}
          startIcon={<Icon>add</Icon>}
          onClick={() => {
            handleAddTodo(newTodoText);
          }}
        >
          Add
        </Button>
      </Box>
    </Paper>
  );
}

export default TodosInput;
