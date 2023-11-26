import React from 'react'
import "./CartProduct.css"
function CartProduct(props : {product : object , count : number , payable_price : number}) {
  return (
    <div className="cart-product">
        <h2 className="cart-product-name">
            {props.product.name}
        </h2>
        <p className='cart-product-count'>
            {props.count} {props.product.count_unit.title}
        </p>
        <p className='cart-product-price'>
            {props.payable_price} تومان
        </p>
    </div>
  )
}

export default CartProduct