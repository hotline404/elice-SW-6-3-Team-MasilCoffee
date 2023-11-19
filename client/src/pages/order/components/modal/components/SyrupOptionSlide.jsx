import { useState, useEffect } from "react";
import { StyleSlide, StyleSlideBox, StyleSlideBoxText } from "../Modal.style";
import { SlideAnimation } from "./SlideAnimation";

function SyrupOptionSlide() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [vanilla, setVanilla] = useState(0);
  const [hazelnuts, setHazelnuts] = useState(0);
  const [caramel, setCaramel] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const PRICE = 600; // 샷 하나의 가격

  useEffect(() => {
    setTotalPrice(vanilla * PRICE + hazelnuts * PRICE + caramel * PRICE); // 시럽 수에 따라 가격 업데이트
  }, [vanilla, hazelnuts, caramel]); // 바닐라가 변경될 때만 실행

  const handleShotButtonClick = () => {
    setIsAnimated(!isAnimated);
    if (!isAnimated) {
      setShowContent(true);
    } else {
      setTimeout(() => setShowContent(false), 1000); // 애니메이션이 완료된 후 숨김
    }
  };

  return (
    <StyleSlide>
      <StyleSlideBox isSlideOpen={true}>
        <div>
          <StyleSlideBoxText onClick={() => handleShotButtonClick()}>
            <div>
              <span>시럽</span>
              <span>{totalPrice}원🔽</span>
            </div>
            <i />
          </StyleSlideBoxText>
          <SlideAnimation>
            <div
              className={`slide-panel ${
                isAnimated ? "slide-open" : "slide-close"
              }`}
            >
              {showContent && (
                <>
                  <div>바닐라: {vanilla}</div>
                  <button onClick={() => setVanilla(old => old + 1)}>+</button>
                  <button onClick={() => setVanilla(old => old > 0 ? old - 1 : old)}>-</button>
                  <div>헤이즐넛: {hazelnuts}</div>
                  <button onClick={() => setHazelnuts(old => old + 1)}>+</button>
                  <button onClick={() => setHazelnuts(old => old > 0 ? old - 1 : old)}>-</button>
                  <div>카라멜: {caramel}</div>
                  <button onClick={() => setCaramel(old => old + 1)}>+</button>
                  <button onClick={() => setCaramel(old => old > 0 ? old - 1 : old)}>-</button>
                </>
              )}
            </div>
          </SlideAnimation>
        </div>
      </StyleSlideBox>
    </StyleSlide>
  );
}

export default SyrupOptionSlide;
