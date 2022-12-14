export function request(url, opt = {}) {
  return fetch(url, opt).then((response) => {
    const responseIsJson = (
      response.headers.get("content-type") || ""
    ).includes("application/json");
    if (responseIsJson) {
      return response.json().then((json) => {
        return response.ok ? json : Promise.reject(json);
      });
    }
    return response.ok ? response : Promise.reject(response);
  });
}

export function getCurrentDate() {
  return new Date().toJSON().slice(0, 10);
}
