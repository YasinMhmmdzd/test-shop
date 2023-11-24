import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  const currentRoute = useParams().id
  
  
  
  const [productDetails , setProductDetails] : any = useState({})

  useEffect(()=>{
    axios.post("https://imis.silverage.co/api/shop/products/details" , {
      id : currentRoute
    }).then(res => {setProductDetails(res.data.results.product)})
  } , [])

  console.log(productDetails);
  

  return (
    <div className='single-product'>
      <h2>
        {productDetails.name}
      </h2>
      <div className="single-product-image">
        <img src={productDetails.cover} alt="cover product" />
      </div>
    </div>
  )
}

export default SingleProduct