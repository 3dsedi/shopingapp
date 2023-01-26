import React, {useState, useRef} from 'react'
import { ProductCard } from './ProductCard';
import { ProductInterface } from '../interface/ProductInterFace';
import { SearchBar } from './SearchBar';
import { FilterBar } from './FilterBar';


interface Props {
    product:ProductInterface[]
}

const ProductList = ({product} : Props) => {

  return (
    <div>
        <SearchBar product={product}/>
        <FilterBar product={product}/>
     </div>

  )}

export default ProductList

  
   