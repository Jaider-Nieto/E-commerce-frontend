import RenderCards from '../RenderCards/RenderCards.component'
import style from './Offers.module.css'

const Offers = () => {
  return (
    <div className={style.container}>
      <div className={style.offert}>
        <div className='w-100 fs-1 fw-bold ms-3'>Ofertas del dia</div>
        <RenderCards cards={[1, 2, 3, 4]} />
      </div>
    </div>
  )
}

export default Offers
