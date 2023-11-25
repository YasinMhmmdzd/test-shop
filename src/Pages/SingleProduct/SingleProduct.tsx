import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  const currentRoute = useParams().id
  const [productDetails , setProductDetails] : any = useState({})
  const [isLoading , setIsLoading] = useState(true)

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
      {isLoading ? <p className='loading'>درحال بارگزاری...</p> : (
        <>
      <div className="single-product-image">
        <img src={productDetails.cover} alt="cover product" />
      </div>

      <div className="single-proudct-infos">
      <h2>
        {productDetails.name}
      </h2>
      <p>
      {productDetails.count_in_box >= 0 ? productDetails.count_in_box + "" + productDetails.count_unit.title : "موجود نیست"}
      </p>
      <p>
      {productDetails.full_price.sale_price_with_tax_and_discount} تومان
      </p>

      </div>
      <div className="single-product-description">
        <h5>
          {productDetails.brief_description}
        </h5>
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