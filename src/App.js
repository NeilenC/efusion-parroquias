import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material"
import Inicio from './paginas/inicio';
import Parroquia from './paginas/parroquia';
import Sistema from './paginas/sistema-efusion';
import Servicios from './paginas/servicios';
import Suscripcion from './paginas/suscripcion';
import Horarios from './paginas/horarios';
import Navbar from './componentes/Navbar';

const theme = createTheme({
    typography: {
        fontFamily: 'Playfair Display, serif'
    }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/parroquia/:id' element={<Parroquia/>}/>
          <Route path='/horarios/:id' element={<Horarios/>}/>
          <Route path='/sistema-efusion' element={<Sistema/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='/suscripcion' element={<Suscripcion/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
