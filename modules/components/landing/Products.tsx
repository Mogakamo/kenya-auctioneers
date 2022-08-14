import React from 'react'
import ProductCard from '../cards/ProductCard'
import CategoriesNav from '../navigation/CategoriesNav'

const Products = () => {
  return (
    <div className='mt-36 mx-20'>
        <h1 className='text-4xl font-semibold'>Discover latest auctions</h1>
        <CategoriesNav />
        <ProductCard />
        <h1 className='text-4xl font-semibold'>Available apartments for auction</h1>
        <ProductCard />
        <h1 className='text-4xl font-semibold'>Available machinery for auction</h1>
        <ProductCard />
    </div>
  )
}

export default Products