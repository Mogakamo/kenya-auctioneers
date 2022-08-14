import React from 'react'
import ProductCard from '../cards/ProductCard'
import CategoriesNav from '../navigation/CategoriesNav'

const Products = () => {
  return (
    <div className='mt-36 mx-20 h-full '>
        <h1 className='text-4xl font-semibold'>Discover latest auctions</h1>
        <CategoriesNav />
        <div className='flex h-full h-full flex-grow-0 overflow-x-auto space-x-5'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
        </div>
        <h1 className='text-4xl font-semibold'>Available apartments for auction</h1>
        <ProductCard />
        <h1 className='text-4xl font-semibold'>Available machinery for auction</h1>
        <ProductCard />
    </div>
  )
}

export default Products