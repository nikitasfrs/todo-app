import { Paper, Box } from "@mui/material";
import TodosCard from "./TodosCard";

function TodosList({ todos, onChangeTodoCompleted, onDeleteTodo }) {
  return todos.length > 0 ? (
    <Paper mt={10} p={10}>
      <Box display="flex" flexDirection="column" alignItems="stretch">
        {todos.map(({ id, text, completed }) => (
          <TodosCard
            key={id}
            id={id}
            text={text}
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
