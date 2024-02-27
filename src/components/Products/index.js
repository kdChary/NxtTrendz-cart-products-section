import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'
import Header from '../Header'

const Products = () => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-image"
        />
      </div>
    </>
  )
}

export default Products
