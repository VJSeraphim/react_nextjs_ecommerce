import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner

      <div className="products-heading">
        <h2>
          Selling Products
        </h2>
        <p>
          Speakers of many Variations
        </p>

        <div className="products-container">
          {['Product 1', 'Product 2'].map((product) => product)}
        </div>

      </div>

      Footer
    </>
  )
}

export default Home