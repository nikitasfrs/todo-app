import { Typography, Button, Icon, Box, Checkbox } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  todoContainer: {
    borderTop: "1px solid #bfbfbf",
    marginTop: 5,
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
      className={classes.todoContainer}
    >
      <Checkbox
        checked={completed}
        onChange={() => onChangeTodoCompleted(id)}
      ></Checkbox>
      <Box flexGrow={1}>
        <Typography
          className={completed ? classes.todoTextCompleted : ""}
          variant="body1"
        >
          {text}
        </Typography>
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
