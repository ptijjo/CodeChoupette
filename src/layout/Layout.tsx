import React from 'react'
import Header from '../components/Header'
import Presentation from '../pages/Presentation'
import Products from '../pages/Products'

const Layout : React.FC= () => {
  return (
    <>
      <Header />
      <Presentation />
      <Products/>
          
    </>
  )
}

export default Layout
