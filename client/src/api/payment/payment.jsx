import axios from "axios";

//결제 정보 보내기
export const postPayment = async (paymentData, token) => {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log(paymentData);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/order",
      paymentData,
      headers
    );

    return res.data;
  } catch (error) {
    console.error("error(postPayment)", error);
  }
};

// 경로 데이터
// 헤더에 const headers = { headers: { Authorization: Bearer ${token} } };
// 위의 것 을 보내야 함
// 백쿼터
