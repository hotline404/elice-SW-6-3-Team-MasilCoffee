import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import * as S from "../components/style/Bottom.style";
import SquareButton from "../../../components/ui/button/SquareButton";
import { BsChat } from "react-icons/bs";

const Bottom = () => {
  // 슬라이더 설정
  const settings = {
    dots: false, // 하단의 점 표시 여부
    infinite: false, // 무한 반복 여부
    speed: 500, // 슬라이드 전환 속도
    slidesToShow: 4, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 스크롤할 때 넘어가는 슬라이드 개수
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // 여기에 다른 반응형 설정 추가 가능
    ],
  };
  const slideData = [
    {
      id: "아이디1",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "아이디2",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "아이디3",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "아이디4",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "아이디5",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "아이디6",

      communityText: "다른 커뮤니티 글 내용 ...",
    },
    {
      id: "아이디7",

      communityText: "다른 커뮤니티 글 내용 ...",
    },
    {
      id: "아이디8",

      communityText: "다른 커뮤니티 글 내용 ...",
    },
    {
      id: "아이디9",

      communityText: "다른 커뮤니티 글 내용 ...",
    },
    {
      id: "아이디10",

      communityText: "다른 커뮤니티 글 내용 ...",
    },
  ];
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    const hue = Math.floor(Math.random() * 360);
    const pastel = `hsl(${hue}, 100%, 80%)`;
    setBackgroundColor(pastel);
  }, []);

  return (
    <S.BottomSlide>
      <Slider {...settings}>
        {slideData.map((slide, index) => (
          <S.Bottom key={index}>
            <S.BottomBox bgColor={backgroundColor}>
              <div>
                <b>{slide.id}</b>

                <p>{slide.communityText}</p>
              </div>
              <S.SquareButtonBox>
                <S.SquareButton>
                  <SquareButton text={"에스프레소"} bgColor={backgroundColor} />
                </S.SquareButton>
                <S.SquareButton>
                  <SquareButton text={"헤이즐넛"} bgColor={backgroundColor} />
                </S.SquareButton>
                <S.SquareButton>
                  <SquareButton text={"아메리카노"} bgColor={backgroundColor} />
                </S.SquareButton>
              </S.SquareButtonBox>
              <S.BsChat>
                <BsChat />
                <span>11</span>
              </S.BsChat>
            </S.BottomBox>
          </S.Bottom>
        ))}
      </Slider>
    </S.BottomSlide>
  );
};

export default Bottom;
