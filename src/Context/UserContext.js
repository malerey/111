 
import React, { createContext } from 'react';
 
const ThemeContext = createContext({
  guardarEnElContexto: (param) => console.log(param),
  estaLogueado: false
});
 
export default ThemeContext;
