import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HiArrowLeft , HiShoppingCart } from "react-icons/hi";

import "./SingleProduct.css"
function SingleProduct() {
  const currentRoute = useParams().id
  const [productDetails , setProductDetails] : any = useState({})
  const [isLoading , setIsLoading] = useState(true)
  const [cartCount , setCartCount] = useState(1)

  useEffect(()=>{
    axios.post("https://imis.silverage.co/api/shop/products/details" , {
      id : currentRoute
    }).then(res => {
      setProductDetails(res.data.results.product)
      setIsLoading(false)
    })
  } , [])


  return (
    <div className='single-product'>
      <Link to="/" className="back-icon">
      <HiArrowLeft />
      </Link>
      {isLoading ? <p className='loading'>درحال بارگزاری...</p> : (
        <>
      <div className="single-product-image">
        <img src={productDetails.cover} alt="cover product" />
      </div>

      <div className="single-proudct-infos">

      <h2 className='single-product-name'>
        {productDetails.name}
      </h2>

      <p className='single-product-count'>
      {productDetails.count_in_box >= 0 ? productDetails.count_in_box + "" + productDetails.count_unit.title : "موجود نیست"}
      </p>

      <p className='single-product-price'>
      {productDetails.full_price.sale_price_with_tax_and_discount} تومان
      </p>

      <form>

      <div className="single-product-cart">
        <button type='button' className='cart-count-btn' onClick={() => setCartCount(prev => {
          //check previous state up to 0
           if (prev <= 0) {
            return 0;
          }
          return prev -1
          })}>-</button>


        <input type="number" value={cartCount} onChange={(e) => setCartCount(parseInt(e.target.value))}/>

        <button type='button' className='cart-count-btn' onClick={() => setCartCount(prev => prev +1)}>+</button>

      </div>
        <button className='add-to-cart-btn' type='submit'> <HiShoppingCart size={22}/> افزودن به سبد خرید</button>
      </form>

      </div>
      <div className="single-product-description">
        <p>
          {productDetails.description}
        </p>
      </div>
        
        </>
      )}
    </div>
  )
}

export default SingleProduct