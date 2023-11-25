import axios from "axios";

export const getAllProducts = async () => {
  const res = await axios.get("http://localhost:5000/api/v1/products");
  const products = res.data.data;

  return products;
};

export const createProduct = async (data, token) => {
  console.log("form", token);
  const res = await axios
    .post("http://localhost:5000/api/v1/products/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert("등록을 실패하였습니다.");
      console.log(err);
    });
  const newProducts = res.data.data;
  return newProducts;
};

export const updateProduct = async (id, data) => {
  const res = await axios.put(`http://localhost:5000/api/v1/products/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  const products = res.data.data;

  return products;
};

export const deleteProduct = async (id) => {
  await axios.delete(`http://localhost:5000/api/v1/products/${id}`);
};
