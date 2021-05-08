import { useContext, useState} from 'react';
import styled from 'styled-components'
import Button from './Button'
import UserContext from '../Context/UserContext'

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

  const [checked, setChecked] = useState(false)
  const {guardarEnElContexto} = useContext(UserContext)

const handleChange = (e) => {
  setChecked(e.target.checked)
  guardarEnElContexto(e.target.checked)
}

  return (
    <StyledCard>
      <h3>Soy una tarjeta</h3>

      <div>
          Iniciar sesión
        <input type="checkbox" checked={checked} onChange={handleChange}/>
      </div>


      <Button title="comprar"/>
    </StyledCard>
  )
}

export default Card
