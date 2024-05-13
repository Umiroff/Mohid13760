import React from 'react'
import { useGetProductQuery } from '../../context/productApi'
import '../products/Products.css'
import stars from '../../assets/stars.svg'
import applewatch from '../../assets/applewatch.svg'

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
      <div className='products_top'>
        <div className='products_top_item'>
          <img src={applewatch} alt="" />
          <div>
            <h3>Apple</h3>
            <p>Apple is one of the <br /> most famous smart <br /> watches providing <br /> company.</p>
          </div>
        </div>
        <div className='products_top_item'>
          <img src={applewatch} alt="" />
          <div>
            <h3>Xiaomi</h3>
            <p>Apple is one of the <br /> most famous smart <br /> watches providing <br /> company.</p>
          </div>
        </div>
        <div className='products_top_item'>
          <img src={applewatch} alt="" />
          <div>
            <h3>FitBit</h3>
            <p>Apple is one of the <br /> most famous smart <br /> watches providing <br /> company.</p>
          </div>
        </div>
      </div>

      <h2 className='products_title'>Our Latest Products</h2>

      <div className='wrapper'>
        {products}
      </div>
    </div>
    </>
  )
}

export default Products