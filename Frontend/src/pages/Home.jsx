import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Product/GenderCollectionSection'
import NewArrivals from '../components/Product/NewArrivals'
import ProductDetails from '../components/Product/ProductDetails'
import ProductGrid from '../components/Product/ProductGrid'

const placeholderProducts = [
   {
          _id: 4,
          name: "Product 1" ,
          price: 100,
          images: [{url : "https://picsum.dev/300/200?random=6 "}],
      },
      {
          _id: 5,
          name: "Product 1" ,
          price: 100,
          images: [{url : "https://picsum.dev/300/200?random=7 "}],
      },
      {
          _id: 6,
          name: "Product 2" ,
          price: 100,
          images: [{url : "https://picsum.dev/300/200?random=8"}],
      },
      {
          _id: 7,
          name: "Product 3" ,
          price: 100,
          images: [{url : "https://picsum.dev/300/200?random=9"}],
      },
     
]

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      <div className="container  mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
    </div>
  )
}

export default Home
