import styled from 'styled-components'
import Button from './Button'

const StyledFooter = styled.footer`
  background-color: blue;
  height: 100px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h1>Soy footer</h1>
      <Button title="registrarme" />
    </StyledFooter>
  )
}

export default Footer
