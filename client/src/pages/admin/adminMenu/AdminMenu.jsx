import React, { useState } from "react";
import * as Menus from "./AdminMenu.style.";
import MenuSelect from "./components/MenuSelect";
import AdminSidebar from "../../../components/layout/Sidebar/Sidebar";
import MenuButtons from "./components/MenuButtons";
import Table from "../../../components/ui/table/Table";
import MenuModal from "./components/MenuModal";
import OptionModal from "./components/OptionModal";

const AdminMenu = ({ trData, tdData }) => {
  const [showNewMenuModal, setShowNewMenuModal] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);

  const options = ["전체 메뉴", "에스프레소", "논커피", "스무디", "티", "에이드"];

  const handleTdClick = (data) => {
    // 클릭된 데이터에 따라 모달을 열도록 로직 작성
    console.log("Clicked:", data);
    // 모달을 열거나 상태를 변경하는 등의 로직 수행
  };

  return (
    <>
      <Menus.Container>
        {showNewMenuModal && (
          <MenuModal
            title="메뉴 추가"
            closeModal={() => {
              setShowNewMenuModal(!showNewMenuModal);
            }}
          />
        )}
        {showOptionsModal && (
          <OptionModal
            title="옵션 수정"
            closeModal={() => {
              setShowOptionsModal(!showOptionsModal);
            }}
          />
        )}
        <AdminSidebar />
        <Menus.Content>
          <Menus.TopBox>
            <MenuSelect options={options} />
            <Menus.ButtonWrapper>
              <MenuButtons
                name="optionAndNewMenu"
                title="옵션 정보 수정"
                isClicked={() => {
                  setShowOptionsModal(!showOptionsModal);
                }}
              />
              <MenuButtons
                name="optionAndNewMenu"
                title="메뉴 추가"
                isClicked={() => {
                  setShowNewMenuModal(!showNewMenuModal);
                }}
              />
            </Menus.ButtonWrapper>
          </Menus.TopBox>
          <Table trData={trData} tdData={tdData} isMenuTable={true} onTdClick={handleTdClick} />
        </Menus.Content>
      </Menus.Container>
    </>
  );
};

AdminMenu.defaultProps = {
  trData: ["이미지", "종류", "이름", "사이즈", "ICE/HOT", "가격"],
  tdData: [
    ["/assets/images/test_coffee.jpg", "에스프레소", "아이스 아메리카노", "tall", "ICE", "5,100원"],
    ["/assets/images/test_coffee.jpg", "에스프레소", "아이스 아메리카노", "tall", "ICE", "5,100원"],
    ["/assets/images/test_coffee.jpg", "에스프레소", "아이스 아메리카노", "tall", "ICE", "5,100원"],
    ["/assets/images/test_coffee.jpg", "에스프레소", "아이스 아메리카노", "tall", "ICE", "5,100원"],
    ["/assets/images/test_coffee.jpg", "에스프레소", "아이스 아메리카노", "tall", "ICE", "5,100원"],
    ["/assets/images/test_coffee.jpg", "에스프레소", "아이스 아메리카노", "tall", "ICE", "5,100원"],
  ],
};

export default AdminMenu;
