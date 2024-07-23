import { Image } from 'react-bootstrap'
import style from './CardProduct.module.css'
import { FiHeart } from 'react-icons/fi'
import { MdOutlineAddShoppingCart, MdOutlineShoppingCart } from 'react-icons/md'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const CardProduct = ({ image, title, description, price, offert = 0 }) => {
  const [favorite, useFavorite] = useState(false)
  const [cart, useCart] = useState(false)
  return (
    <div className={style.container}>
      <Image className={style.image} src={image} />
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
      <div className={style.footer}>
        {offert !== 0? (
          <div className={style.price}>
            <span className={style.last_price}>${price}</span>
            <span>${offert}</span>  
          </div>
        ) : (
          <div className={style.price}>${price}</div>
        )}
        {favorite ? (
          <FaHeart
            onClick={() => {
              useFavorite(!favorite)
            }}
            className={style[favorite ? 'fav_select' : 'fav']}
          />
        ) : (
          <FiHeart
            onClick={() => {
              useFavorite(!favorite)
            }}
            className={style[favorite ? 'fav_select' : 'fav']}
          />
        )}
        {cart ? (
          <MdOutlineShoppingCart
            onClick={() => {
              useCart(!cart)
            }}
            className={style[cart ? 'cart_select' : 'cart']}
          />
        ) : (
          <MdOutlineAddShoppingCart
            onClick={() => {
              useCart(!cart)
            }}
            className={style[cart ? 'cart_select' : 'cart']}
          />
        )}
      </div>
    </div>
  )
}

export default CardProduct
