
import './wrapper.css'
export default function(){
  
  const registerCuenta = (nameAcc,nameClient)=>{
    let request = indexedDB.open(nameAcc,1);
    request.addEventListener("upgradeneeded",()=>{
        let db = request.result;
        db.createObjectStore(nameClient,{
            autoIncrement:"true"
        })
    })
  }

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
  const crearCuenta = ()=>{
    let inputName = document.querySelector(".name-acc").value;
    let inputNameStore  = document.querySelector(".name-store").value;
    if(inputName.length > 4 & inputNameStore.length > 4){
        let validacion = document.querySelector(".Validar");
        validacion.style.color= "#479211";
        validacion.textContent = "SE CREO LA CUENTA CORRECTAMENTE";
        setTimeout(()=>{
            validacion.textContent="";
        },2000)
        registerCuenta(inputName,inputNameStore);
    }else{
        let validacion = document.querySelector(".Validar");
        validacion.style.color= "#a35";
        validacion.textContent = "POR FAVOR RELLENE CORRECTAMENTE LOS CAMPOS ";
        setTimeout(()=>{
            validacion.textContent = "";
        },3500)
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
                   <li className="sideBar-options-item"><i class="ri-home-line"></i><a href="http://localhost:3000/" className="item-a"onClick={mostraRoot}>Inicio</a></li>
                   <li className="sideBar-options-item"><i class="ri-account-box-line"></i><a className="item-a active"onClick={mostraRoot}>Crear Cuenta</a></li>
                   <li className="sideBar-options-item"><i class="ri-account-circle-fill"></i><a href="http://localhost:3000/Cuentas"className="item-a"onClick={mostraRoot}>Cuentas</a></li>
                   <li className="sideBar-options-item"><i class="ri-function-line"></i><a href="http://localhost:3000/Gestion" className="item-a"onClick={mostraRoot}>Gestion</a></li>
                   <li className="sideBar-options-item"><i class="ri-slideshow-line"></i><a href="http://localhost:3000/Resultados"className="item-a"onClick={mostraRoot}>Resultados</a></li>                    
               </ul> 
           </div>
           <div className="view">
               <section className="container-newAccount">
                   <h4>CREAR UNA CUENTA</h4>
                   <div className="data-new-acc">
                       <div className="content-name-acc contents">
                           <label>NOMBRE</label>
                           <input type="text" className="name-acc" placeholder="Ejemplo: Cuenta de Abel" />
                       </div>
                       <div className="content-user-acc contents">
                           <label>NOMBRE DEL CLIENTE</label>
                           <input type="text" placeholder="Ejemplo: Abel Hurtado" className="name-store"/>
                       </div>
                       <div className="btn-create-acc">
                           <input type="submit" value="Crear" id="createAcc"  onClick={crearCuenta}/>
                       </div>
                       <div className="Validar">

                       </div>
                   </div>
               </section>
           </div>
       </div>
   );
}


