import React from 'react'
import { useGetProductQuery } from '../../context/productApi'
import '../products/Products.css'
import stars from '../../assets/stars.svg'

function Products() {
    let {data} = useGetProductQuery({limit: 6, count: 1})

    let products = data?.products?.map((el) => (
      <div key={el.id} className='pro'>
        <div className='pro_img'>
          <img src={el.thumbnail} alt="" />
        </div>
        <div className='pro_texts'>
          <h3>{el.title}</h3>
          <img src={stars} alt="" />
          <p>$ {el.price}</p>
        </div>
      </div>
    ))

  return (
    <>
    <div className='products'>

      <div className='wrapper'>
        {products}
      </div>
    </div>
    </>
  )
}

export default Products