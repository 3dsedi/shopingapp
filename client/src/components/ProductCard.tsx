import React, { useState } from "react";
import { ProductInterface } from "../interface/ProductInterFace";
import { ProductCardDetail } from "./ProductCardDetail";
import { Routes, Route} from "react-router-dom"

interface Props {
  product: ProductInterface;
}
export const ProductCard = ({ product }: Props) => {
  const {  name, type, storage } = product;
  const [showDetails, setShowDetails] = useState<boolean>();
  return (
    <div>
      {showDetails && <div className="coverLayer"></div>}
      {showDetails && (
        <Routes>
          <Route path="/login" element ={<ProductCardDetail
            product={product}
            closeDetails={() => setShowDetails(false)}
          />
        }/>
        </Routes>
      )}

      <div className="puppyCard" onClick={() => setShowDetails(true)}>
        <div className="puppyCard_desc">
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
