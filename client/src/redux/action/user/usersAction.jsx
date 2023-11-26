export const initUserSearch = (initData) => ({
  type: "init",
  payload: { initData },
});

export const search = ({ name, phone, nickname }) => ({
  type: "get.search",
  payload: { name, phone, nickname },
});

export const addFilter = (name, pathFn) => ({
  type: "add.filter",
  payload: { name, pathFn },
});

export const removeFilter = (name) => ({
  type: "remove.filter",
  payload: { name },
});

export const getAdmin = (initData) => ({
  type: "get.admin",
  payload: { initData },
});
