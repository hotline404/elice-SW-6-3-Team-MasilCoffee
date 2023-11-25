import React, { useState } from "react";

import Button from "../../../../components/ui/button/Button";
import Modal from "../../components/modal/Modal";
import { StyledCard, StyledText, StyledButtonText } from "./Card.style";
import ModalContents from "../modalcontents/ModalContents";

const Card = ({ data }) => {
  // 카드 클릭 시 추천 꿀 조합 텍스트와 주문하기 버튼 나옴
  const [clickMenu, setClickMenu] = useState(false);
  const handleClickMenu = () => {
    setClickMenu(!clickMenu);
  };
  // 모달 상태 변경
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="card">
      <StyledCard onClick={handleClickMenu} $clickMenu={clickMenu}>
        {clickMenu && (
          <StyledButtonText>
            <div>
              <b>추천 꿀 조합</b>
              <p>{data.bestCombo}</p>
            </div>

            <Button type="white" text={"주문하기"} onClick={openModal} />
          </StyledButtonText>
        )}
      </StyledCard>
      <StyledText>
        {isModalOpen && (
          <Modal openModal={openModal} closeModal={closeModal}>
            <ModalContents data={data} />
          </Modal>
        )}

        <b>{data.name}</b>
        <p>{data.info}</p>
        <p>칼로리 : {data.kcal}</p>
      </StyledText>
    </div>
  );
};

export default Card;
