import React, { useState, useRef, useEffect } from "react";
import { Pagination } from "./Pagination";
import { ProductInterface } from "../interface/ProductInterFace";
import { ProductCard } from "./ProductCard";
import { NavBar } from "./NavBar";

interface Props {
  allProducts: ProductInterface[];
}
export const Home = ({ allProducts }: Props) => {
  const [searchData, setSearchData] = useState<ProductInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postPerPage] = useState<number>(6);
  const [filteredData, setFilteredData] = useState<ProductInterface[]>();
  const [isAll, setIsAll] = useState<boolean>(true);

  const loadData = () =>{
    setFilteredData(allProducts)
  }

  useEffect(() => {
    loadData();
  }, []);


  const typeRef = useRef<any>();
  const searchInputRef = useRef<HTMLInputElement>(null);
  window.addEventListener("load", () => searchInputRef.current?.focus());

  const indexOfLastProduct = currentPage * postPerPage;
  const indexOfFirstProduct = indexOfLastProduct - postPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const searchHandler = (event: React.FormEvent) => {
    const word: string = searchInputRef.current!.value;
    const selectedName = word.charAt(0).toUpperCase() + word.slice(1);
    setSearchData(
        allProducts.filter((item) =>
        (item.name as string).includes(selectedName)
      )
    );
    searchInputRef.current?.focus();
  };

  const FilterHandler = (event: React.FormEvent) => {
    const selected: string = typeRef.current!.value;
    if (selected === "ALL") {
      setIsAll(true);
    } else {
      setIsAll(false);
      setFilteredData(
        allProducts.filter((item) => (item.type as string) === selected)
      );
    }
  };

  return (
    
    <div>
      <NavBar />
      <form className="searchbar">
        <input type="text" ref={searchInputRef} onChange={searchHandler} />
        <h6 style={{ marginLeft: "1rem", marginTop: "3px" }}>
        {allProducts.length} products
      </h6>
      </form>
      {searchInputRef.current?.value !== "" ? (
        <div className="cardContainer">
          {searchData?.map((p, index) => (
              <ProductCard key={index} product={p} />
          ))}
        </div>
      ) : (
        <article>
          <form className="filter">
            <label className="lable">Type</label>
            <select
              ref={typeRef}
              defaultValue="select"
              onChange={FilterHandler}
            >
              <option value="ALL">ALL</option>
              <option value="Whole milk">Whole milk</option>
              <option value="Pea milk">Pea milk</option>
              <option value="Almond milk">Almond milk</option>
              <option value="Oat milk">Oat milk</option>
              <option value="Rice milk">Rice milk</option>
              <option value="Soy milk">Soy milk</option>
              <option value="Walnut milk">Walnut milk</option>
              <option value="Macadamia milk">Macadamia milk</option>
              <option value="Hemp milk">Hemp milk</option>
              <option value="Cashew milk">Cashew milk</option>
              <option value="Coconut milk">Coconut milk</option>
            </select>
          </form>
          <main className="cardContainer">
            {isAll &&
              currentProducts?.map((p, index) => (
                <ProductCard key={index} product={p} />
              ))}
            {!isAll &&
              filteredData?.map((p, index) => (
                <ProductCard key={index} product={p} />
              ))}
           
          </main>
        </article>
      )}
       <Pagination
              postPerPage={postPerPage}
              totalPosts={allProducts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
    </div>
  );
};
