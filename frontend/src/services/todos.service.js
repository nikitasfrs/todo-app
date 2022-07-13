import { ENDPOINT_TODO } from "../config";

import { request } from "../util";

export function getTodos(opt = {}) {
  return request(ENDPOINT_TODO + "?" + new URLSearchParams(opt));
}

export function createTodo({ text, dueDate }) {
  return request(ENDPOINT_TODO, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ text, dueDate }),
  });
}

export function updateTodo(id, todo = {}) {
  return request(`${ENDPOINT_TODO}/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(todo),
  });
}

export function deleteTodo(id) {
  return request(`${ENDPOINT_TODO}/${id}`, {
    method: "DELETE",
  });
}
