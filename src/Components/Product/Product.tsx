import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
function Product(props:{name:string , count_in_box:number  , count_unit:object , full_price:{sale_price_with_tax_and_discount : number} , cover:string}) {
  return (
    <Link to="/" className='product-link'>
    
    <div className='product'>
      <img src={props.cover} alt='product image'/>
      <div className="product-body">

      <h3>{props.name}</h3>
      <p className='product-price'>{props.full_price.sale_price_with_tax_and_discount} تومان</p>

      <p className='product-count'>{props.count_in_box >= 0 ? props.count_in_box + "عدد" : "موجود نیست"}</p>
      </div>
    </div>
    </Link>
  )
}

export default Product