import React from 'react'

const ProductCard = () => {
  return (
    <div className='h-96 border-2 w-[400px] rounded-md my-5 grid grid-cols-2'>
        <div className="left border-2">Image</div>
        <div className="right p-3 w-48">details</div>
    </div>
  )
}

export default ProductCard