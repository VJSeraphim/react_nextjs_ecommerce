import React from 'react'

import { Product, FooterBanner, HeroBanner } from '../components'

const Home = () => {
  return (
    <>
      <HeroBanner />

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

      <FooterBanner />
    </>
  )
}

export default Home