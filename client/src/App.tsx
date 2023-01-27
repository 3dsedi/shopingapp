import React, { useState, useEffect} from "react";
import { ProductInterface } from "../src/interface/ProductInterFace";
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import {Home} from './components/Home'
import { ProductCardDetail } from "./components/ProductCardDetail";


function App() {
  const [product, setProduct] = useState<ProductInterface[]>([]);
  
  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/products");
    const data = await response.json();
    const products = data.PRODUCTS;
    setProduct(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    
    <div className="App">
      <Routes>
       <Route  path='/' element={
         <Home allProducts={product} />}
       />
       <Route path={`/:product`} element={<ProductCardDetail allProducts={product}/>}/>
      </Routes>

    </div>
  );
}
export default App;

