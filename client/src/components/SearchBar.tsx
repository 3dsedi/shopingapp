import React , {useState, useRef} from 'react'
import { ProductInterface } from '../interface/ProductInterFace'
import { ProductCard } from './ProductCard'

interface Props {
product:ProductInterface[]
}

export const SearchBar = ({product}: Props) => {

    const [searchData, setSearchData] = useState<ProductInterface[]>([])
    const searchInputRef = useRef<HTMLInputElement>(null)
    const searchHandler = (event:React.FormEvent) => {
        const selected:string = searchInputRef.current!.value;
        setSearchData(product.filter(item => item.name as string === selected));
        }
      
    
    return (
        <form>
            <input type="text" ref={searchInputRef} onChange={searchHandler}/>
            { searchData?.map((p, index) => (
                <ProductCard
                 key={index} product={p} />
              ))}
         </form>
        )
    }
    
    
    // const [wordEntered, setWordEntered] = useState<string>("")
//     const inputRef =
//  useRef<HTMLInputElement>(null)
// window.addEventListener("load", () => inputRef.current?.focus())
// const handleFilter = ({
//     target,
//   }: React.ChangeEvent<HTMLInputElement>): void => {
//     const searchWord: string = target.value.toLowerCase()
//     setWordEntered(searchWord)
  
//     const newFilter: ProductInterface[] = product.filter(({ brand }): boolean =>
//       brand.toLowerCase().includes(searchWord)
//     )
  
//     if (!searchWord) return setFilteredData([])
//     setFilteredData(newFilter)
//   }
  
//   const clearInput = (): void => {
//     setFilteredData([])
//     setWordEntered("")
//     inputRef.current?.focus()
//   }
