import React, { ReactNode } from 'react'
import { trpc } from '../../utils/trpc'

const BidderLayout = ({children}: {children: ReactNode}) => {
    const {} = trpc.useQuery(['bidder.bidder.me'], {
        onSuccess: (data) => {
            console.log(data)
        }
    })
  return (
    <div className='bg-green-500/10 h-screen'>
        Biddder
        {children}</div>
  )
}

export default BidderLayout