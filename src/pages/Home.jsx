import React from 'react'
import Spanner from '../components/Spanner'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
    return (
        <div>
          <Spanner />
          <Navbar />
          <Slider />
          <Categories />
          <Products />
          
        </div>
    )
}

export default Home
