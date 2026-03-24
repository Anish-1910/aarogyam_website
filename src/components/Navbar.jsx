import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="leaf">🌿</span>
          <div>
            <h1>ஆரோக்கியம்</h1>
            <span>Aarogyam Organic Store</span>
          </div>
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className={isActive('/products')} onClick={() => setIsOpen(false)}>Our Products</Link>
          <Link to="/about" className={isActive('/about')} onClick={() => setIsOpen(false)}>About Us</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
