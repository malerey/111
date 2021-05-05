import {useContext} from 'react' 
import styled from 'styled-components'
import UserContext from '../Context/UserContext';

const StyledButton = styled.button`
  background-color: ${props => props.esUsuarioPremium ? "pink" : "red"};
  height: 30px;
  border: none;
  border-radius: 10px;
  width: 100px;
  align-self: center
`;



const Button = ({title}) => {
  const {esUsuarioPremium} = useContext(UserContext);
  console.log(esUsuarioPremium)
  return (
    <StyledButton esUsuarioPremium={esUsuarioPremium}>
      {esUsuarioPremium ? title.toUpperCase() : title}
    </StyledButton>
  )
}

export default Button
