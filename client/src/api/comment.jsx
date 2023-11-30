import axios from "axios";

//해당 게시글의 댓글 불러오기
export const getComments = async (boardId) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/v1/comment/board/${boardId}`);
    const comments = res.data.data;
    console.log("게시글의 댓글 불러오기", comments);
    return comments;
  } catch (error) {
    console.error("error(getComments)", error);
  }
};

//댓글 작성
export const addComments = async (token, boardId, commentData) => {
  try {
    const res = await axios.post(`http://localhost:5000/api/v1/comment/board/${boardId}`, commentData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const comments = res.data.data;
    console.log("댓글 작성", comments);
    return comments;
  } catch (error) {
    console.error("error(addComments)", error);
  }
};

//댓글 수정
export const updateComments = async (token, commentId, commentData) => {
  try {
    const res = await axios.put(`http://localhost:5000/api/v1/comment/${commentId}`,
    commentData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const comments = res.data.data;
    console.log("댓글 수정", comments);
    return comments;
  } catch (error) {
    console.error("error(updateComments)", error);
  }
};

//댓글 삭제
export const deleteComments = async (token, commentId) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/v1/comment/${commentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const comments = res.data.data;
    console.log("댓글 삭제", comments);
    return comments;
  } catch (error) {
    console.error("error(deleteComments)", error);
  }
};

export const getMyComment = async (token) => {
  const headers = {
    headers : {
      Authorization: `Bearer ${token}`,
    }
  }
  const url = "http://localhost:5000/api/v1/comment/mycomments"
  try {
    const res = await axios.get(url, headers);
    return res
  } catch (err) {
    console.error(err)
  }
}