export const getUser = (userData) => ({
  type: "get.user",
  payload: { userData },
});

export const postUser = (updateUser) => ({
  type: "post.user",
  payload: { updateUser },
});

// birth: "1945-08-15T00:00:00.000Z";
// createdAt: "2023-11-21T08:18:52.824Z";
// email: "onion@gmail.com";
// name: "양파쿵야";
// nickname: "양파";
// password: "$2b$10$J3AkVgEYvEtZYSIh/pFZCuqH4E.IlQ.uFGJywpyJ2u/tM9.qPEnZO";
// phone: "010-0001-0000";
// role: "User";
// updatedAt: "2023-11-21T08:18:52.824Z";
// __v: 0;
// _id: "655c67ec36ebfc1c8e2f010c";
