import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HiShoppingBag } from "react-icons/hi";
import CartProduct from '../../Components/CartProduct/CartProduct';
import "./Cart.css"

function Cart() {
  //get cart product items
  let cartProducts = localStorage.getItem("cartProduct")
  //states
  const [isLoading , setIsLoading] = useState(true)
  const [allProducts , setAllProducts] = useState([])

  //call api
  useEffect(()=>{

    axios.post("https://imis.silverage.co/api/shop/cart/details" , {
      products : cartProducts
    }).then(res => {
      console.log(res)
      setAllProducts(res.data.results.cart)
      setIsLoading(false)
    })
  } , [])
  return (

    <div className="cart">
      {/* check if loading finished */}
      {isLoading ? <p className='loading'>درحال بارگزاری ... </p> :
      <div className="cart-container">
       {
        allProducts.items.length <= 0 ? <p style={{textAlign:'center' , padding:'20px'}}>سبد خرید خالی است</p> :(
          allProducts.items.map(product => (
            <CartProduct {...product}/>
          ))
        )
       }
       <div className="payable-cart">

      <h4>
        مجموع سبد خرید :‌
      </h4>
      <div className="payable">
      <HiShoppingBag className="pay-icon"/>
      {allProducts.payable} تومان
      </div>

       </div>

      </div>
      }
    </div>
  )
}

export default Cart