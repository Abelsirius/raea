export default function (){
    

    const mostraData=(nameAcc)=>{
       let contentResultados = document.querySelector(".resultados-accounts");
       contentResultados.style.height = "372px";
       let wrapper = document.createElement("DIV");
       wrapper.setAttribute("class","cuenta");
       let p = document.createElement("A");
       p.setAttribute("href","http://localhost:3000/Gestion")
       p.addEventListener("click",()=>{
               let request = indexedDB.open(nameAcc);
               localStorage.setItem("nameCuenta",nameAcc)
               console.log(localStorage.getItem("nameCuenta"))
               request.addEventListener("success",()=>{
               let db = request.result;
               let nameObject = db.objectStoreNames[0];
               localStorage.setItem("nameObject",nameObject);
               console.log(localStorage.getItem("nameObject"))
           })
       })
       let b = document.createElement("B");
       let btnPDelete = document.createElement("A")
       btnPDelete.addEventListener("click",()=>{
            let dbDelete = indexedDB.deleteDatabase(nameAcc);
            localStorage.removeItem("nameObject");
            localStorage.removeItem("nameCuenta");
            window.location.replace('');
       })
       btnPDelete.classList.add("btn-eliminar")
       btnPDelete.textContent="Eliminar";
       b.textContent=nameAcc;
       p.appendChild(b)
       wrapper.appendChild(p)
       wrapper.appendChild(btnPDelete)
       contentResultados.appendChild(wrapper)
    }

    const mostrarCuentas =()=>{
    let contentResultados = document.querySelector(".resultados-accounts").innerHTML="";
       let base = indexedDB.databases().then(res=>{
        if(res.length != 0){
            res.map(nameacc=>{
                mostraData(nameacc.name)
            })
        }else{
        let contentResultados = document.querySelector(".resultados-accounts")
        contentResultados.style.color="#b21";
        contentResultados.style.padding="15px 0px";
        contentResultados.style.fontSize="15px";
        contentResultados.style.height = "auto";
        contentResultados.style.overFlow = "none";
        contentResultados.style.background="#cc9ba2";
        
        

        contentResultados.textContent="No Hay Cuentas";
            
        }
       });
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
                       <li className="sideBar-options-item"><i class="ri-account-box-line"></i><a href="http://localhost:3000/crearCuenta"className="item-a"onClick={mostraRoot}>Crear Cuenta</a></li>
                       <li className="sideBar-options-item"><i class="ri-account-circle-fill"></i><a href="#"className="item-a active"onClick={mostraRoot}>Cuentas</a></li>
                       <li className="sideBar-options-item"><i class="ri-function-line"></i><a href="http://localhost:3000/Gestion" className="item-a"onClick={mostraRoot}>Gestion</a></li>
                       <li className="sideBar-options-item"><i class="ri-slideshow-line"></i><a href="http://localhost:3000/Resultados"className="item-a"onClick={mostraRoot}>Resultados</a></li>                    
                   </ul> 
               </div>
               <div className="view">
               <section className="container-accounts ">
                 <h3>Cuentas</h3>
                 <p onClick={mostrarCuentas} className="btn-showAccs">Mostrar Cuentas</p>
                <div className="resultados-accounts">
                 </div>
                 </section>
               </div>
           </div>
       );
}