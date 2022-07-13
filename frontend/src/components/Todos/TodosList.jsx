import { Paper, Box } from "@mui/material";
import TodosCard from "./TodosCard";

function TodosList({ todos, onChangeTodoCompleted, onDeleteTodo }) {
  return todos.length > 0 ? (
    <Paper sx={{ mt: "10px" }}>
      <Box display="flex" flexDirection="column" alignItems="stretch">
        {todos.map(({ id, text, dueDate, completed }) => (
          <TodosCard
            key={id}
            id={id}
            text={text}
            dueDate={dueDate}
            completed={completed}
            onChangeTodoCompleted={onChangeTodoCompleted}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </Box>
    </Paper>
  ) : null;
}

export default TodosList;
