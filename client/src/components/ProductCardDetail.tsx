import React from 'react'
import { ProductInterface } from '../interface/ProductInterFace'

interface Props {
    product:ProductInterface,
    closeDetails: Function
}
export const ProductCardDetail = ({product, closeDetails}: Props) => {
    const { id, name, type, storage} = product
    return (
      <div className='puppyCardDetail'>
      <button className='button_delete' onClick={() => closeDetails() }>X</button>
      <p>Product id: {id}</p>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Amount: {storage}</p>
      <img alt="pic" src="https://i.ibb.co/wY4z8Jv/milk2.jpg"/>
    </div>
    )
  }
