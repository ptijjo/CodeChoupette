import React from 'react'
import Header from '../components/Header'
import Presentation from '../pages/Presentation'
import Products from '../pages/Products'
import Resultats from '../pages/Resultats'

const Layout : React.FC= () => {
  return (
    <>
      <Header />
      <Presentation />
      <Products />
      <Resultats/>
          
    </>
  )
}

export default Layout
