import './wrapper.css';
import Inicio from './Inicio';

export default function(prop){
    
    const mostraRoot = (e)=>{
     let itemA = document.querySelectorAll(".item-a");
     let i = 0;
     while(i < itemA.length){
        if(i < itemA.length){
            itemA[i].className = "item-a";
            i++;
        }
        e.currentTarget.className = "item-a active";
    }
   }
    return (
        <div className="wrapper">
            <div className="sideBar">
               <div className="avatar">
                 <img src="/img/eva.jpg" alt="Eva Green"/>
                 <span>Ruth</span>   
                </div>
                <ul className="sideBar-options">
                    <li className="sideBar-options-item"><i class="ri-home-line"></i><a className="item-a active"onClick={mostraRoot}>Inicio</a></li>
                    <li className="sideBar-options-item"><i class="ri-account-box-line"></i><a href="http://localhost:3000/crearCuenta"className="item-a"onClick={mostraRoot}>Crear Cuenta</a></li>
                    <li className="sideBar-options-item"><i class="ri-account-circle-fill"></i><a href="http://localhost:3000/Cuentas"className="item-a "onClick={mostraRoot}>Cuentas</a></li>
                    <li className="sideBar-options-item"><i class="ri-function-line"></i><a href="http://localhost:3000/Gestion" className="item-a"onClick={mostraRoot}>Gestion</a></li>
                    <li className="sideBar-options-item"><i class="ri-slideshow-line"></i><a href="http://localhost:3000/Resultados"className="item-a"onClick={mostraRoot}>Resultados</a></li>                    
                </ul> 
            </div>
            <div className="view">
                <Inicio/>
            </div>
        </div>
    );
}