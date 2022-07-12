import { ENDPOINT_TODO } from "../config";

export function getTodos() {
  return fetch(ENDPOINT_TODO).then((response) => response.json());
}

export function createTodo(text) {
  return fetch(ENDPOINT_TODO, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ text }),
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
  });
}

export function deleteTodo(id) {
  return fetch(`${ENDPOINT_TODO}/${id}`, {
    method: "DELETE",
  });
}
