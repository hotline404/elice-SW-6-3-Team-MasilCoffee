export const initUserSearch = (initData) => ({
  type: "init",
  payload: { initData }
} )

export const search = (quary) => ({
  type: "get.search",
  payload: { quary }
})

export const addFilter = (name, pathFn) => ({
  type: "add.filter",
  payload: { name, pathFn }
})

export const removeFilter = (name) => ({
  type: "remove.filter",
  payload: { name }
})