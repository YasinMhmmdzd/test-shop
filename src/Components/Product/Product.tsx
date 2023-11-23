import React from 'react'
import "./Product.css"
function Product({name , cover}) {
  return (
    <div className='product'>
      <img src={cover} alt='product image'/>
      <h3>{name}</h3>
    </div>
  )
}

export default Product