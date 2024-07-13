import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home.view'
import Nav from './components/Nav/NavHome.component'
import Detail from './views/Detail/Detail.view'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/id:idProduct' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
