import styled from "styled-components";

export const SlideAnimation = styled.div`
  @keyframes slideOpen {
    from {
      height: 0;
    }
    to {
      height: 100px; /* 원하는 최대 높이로 조절 */
    }
  }

  @keyframes slideClose {
    from {
      height: 100px;
    }
    to {
      height: 0;
    }
  }

  .slide-panel {
    overflow: hidden;
    height: 0; /* 초기 높이 설정 */
  }

  .slide-panel.slide-open {
    animation: slideOpen 1s ease forwards;
  }

  .slide-panel.slide-close {
    animation: slideClose 1s ease forwards;
  }
`;
