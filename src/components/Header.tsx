import React from 'react'

const Header: React.FC = () => {
  return (
    <div className='header'>
      Logo
      <nav className='navigation'>
        <ul className='menu_nav'>
          <li>Accueil</li>
          <li>Produits</li>
          <li>Avis</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
