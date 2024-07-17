import { Carousel, Image } from 'react-bootstrap'
import style from './Banner.module.css'

const Banner = () => {
  return (
    <Carousel fade className={style.carrousel} controls={false}>
      <Carousel.Item className={style.carrousel_item} interval={4000}>
        <Image
          fluid
          className='d-block w-100'
          src='https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg'
          alt='Imagen 1'
        />
      </Carousel.Item>
      <Carousel.Item className={style.carrousel_item} interval={4000}>
        <Image
          fluid
          className='d-block w-100'
          src='https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2015/04/colortheory.jpg'
          alt='Imagen 2'
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner
