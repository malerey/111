import { useState, useContext } from 'react' 
import styled from 'styled-components'
import UserContext from '../Context/UserContext';

const StyledButton = styled.button`
  background-color: ${props => props.estaLogueado ? "pink" : "red"};
  height: 30px;
  border: none;
  border-radius: 10px;
  width: 100px;
  align-self: center
`;

const Modal = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  background-color: pink;
  padding: 20px;
  height: 400px;
  width: 400px;
`


// si el usuario esta logueado, se abre un modal que dice hola usuario
// si el usuario no esta logueado, se abre un modal invitando a loguearse

const Button = ({title}) => {

  const [openModal, setOpenModal] = useState(false)
  const { estaLogueado, first_name, age } = useContext(UserContext);

  const handleClick = () => {
    setOpenModal(true)
  }

  const mostrarMensajeDeModal = () => {

    if (estaLogueado) {
      return age >= 18 
      ? <h4>Gracias por tu compra, {first_name} </h4>
      : <h4>Tenes que ser mayor de edad para poder hacer esto, {first_name}</h4>
    }
      return <h4>Iniciar sesion</h4>
  }

  return (
    <div>
    <StyledButton estaLogueado={estaLogueado} onClick={handleClick}>
      {estaLogueado ? title.toUpperCase() : title}
    </StyledButton>

    
    {openModal &&
    <Modal>
      <h3>Hola, soy un modal</h3>

      { 
        mostrarMensajeDeModal()
       }

      <StyledButton onClick={() => setOpenModal(false)}>Cerrar modal</StyledButton>
    </Modal>
    }
    
    </div>
  )
}

export default Button
