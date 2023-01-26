import React, { useState, useEffect, useRef } from "react";
import { ProductInterface } from "../src/interface/ProductInterFace";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Pagination } from "./components/Pagination";
import ProductList from "./components/ProductList";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [product, setProduct] = useState<ProductInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [ postPerPage] = useState<number>(6)
  

  const fetchData = async () => {
    const response = await fetch("http://localhost:8000/api/products");
    const data = await response.json();
    const products = data.PRODUCTS;
    console.log(products);
    setProduct(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

 

const indexOfLastProduct = currentPage * postPerPage
const indexOfFistProduct = indexOfLastProduct - postPerPage
const currentProducts = product.slice(indexOfFistProduct, indexOfLastProduct)

const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  
  return (
    <div className="App">
      <NavBar />
      <ProductList product={currentProducts} />
      <Pagination postPerPage={postPerPage} totalPosts={product.length} paginate={paginate}/>
    </div>
  );
}

export default App;
