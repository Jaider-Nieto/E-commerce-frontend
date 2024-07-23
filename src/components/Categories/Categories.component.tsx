import { CATEGORIES } from '../../constants/Categires.enum'
import style from './Categories.module.css'

const Categories = () => {
  const categories = Object.values(CATEGORIES)
  console.log(categories)
  return (
    <div className='d-flex flex-wrap pb-4 mx-auto'>
      <div className='w-100 fs-1 fw-bold ms-3'>Categorias</div>
      <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 mt-3'>
        {categories.map((e, i) => (
          <div className={style[e]} key={i}>
            {e}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
