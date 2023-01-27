import React from "react";
import { ProductInterface } from "../interface/ProductInterFace";
import { useNavigate } from 'react-router-dom';

interface Props {
  product: ProductInterface;
}
export const ProductCard = ({ product }: Props) => {
  const {  name, type, storage } = product;
  const navigate = useNavigate();
  return (
    <div>
      <div className="productCard" onClick={() => {navigate(`/${product.id}`)}}>
        <div className="productCard_desc">
          <img
            alt="pic"
            src="https://i.ibb.co/wY4z8Jv/milk2.jpg"
            style={{
              width: "100%",
              margin: 0,
            }}
          />
        <h4>{name}</h4>
        <p className="p__type">{type}</p>
        <p className="p__amount">{storage} liter</p>
        </div>
      </div>
    </div>
  );
};
