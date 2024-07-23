import CardProduct from '../CardProduct/CardProduct.component'

const RenderCards = ({ cards }) => {
  return (
    <div className='d-flex flex-wrap pb-4 mx-auto' style={{ borderBottom: '1px solid #b9b9b9' }}>
      {cards?.map((_, i) => (
        <CardProduct
          key={i}
          offert={200}
          price={300}
          description={
            'Este adorable peluche de oso, fabricado con felpa suave, es ideal para abrazos y perfecto para todas las edades. Un regalo encantador para cualquier ocasión. ¡Hazte con el tuyo hoy!'
          }
          title={'Osito de felpa grande de 20 metros'}
          image={
            'https://th.bing.com/th/id/OIG2.GT0BWCr3f6X5OG5WoPUB?w=1024&h=1024&rs=1&pid=ImgDetMain.png'
          }
        />
      ))}
    </div>
  )
}

export default RenderCards
