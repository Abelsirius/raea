
import './style.css'
import { useState } from 'react';

export default function(props){
     const [datos,setDatos] = useState({
         producto:'',
         price:''
     })
     const handleChange = (e) =>{
          setDatos({
            ...datos,
            [e.target.name] : e.target.value
          })
     } 

    const deleteObject = (key) =>{
        console.log(key)
        let request = indexedDB.open(localStorage.getItem("nameCuenta"));
        request.addEventListener("success",()=>{
            let db = request.result;
            let transactionDb =  db.transaction(localStorage.getItem("nameObject"),"readwrite");
            let object =  transactionDb.objectStore(localStorage.getItem("nameObject"));
            object.delete(key)
        })
    } 
    const htmlCode = (producto,precio,id) =>{
        let wrapper = document.querySelector(".nombres");
        let content = document.createElement("DIV")
        let wraper = document.createElement("DIV")
        let p1 = document.createElement("P");
        let p2 = document.createElement("P");
        let p3 = document.createElement("p")
        
        wraper.classList.add("wraper");
        content.classList.add("content");
        p1.classList.add("item-producto");
        p2.classList.add("item-precio");
        p3.classList.add("delete-producto");
        p1.textContent = producto;
        p2.textContent = "s/ " + precio;
        p3.textContent = "Eliminar";
        wraper.appendChild(p1)
        wraper.appendChild(p2)
        content.appendChild(wraper)
        content.appendChild(p3)
        p3.addEventListener("click",()=>{
            deleteObject(id);
            wrapper.removeChild(content)
        })
        return content;

    }
    const addObject =()=>{
      let objecto = document.getElementById("nombre").value;
      let monto = document.getElementById("monto").value;
      if (monto.length > 0 &  objecto != "") {
          let fecha = new Date();
          let fechaFio = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getYear()-100}`
          let request = indexedDB.open(localStorage.getItem("nameCuenta"));
          request.addEventListener("success",()=>{
            let db = request.result;
            let transactionDb =  db.transaction(localStorage.getItem("nameObject"),"readwrite");
            let object =  transactionDb.objectStore(localStorage.getItem("nameObject"));
            object.add({objecto,monto,fechaFio})
            mostrarLaCuenta();
          })
      }
    }
    const mostrarLaCuenta = ()=>{
        if(props.nombreDeLaCuenta != null & props.nombreDelCliente != null){
            let request = indexedDB.open(localStorage.getItem("nameCuenta"));
            request.addEventListener("success",()=>{
                let db = request.result;
                let wrapper = document.querySelector(".nombres");
                wrapper.innerHTML="";
                let transactionDb =  db.transaction(localStorage.getItem("nameObject"),"readonly");
                let object =  transactionDb.objectStore(localStorage.getItem("nameObject"));
                let cursor = object.openCursor();
                let documentFrag = document.createDocumentFragment();
                cursor.addEventListener("success",()=>{
                    if(cursor.result){
                        let contentHtml = htmlCode(cursor.result.value.objecto, cursor.result.value.monto,cursor.result.key);
                        documentFrag.appendChild(contentHtml)
                        cursor.result.continue();
                    }else{
                        let res = document.querySelector(".nombres").appendChild(documentFrag);
                        let heightWrapper = wrapper.offsetHeight;
                        if (heightWrapper > 173) {
                            console.log("raa")
                            wrapper.classList.add("overFlow")
                        }
                    }
                })
            })
        }
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
                           <li className="sideBar-options-item"><i class="ri-account-circle-fill"></i><a href="http://localhost:3000/Cuentas"className="item-a"onClick={mostraRoot}>Cuentas</a></li>
                           <li className="sideBar-options-item"><i class="ri-function-line"></i><a href="#"className="item-a active"onClick={mostraRoot}>Gestion</a></li>
                           <li className="sideBar-options-item"><i class="ri-slideshow-line"></i><a href="http://localhost:3000/Resultados"className="item-a"onClick={mostraRoot}>Resultados</a></li>                    
                       </ul> 
                   </div>
                   <div className="view">
                   <h1 className="name-account-client">Agregar fiados a la cuenta</h1>
                   <h2 className="nombreMrd name-account-client">
                   {props.nombreDeLaCuenta}
                   </h2>
                   <div className="content-add visible">                 
        <div className="content-inputs">
        <select id="nombre" autoCorrect="false" name="producto" onChange={handleChange}>
        <option>Arroz</option>
        <option>Azucar</option>
        <option>Gaseosa</option>
        <option>Chicles</option>
        <option>Galleta: Casino</option>
        <option>Galleta: Picara</option>
        <option>Rellenita</option>
        <option>Galleta: Soda</option>
        <option>Galleta: Vainia</option>
        <option>Galleta: Cranell</option>
        <option>Cocoa</option>
        <option>Champú</option>
        <option>Jugo: Liber</option>
        <option>Jugo: Cifrut</option>
        <option>Jugo: Pulp</option>
        <option>Kakun</option>
        <option>Chocman</option>
        <option>Papas: Lays</option>
        <option>Chicito</option>
        <option>Dorito</option>
        <option>Cuates</option>
        <option>Chetos</option>
        <option>Chistris</option>
        <option>Yogurt</option>
        <option>Sivarita</option>
        <option>Tuco Tallarin</option>
        <option>Tuco Sivarita</option>
        <option>Tallarines</option>
        <option>Mallonesa</option>
        <option>Mermelada</option>
        <option>Mantequia</option>
        <option>Cañonazo</option>
        <option>Mentitas</option>
        <option>Chocolate Triangulo</option>
        <option>Sublime</option>
        <option>Menestra: Ojo Negro</option>
        <option>Menestra: Lenteja Serrana</option>
        <option>Menestra: Castilla</option>
        <option>Menestra: Panamito</option>
        <option>Cancha: Serrana</option>
        <option>Cancha: Perla</option>
        <option>Lejia</option>
        <option>Jabon</option>
        <option>Detergente</option>
        <option>Aceite</option>
        <option>Leche</option>
        <option>Atun</option>
        <option>Sporade</option>
        <option>Chupetines</option>
        </select>
          <input type="number" id="monto" placeholder="Precio a pagar" name="price" spellcheck="false" onChange={handleChange}/>
          </div>
          <div className="options-btn">
             <button id="btn-add" onClick={addObject}>Agregar</button>
             <button className="showNames" onClick={mostrarLaCuenta}>Productos Fiados</button>
          </div>
     </div>
     <div className="nombres">
           
           </div>
                   </div>
               </div>
           );
}