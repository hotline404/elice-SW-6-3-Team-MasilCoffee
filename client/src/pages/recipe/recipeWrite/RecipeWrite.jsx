import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Background, ContainerWrap, Container, Title } from "../Recipe.style";
import * as S from "./RecipeWrite.style";
import CategoryButton from "../components/CategoryButton";
import FileUpload from "../components/FileUpload";
import SquareButton from "../../../components/ui/button/SquareButton";
import KeywordInput from "../components/KeywordInput";
import { addBoard, updateBoard, getBoard } from "../../../api/board";
import { actionAddBoard, actionUpdateBoard } from "../../../redux/action/boardAction";

const RecipeWrite = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const boardId = location.state && location.state.post;
  const token = useSelector((state) => state.login.token);
  console.log(boardId)
  const [category, setCategory] = useState("");
  const [post, setPost] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [images, setImages] = useState([]);
  const [editBoard, setEditBoard] = useState("");

  useEffect(() => {
    // if (boardId) {
    //   const fn = async () => {
    //     try {
    //       const board = await getBoard(boardId);
    //       setEditBoard(board);
    //       console.log("board", board);
    //       console.log(editBoard)
    //     } catch (err) {
    //       console.log("err", err);
    //     }
    //   };
    //   fn();
    // }
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    const keywordText = keywords.map((keyword) => keyword.text); //keywords에 text만 추출

    formData.append("category", category);
    formData.append("post", post);
    keywordText.forEach((keyword) => {
      formData.append("tags", keyword);
    })
    images.forEach((file, index) => {
      formData.append("file", file);
    });

    for (const pair of formData.entries()) {
      console.log("formDataPair", pair);
    }

    const fn = async () => {
      if (boardId) { //게시글 수정
        try {
          const updatedBoard = await updateBoard(boardId, formData);
          console.log("update", updatedBoard);
          dispatch(actionUpdateBoard(updatedBoard));
        } catch (error) {
          console.error("RecipeWrite.jsx - update", error);
        }
      } else { //게시글 작성
        try {
          const newBoard = await addBoard(token, formData);
          console.log("add", newBoard);
          dispatch(actionAddBoard(newBoard));

          alert("게시글이 등록되었습니다.");
          navigate("/Recipe");
        } catch (error) {
          console.error("RecipeWrite.jsx - add", error);
        }
      }
    };
    fn();
  };

  return (
    <Background>
      <ContainerWrap>
        <Container>
          <Title>나만의 꿀조합 {boardId ? "수정" : "작성"}하기</Title>
          <CategoryButton
            query={"edit"}
            category={category}
            setCategory={setCategory}
            defaultValue={editBoard.category || ""}
          />
          <S.TextArea
            placeholder="글 내용을 입력해주세요."
            defaultValue={editBoard.post || ""}
            onChange={(e) => setPost(e.target.value)}
          />
          <KeywordInput
            keywords={keywords}
            setKeywords={setKeywords}
            defaultValue={editBoard.tags || ""}
          />
          <FileUpload
            images={images}
            setImages={setImages}
            defaultValue={editBoard.image || ""}
          />
          <S.ButtonWrap>
            <SquareButton
              text={boardId ? "수정하기" : "작성하기"}
              type={"red"}
              onClick={handleSubmit}
            />
            <SquareButton
              text={"취소하기"}
              type={"grey"}
              onClick={() => navigate(-1)}
            />
          </S.ButtonWrap>
        </Container>
      </ContainerWrap>
    </Background>
  );
};

export default RecipeWrite;
