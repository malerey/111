import styled from 'styled-components'
import Button from './Button'

const StyledCard = styled.article`
  background-color: white;
  height: 300px;
  width: 200px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Card = () => {
  return (
    <StyledCard>
      <h3>Soy una tarjeta</h3>
      <Button title="comprar"/>
    </StyledCard>
  )
}

export default Card
