import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import * as S from "../components/style/Bottom.style";
import SquareButton from "../../../components/ui/button/SquareButton";
import { BsChat } from "react-icons/bs";

const Bottom = () => {
  // 슬라이더 설정
  const settings = {
    infinite: true,
    speed: 15000, // 슬라이드 전환 속도
    slidesToShow: 4, // 한 번에 보여줄 슬라이드 개수
    autoplay: true, // 자동 슬라이드 활성화
    autoplaySpeed: 0, // 자동 슬라이드 간격
    cssEase: "linear", // 일정한 속도로 움직이도록 설정
  };
  const slideData = [
    {
      id: "1",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "2",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "3",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "4",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "5",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "6",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "7",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "8",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "9",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
    {
      id: "10",

      communityText:
        "커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.커뮤니티에 작성한 글이 보여집니다.",
    },
  ];

  // communityText를 57자 이하로 제한하는 함수
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  // 고정된 배경색을 사용
  const fixedBackgroundColor = "#8e0e28";
  const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    const hue = Math.floor(Math.random() * 360);
    const pastel = `hsl(${hue}, 100%, 80%)`;
    setBackgroundColor(pastel);
  }, []);

  return (
    <S.BottomSlide>
      <Slider {...settings}>
        {slideData.map((slide, index) => {
          const idNumber = parseInt(slide.id);
          const isOdd = idNumber % 2 === 0;
          const boxBgColor = isOdd ? "#d9d9d9" : fixedBackgroundColor; // 홀수이면 그레이, 아니면 기존 색상

          return (
            <S.Bottom key={index}>
              <S.BottomBox $bgColor={boxBgColor} isEven={isOdd}>
                <div>
                  <b>{slide.id}</b>
                  <p>{truncateText(slide.communityText, 57)}</p>
                </div>
                <S.SquareButtonBox>
                  <S.SquareButton>
                    <SquareButton
                      text={"에스프레소"}
                      bgColor={backgroundColor}
                    />
                  </S.SquareButton>
                  <S.SquareButton>
                    <SquareButton text={"헤이즐넛"} bgColor={backgroundColor} />
                  </S.SquareButton>
                  <S.SquareButton>
                    <SquareButton
                      text={"아메리카노"}
                      bgColor={backgroundColor}
                    />
                  </S.SquareButton>
                </S.SquareButtonBox>
                <S.BsChat>
                  <BsChat />
                  <span>11</span>
                </S.BsChat>
              </S.BottomBox>
            </S.Bottom>
          );
        })}
      </Slider>
    </S.BottomSlide>
  );
};

export default Bottom;
