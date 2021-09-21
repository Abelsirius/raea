export default function(props){
      const mostrarResultados = (fecha,producto,numeros) =>{
        let h3Content = document.querySelector(".nameOfAccountClient")
        let containerResults = document.querySelector(".content-resultados-of-buy");
        let p = document.createElement("P");
        let divNumers = document.querySelector(".contents-result-numbers");
        let b = document.createElement("B");
        let span = document.createElement("SPAN");
        let bFecha = document.createElement("B");
        bFecha.classList.add("fecha");
        bFecha.style.padding = "0 0 0 5px"
        bFecha.style.fontWeight = "lighter"
        bFecha.textContent = fecha;
       span.textContent = producto;
       span.appendChild(bFecha)
        b.textContent ="S/ " + numeros;
        b.classList.add("numbers");
        b.appendChild(span)
        divNumers.appendChild(b)
        if (containerResults.lastElementChild.classList.contains("btn-total") == false ){
                      let btn  = document.createElement("BUTTON");
                     btn.classList.add("btn-total")
                     btn.textContent = "Total";
                     containerResults.appendChild(btn)
                     btn.addEventListener("click",()=>{
                       let contentnumber = document.querySelector(".monto-number");
                       let number = document.querySelectorAll(".numbers");
                       let suma = 0;
                       for (let i = 0; i < number.length; i++) {
                           let text = number[i].childNodes[0].textContent;
                           let result = text.replace("S/ ","");
                           suma+= Number(result);
                       }
                      contentnumber.textContent = "S/  " + suma.toFixed(2);
                     })
        }


      }
       const compartirDatos = ( ) =>{
        let divNumers = document.querySelector(".contents-result-numbers");
        divNumers.style.height = "229px"
        divNumers.innerHTML=""
           let request  = indexedDB.open(localStorage.getItem("nameCuenta"));
           request.addEventListener("success",()=>{
            let db = request.result;
            let transactionDb =  db.transaction(localStorage.getItem("nameObject"),"readonly");
            let object =  transactionDb.objectStore(localStorage.getItem("nameObject"));
            let cursor = object.openCursor();
            cursor.addEventListener("success",()=>{
               if (cursor.result) {
                mostrarResultados(cursor.result.value.fechaFio,cursor.result.value.objecto,cursor.result.value.monto)
                cursor.result.continue()
               }
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
           return (
               <div className="wrapper">
                   <div className="sideBar">
                      <div className="avatar">
                        <img src="/img/eva.jpg" alt="Eva Green"/>
                        <span>Ruth</span>   
                       </div>
                       <ul className="sideBar-options">
                           <li className="sideBar-options-item"><i class="ri-home-line"></i><a href="http://localhost:3000/" className="item-a"onClick={mostraRoot}>Inicio</a></li>
                           <li className="sideBar-options-item"><i class="ri-account-box-line"></i><a  href="http://localhost:3000/crearCuenta" className="item-a "onClick={mostraRoot}>Crear Cuenta</a></li>
                           <li className="sideBar-options-item"><i class="ri-account-circle-fill"></i><a href="http://localhost:3000/Cuentas"className="item-a"onClick={mostraRoot}>Cuentas</a></li>
                           <li className="sideBar-options-item"><i class="ri-function-line"></i><a href="http://localhost:3000/Gestion" className="item-a"onClick={mostraRoot}>Gestion</a></li>
                           <li className="sideBar-options-item"><i class="ri-slideshow-line"></i><a href="#"className="item-a active"onClick={mostraRoot}>Resultados</a></li>                    
                       </ul> 
                   </div>
                   <div className="view">
                       <section className="container-resultado">
                           <h3 className="result-title">Resultado de las Cuentas</h3>
                           <div className="content-resultados-of-buy">
                               <div className="monto">
                                   <h3 className="nameOfAccountClient">Cliente: {localStorage.getItem("nameObject")}</h3>
                               </div>
                               <div className="monto-a-pagar">
                                   <span className="montoOfAccountClient">Monto a pagar</span>
                               </div>
                               <button className="showResults" onClick={compartirDatos}>Ver Resultados</button>
                               <div className="contents-result-numbers">

                               </div>
                               <div className="total-pago">
                                   <span class="monto-number">X</span>
                                   <b>Monto</b>
                               </div>
                           </div>
                       </section>
                   </div>
               </div>
           );
}