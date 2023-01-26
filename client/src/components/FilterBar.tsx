import React, {useState, useRef} from 'react'
import { ProductCard } from './ProductCard';
import { ProductInterface } from '../interface/ProductInterFace';
import { Pagination } from './Pagination';

interface Props {
    product:ProductInterface[]
}

export const FilterBar = ({product} : Props) => {
const [filteredData, setFilteredData] = useState<ProductInterface[]>();
const [isAll, setIsAll] = useState<boolean>(true);


  const typeRef = useRef<any>();
  const FilterHandler = (event:React.FormEvent) => {
    const selected:string = typeRef.current!.value;
    if (selected === 'ALL') {
        setIsAll(true);
    }else{
        setIsAll(false);
        setFilteredData(product.filter(item => item.type as string === selected));
    }
  };

  return (
    <div>
         <article>
        <form>
          <label>Type</label>
          <select ref={typeRef} defaultValue="ALL" onChange={FilterHandler}>
            <option value="ALL">ALL</option>
            <option value="whole milk">whole milk</option>
            <option value="pea milk">pea milk</option>
            <option value="almond milk">almond milk</option>
            <option value="oat milk">oat milk</option>
            <option value="rice milk">rice milk</option>
            <option value="soy milk">soy milk</option>
            <option value="walnut milk">walnut milk</option>
            <option value="macadamia milk">macadamia milk</option>
            <option value="hemp milk">hemp milk</option>
            <option value="cashew milk">cashew milk</option>
            <option value="coconut milk">coconut milk</option>
          </select>
        </form>
      <main className="puppyContainer">
        {isAll && product?.map((p, index) => (
              <ProductCard key={index} product={p} />))}
        {!isAll && filteredData?.map((p, index) => (
                <ProductCard
                 key={index} product={p} />
              ))}

      </main>
      </article>
      
    </div>
  )
}
