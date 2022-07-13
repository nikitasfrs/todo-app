import { Typography, Button, Icon, Box, Checkbox } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  todoContainer: {
    borderTop: "1px solid #bfbfbf",
    "&:first-child": {
      margin: 0,
      borderTop: "none",
    },
    "&:hover": {
      "& $deleteTodo": {
        visibility: "visible",
      },
    },
  },
  todoTextCompleted: {
    textDecoration: "line-through",
  },
  deleteTodo: {
    visibility: "hidden",
  },
});

function TodosCard({
  id,
  completed,
  text,
  dueDate,
  onChangeTodoCompleted,
  onDeleteTodo,
}) {
  const classes = useStyles();

  return (
    <Box
      key={id}
      display="flex"
      flexDirection="row"
      alignItems="center"
      pr={1}
      className={classes.todoContainer}
    >
      <Checkbox
        checked={completed}
        onChange={() => onChangeTodoCompleted(id)}
      />
      <Box flexGrow={1}>
        <Typography
          className={completed ? classes.todoTextCompleted : ""}
          variant="body1"
          overflow="hidden"
          textOverflow="ellipsis"
          maxWidth={500}
        >
          {text}
        </Typography>
      </Box>
      <Box mr={1}>
        {dueDate && (
          <Typography variant="body1">Due date: {dueDate}</Typography>
        )}
      </Box>
      <Button
        className={classes.deleteTodo}
        startIcon={<Icon>delete</Icon>}
        onClick={() => onDeleteTodo(id)}
      >
        Delete
      </Button>
    </Box>
  );
}

export default TodosCard;
