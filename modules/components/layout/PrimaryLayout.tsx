import TopNav from '@/components/navigation/TopNav'
import React from 'react'
import Footer from '@/components/reusables/Footer'

interface IPrimaryLayout {
    children: React.ReactNode
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({children}) => {
  return (
    <div>
        <TopNav />
        {children}
        <Footer />
    </div>
  )
}

export default PrimaryLayout