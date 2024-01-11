import React from 'react'
import Header from '../components/Header'
import Presentation from '../pages/Presentation'
import Products from '../pages/Products'
import Resultats from '../pages/Resultats'
import Social from '../components/Social'

const Layout : React.FC= () => {
  return (
    <>
      <Header />
      <Social/>
      <Presentation />
      <Products />
      <Resultats />
      
          
    </>
  )
}

export default Layout
