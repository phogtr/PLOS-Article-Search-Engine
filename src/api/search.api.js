export const getData = (query, startItemIndex, pageSize) => {
  return fetch(`./search?q=title:${query}&start=${startItemIndex}&rows=${pageSize}`).then(
    (response) => response.json()
  );
};
