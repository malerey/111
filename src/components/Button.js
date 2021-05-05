import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: red;
  height: 30px;
  border: none;
  border-radius: 10px;
  width: 100px;
  align-self: center
`;

const Button = ({title}) => {
  return (
    <StyledButton>
      {title}
    </StyledButton>
  )
}

export default Button
