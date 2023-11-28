import axios from "axios";

//결제 정보 보내기
export const postPayment = async (paymentData, token) => {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  console.log(paymentData);
  try {
    const res = await axios.post("http://localhost:5000/api/v1/order", paymentData, headers);

    return res.data;
  } catch (error) {
    console.error("error(postPayment)", error);
  }
};

// 전체주문 가져오기
export const getAllPayment = async (token) => {
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const res = await axios.get("http://localhost:5000/api/v1/order/admin", headers);
  const payments = res.data.data;
  return payments;
};

// 사용자 주문 내역 가져오기
export const getPayment = async (orderId) => {
  const res = await axios.get(`http://localhost:5000/api/v1/order/${orderId}`);
  const payment = res.data.data;
  return payment;
};

// 주문정보 수정
export const updatePayment = async (orderId) => {
  const res = await axios.put(`http://localhost:5000/api/v1/order/:orderId/${orderId}`);
  const payment = res.data.data;
  return payment;
};

// 주문 삭제
export const deletePayment = async (orderId) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/v1/order/:orderId/${orderId}`);
    const payment = res.data.data;

    return payment;
  } catch (error) {
    console.error(error);
  }
};
