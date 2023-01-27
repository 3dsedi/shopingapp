import React, { useLayoutEffect } from "react";
import { ProductInterface } from "../interface/ProductInterFace";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";


interface Props {
  allProducts: ProductInterface[];
}
export const ProductCardDetail = ({ allProducts }: Props) => {
  const param = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <div className="productCardDetail">
      {allProducts
        .filter((product) => product.id === param.product)
        .map((product, index) => (
          <article key={index} className="product-article">
            <MdArrowBackIos />
            <button className="button_back" onClick={() => navigate(-1)}>
              back
            </button>
            <img
              className="product__desc__img"
              alt="pic"
              src="https://i.ibb.co/wY4z8Jv/milk2.jpg"
            />
            <div className="product__dsc__data">
              <p style={{ color: "black" }}> {product.name}</p>
              <p style={{ color: "#969696" }}> {product.type}</p>
              <p style={{ color: "#c7c3a5" }}> {product.storage}Liter</p>
              <div className="slider">
              </div>
              <button className="order">order</button>
            </div>
          </article>
        ))}
    </div>
  );
};
