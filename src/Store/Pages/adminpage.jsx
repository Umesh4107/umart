
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../redux/productReducer/action";

const initialState = {
  name: "",
  image: "",
  brand: "",
  price: "",
  category: "",
  gender: "",
};
const Admin = () => {
  const [product, setProduct] = useState(initialState);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: name === "price" ? Number(value) : value };
    });
  };
  console.log(product);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct(initialState);
    //addProduct(product,dispatch)
  };
  return (
    <DIV>
      <form action="" onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <input
          type="text"
          placeholder="Product Name"
          onChange={(e) => handleChange(e)}
          value={product.name}
          name="name"
        />
        <input
          type="text"
          placeholder="Product Image"
          onChange={(e) => handleChange(e)}
          value={product.image}
          name="image"
        />
        <input
          type="text"
          placeholder="Product Brand"
          onChange={(e) => handleChange(e)}
          value={product.brand}
          name="brand"
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => handleChange(e)}
          value={product.price}
          name="price"
        />
        <select
          onChange={(e) => handleChange(e)}
          value={product.category}
          name="category"
        >
          <option value="">category</option>
          <option value="t-shirt">t-shirt</option>
          <option value="jean">jean</option>
          <option value="shoes">shoes</option>
        </select>
        <select
          onChange={(e) => handleChange(e)}
          value={product.gender}
          name="gender"
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="kid">kid</option>
        </select>
        <button type="submit"> Add Product</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: auto;
  border: 1px solid gray;
  padding: 40px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  input {
    height: 40px;
    font-size: larger;
    width: 100%;
  }
  select {
    height: 40px;
    font-size: large;
    width: 100%;
  }
  button {
    width: 50%;
    height: 35px;
    cursor: pointer;
    border: none;
  }
`;

export default Admin;

