import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { actionGetAllProducts } from "../../redux/action/productAction";
import { getAllProductsMain } from "../../api/product";
import { setOrderDetail } from "../../redux/action/orderDetailAction";
import { mockup } from "./components/data/menuMockup";

import Card from "./components/card/Card";
import { StyledOrder } from "./Order.style";
import Slider from "react-slick";

const Order = ({ children }) => {
  const userRecipe = useSelector((state) => state.user.recipe);
  console.log("유저레시피", userRecipe);
  console.log("유저레시피 아이디", userRecipe._id);
  console.log("유저레시피");

  const dispatch = useDispatch();

  const productsFromState = useSelector((state) => state.product.products);
  console.log("프로덕트 폼 스테이트", productsFromState);

  // orderDetail api가 Order 페이지 렌더링 시 한 번만 호출하는 최적화 용도
  // api 나오면 수정 필요
  const fetchOrderDetail = async () => {
    try {
      // const response = await fetch("client/src/pages/order/components/data/menuMockup.js");
      // const data = await response.json();
      const data = mockup;
      console.log(data);

      dispatch(setOrderDetail(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrderDetail();
  }, []);

  useEffect(() => {
    const fn = async () => {
      try {
        const products = await getAllProductsMain(); //비동기
        dispatch(actionGetAllProducts(products)); // data뺴니까 됨
        // console.log("productsFrom", productsFromState);
      } catch (err) {
        console.log("err", err);
      }
    };
    fn();
  }, []);

  // 카테고리 필터링 하기
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [filteredProducts, setFilteredProducts] = useState(productsFromState);

  useEffect(() => {
    setFilteredProducts(productsFromState);
  }, [productsFromState]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    let filtered;
    switch (category) {
      case "전체":
        filtered = productsFromState;
        break;
      case "에스프레소":
        filtered = productsFromState.filter(
          (pd) => pd.category === "에스프레소"
        );
        break;
      case "논커피":
        filtered = productsFromState.filter((pd) => pd.category === "논커피");
        break;
      case "스무디":
        filtered = productsFromState.filter((pd) => pd.category === "스무디");
        break;
      case "티":
        filtered = productsFromState.filter((pd) => pd.category === "티");
        break;
      case "에이드":
        filtered = productsFromState.filter((pd) => pd.category === "에이드");
        break;
      case "꿀조합":
        filtered = userRecipe; // 왜 _id?
        break;
      default:
        filtered = productsFromState;
    }

    // 카테고리에 메뉴가 없는 경우 처리
    if (filtered.length === 0) {
      console.log(`${category} 카테고리에는 메뉴가 없습니다.`);
    }

    // console.log("필터드", filtered);
    setFilteredProducts(filtered);
  };

  // 카테고  리 리스트 배열
  const categories = [
    "전체",
    "에스프레소",
    "논커피",
    "스무디",
    "티",
    "에이드",
    "꿀조합",
  ];

  // 슬라이드 설정
  const settings = {
    arrows: false,
    swipeToSlide: true,
    draggable: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <StyledOrder>
      <div className="button">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <button
              key={category}
              className={`${index === 0 ? "first-button " : ""}${
                index === categories.length - 1 ? "last-button " : ""
              }${category === selectedCategory ? "selected-button" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </Slider>
      </div>
      <div className="cards-container">
        {Array.isArray(filteredProducts) &&
          filteredProducts.map((product) => (
            <Card key={product._id} data={product} />
          ))}
      </div>
    </StyledOrder>
  );
};
export default Order;
