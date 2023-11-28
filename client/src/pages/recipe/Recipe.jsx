import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Recipe.style";
import CategoryButton from "./components/CategoryButton";
import PostList from "./components/PostList";
import PostInput from "./components/PostInput";
import SquareButton from "../../components/ui/button/SquareButton";
import { getAllBoards, getBoard } from "../../api/board";
import { actionGetAllBoards,actionGetBoard } from "../../redux/action/boardAction";

const Recipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allBoards = useSelector((state) => state.board.searchBoards);
  const token = useSelector((state) => state.login.token);
  const [inputQuery, setInputQuery] = useState(null);

  const handleInsert = (value) => {
    setInputQuery(value);
  }

  useEffect(() => {
    const fn = async () => {
      try {
        const boards = await getAllBoards();
        dispatch(actionGetAllBoards(boards));
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
    window.scrollTo(0, 0);
  }, [])

  const hanleClick = (boardId) => {
    const fn = async () => {
      try {
        const board = await getBoard(boardId);
        dispatch(actionGetBoard(board));
        navigate(`/RecipeView/${boardId}`);
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }

  return (
    <S.Background>
      <S.ContainerWrap>
        <S.Container>
          <S.Wrap>
            <S.Title>나만의 꿀조합 공유</S.Title>
            <Link to="/RecipeWrite">
              {token && <SquareButton text={"작성하기"} type={"red"} />}
            </Link>
          </S.Wrap>
          <PostInput
            onInsert={handleInsert}
            input={{
              type: "text",
              placeholder: "검색어를 입력하세요.",
            }}
            button={{
              text: "검색",
              type: "red",
            }}
          />
          <CategoryButton query={inputQuery} />
        </S.Container>
        {Array.isArray(allBoards) &&
          allBoards.map((post) => (
            <S.PostWrap
              key={post._id}
              onClick={() => hanleClick(post._id)}
            >
                <PostList post={post} type={"list"} />
              </S.PostWrap>
          ))}
      </S.ContainerWrap>
    </S.Background>
  );
};

export default Recipe;
