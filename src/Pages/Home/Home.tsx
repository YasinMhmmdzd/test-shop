import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../../Components/Product/Product'
function Home() {
  const [products , setProducts] = useState([])

  useEffect(()=>{
    axios.post("https://imis.silverage.co/api/shop/products/search" , {
        search_keys : "",
        group_depth : 1,
        load_products : 1,
        load_group : 1,
        per_page : 10
    }).then(res => setProducts(res.data.results.products))
  } , [])

  return (
    <div className="home-page">
      {
        products.map(product => (
          <>
          <Product {...product}/>
          </>
        ))
      }
    </div>
  )
}

export default Home