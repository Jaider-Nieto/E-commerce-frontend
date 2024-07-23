import { Container } from 'react-bootstrap'
import Banner from '../../components/Bannner/Banner.component'
import Offers from '../../components/Offers/Offers.component'
import TopProducts from '../../components/TopProducts/TopProducts.component'
import Categories from '../../components/Categories/Categories.component'

const Home = () => {
  return (
    <div>
      <Banner />
      <Container>
        <Offers />
        <TopProducts />
        <Categories />
      </Container>
    </div>
  )
}

export default Home
