import RenderCards from '../RenderCards/RenderCards.component'
import style from './TopProducts.module.css'
const TopProducts  = () => {
  return (
    <div className={style.container}>
      <div className='w-100 fs-1 fw-bold ms-3'>Lo mas Top</div>
      <RenderCards cards={[1, 2, 3, 4, 5, 6, 7, 8]} />
    </div>
  )
}

export default TopProducts