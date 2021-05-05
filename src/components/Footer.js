import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: blue;
  height: 100px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h1>Soy footer</h1>
    </StyledFooter>
  )
}

export default Footer
