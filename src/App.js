import logo from './logo.svg';
import './App.css';
import Inicio from './Inicio';
import Home from './Home';
import Create from './Create'
import Agregar  from './Agregar';
import Cuentas from './Cuentas';
import Resultados from './Resultados';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  let nAccount  = localStorage.getItem("nameCuenta");
  let nClient  = localStorage.getItem("nameObject");
  return ( 
  <BrowserRouter>
   <Switch>
     <Route path="/Resultados" nombreClient={nClient}> 
        <Resultados />
      </Route> 
     <Route path="/Gestion"> 
        <Agregar nombreDeLaCuenta={nAccount} nombreDelCliente={nClient}/>
      </Route> 
      <Route path="/crearCuenta"> 
        <Create/>
      </Route>
      <Route path="/Cuentas"> 
        <Cuentas/>
      </Route>      
      <Route path="/"> 
       <Home/>
      </Route>
   </Switch>
  </BrowserRouter>   
  );
}

export default App;
