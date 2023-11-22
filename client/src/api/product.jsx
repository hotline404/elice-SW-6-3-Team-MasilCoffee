import axios from "axios";

export const getAllProducts = async () => {
  const res = await axios.get("http://localhost:5000/api/v1/products");
  const products = res.data.data;

  return products;
};

export const createProduct = async (data) => {
  console.log("form", data);
  await axios
    .post("http://localhost:5000/api/v1/products", data, {
      headers: {
        "Contest-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert("등록을 실패하였습니다.");
    });

  //const newProduct = res.data;

  //console.log("create", res, newProduct);

  // return newProduct;
};

export const updateProduct = async (id, data) => {
  const res = await axios.put(`http://localhost:5000/api/v1/products/${id}`, data);
  const products = res.data.data;

  return products;
};

export const deleteProduct = async (id) => {
  const res = await axios.delete(`http://localhost:5000/api/v1/products/${id}`);
  const products = res.data.data;

  console.log("deleted", res, products);

  return products;
};
