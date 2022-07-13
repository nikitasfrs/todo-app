import { Alert } from "@mui/material";

function TodosError({ message }) {
  return message ? (
    <Alert sx={{ my: 2 }} variant="filled" severity="error">
      {message}
    </Alert>
  ) : null;
}

export default TodosError;
