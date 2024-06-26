import { Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home.view'
import Nav from './components/Nav/Nav.component'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
