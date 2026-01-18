import React from 'react'
import Footer from "../Components/Footer"
const MainLayout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout