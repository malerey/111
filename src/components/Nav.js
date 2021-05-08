import styled from 'styled-components'
import { useContext } from 'react';
import UserContext from '../Context/UserContext'

const NavBar = styled.nav`
  background-color: blue;
  height: 30px;
  display: flex;
  justify-content: space-around;
`;

const Nav = () => {
  const usuario = useContext(UserContext)
  return (
    <NavBar>
      <h1>Soy Nav</h1>
     
     {usuario.estaLogueado && <h2>Hola, {usuario.first_name}!</h2>}

    </NavBar>
  )
}

export default Nav
