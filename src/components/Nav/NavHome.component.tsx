import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
  InputGroup
} from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { FiUser } from 'react-icons/fi'

const NavHome = () => {
  const isAutenticate = true
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto mx-3'>
            <Nav.Link href='#inicio'>Inicio</Nav.Link>
            <Nav.Link href='#ofertas'>Ofertas</Nav.Link>
            <NavDropdown title='Categorias' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Acción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.2'>
                Otra acción
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#pagos'>Pagos</Nav.Link>
          </Nav>
          <Form
            className='d-flex w-100 mx-4'
            //  onSubmit={handleSearchSubmit}
          >
            <InputGroup>
              <FormControl
                className='form-control'
                type='search'
                placeholder='Buscar productos'
                aria-label='Search'
                // value={searchQuery}
                // onChange={handleSearchChange}
              />
              <InputGroup.Text style={{ cursor: 'pointer' }}>
                <BsSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form>
          <Nav className='ml-auto'>
            {isAutenticate ? (
              <>
                <Nav.Item>
                  <Button className='mx-2 btn-light' href='#shopping-cart'>
                    <MdOutlineShoppingCart />
                  </Button>
                </Nav.Item>
                <Nav.Item>
                  <Button className='mx-2 btn-secondary' href='#registrarse'>
                    <FiUser />
                  </Button>
                </Nav.Item>
              </>
            ) : (
              <>
                <Nav.Item>
                  <Button className='mx-2 btn-light' href='#Inicio-sesion'>
                    Ingresa
                  </Button>
                </Nav.Item>
                <Nav.Item>
                  <Button className='mx-2 btn-secondary' href='#registrarse'>
                    Registrarse
                  </Button>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavHome
