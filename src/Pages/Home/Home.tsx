import axios from "axios"
import { useEffect, useState } from "react"
import Product from "../../Components/Product/Product"
import "./Home.css"

function Home() {
  const [products , setProducts] = useState([])
  useEffect(()=>{
    axios.post("https://imis.silverage.co/api/shop/products/search" , {
      seach_key : "",
      group_depth : 1,
      load_products : 1 ,
      load_group : 1,
      per_page : 12
    }).then(res => setProducts(res.data.results.products))
  } , [])

  return (

    <div className="home-page">
      <h2>محصولات</h2>
      <div className="products-container">

      {products.map(product => (
        
        <Product key={product.id}  {...product as Object} />
        
      ))}

      </div>
    </div>

  )
}

export default Home