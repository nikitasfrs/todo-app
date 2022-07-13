import { ENDPOINT_TODO } from "../config";

export function getTodos(opt = {}) {
  return fetch(ENDPOINT_TODO + "?" + new URLSearchParams(opt)).then(
    (response) => response.json()
  );
}

export function createTodo({ text, dueDate }) {
  return fetch(ENDPOINT_TODO, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ text, dueDate }),
  }).then((response) => response.json());
}

export function updateTodo(id, todo = {}) {
  return fetch(`${ENDPOINT_TODO}/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(todo),
  }).then((response) => response.json());
}

export function deleteTodo(id) {
  return fetch(`${ENDPOINT_TODO}/${id}`, {
    method: "DELETE",
  });
}
