import styled from 'styled-components'

const NavBar = styled.nav`
  background-color: blue;
  height: 30px;
`;

const Nav = () => {
  return (
    <NavBar>
      <h1>Soy Nav</h1>
    </NavBar>
  )
}

export default Nav
