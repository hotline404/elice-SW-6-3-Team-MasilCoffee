import { useState } from "react";
import { StyleSlide, StyleSlideBox, StyleSlideBoxText } from "../Modal.style";
import { SlideAnimation } from "./SlideAnimation";

function IceOptionSlide() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [selectedIceOption, setSelectedIceOption] = useState(""); // 선택된 얼음 옵션
  const [totalPrice] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const handleIceButtonClick = (option) => {
    setSelectedIceOption(option); // 선택된 옵션 업데이트
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
          <StyleSlideBoxText onClick={handleIceButtonClick}>
            <div>
              <span>얼음</span>
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
                  <button onClick={() => handleIceButtonClick("없음")}>
                    없음
                  </button>
                  <button onClick={() => handleIceButtonClick("적게")}>
                    적게
                  </button>
                  <button onClick={() => handleIceButtonClick("보통")}>
                    보통
                  </button>
                  <button onClick={() => handleIceButtonClick("많이")}>
                    많이
                  </button>
                </>
              )}
            </div>
          </SlideAnimation>
        </div>
      </StyleSlideBox>
    </StyleSlide>
  );
}

export default IceOptionSlide;
