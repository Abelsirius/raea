(this.webpackJsonpsistemacuentas=this.webpackJsonpsistemacuentas||[]).push([[0],{14:function(e,A,t){},22:function(e,A,t){},32:function(e,A,t){},33:function(e,A,t){"use strict";t.r(A);var c=t(1),n=t.n(c),a=t(15),s=t.n(a),o=(t(22),t(14),t(0)),i=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"Gestion de cuentas"}),Object(o.jsxs)("div",{className:"introduccion",children:[Object(o.jsxs)("p",{className:"about",children:["SOBRE EL SISTEMA",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Este sistema sirve para  gestionar las cuentas de tus clientes, tambien para hacer calculos instantaneos sobre las deudas de tus clientes , tambien te permite saber la fecha de la compra y otra cosas utiles."]}),Object(o.jsxs)("div",{className:"instrucciones",children:[Object(o.jsx)("h3",{children:"Cosas que debes saber"}),Object(o.jsx)("p",{children:"1. Ir a la parte de la izquierda, y hacer click en crear cuenta."}),Object(o.jsx)("p",{children:"2. Rellenar los campos, te pide un nombre para la cuenta, ejem: Cuenta de Abel. Tambien te pide el nombre de tu cliente: Abel Hurtado."}),Object(o.jsx)("p",{children:"3. Tambien puedes eliminar cuentas que hayas creado, pero primero tienes que ir a Cuentas y pasar el mouse sobre  la cuenta."})]})]})]})},l=function(e){return Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)("div",{className:"view",children:Object(o.jsx)(i,{})})})},r=t(6),d=t.p+"static/media/aspa.2510b403.png",j=t(5),u=function(){return Object(o.jsxs)("div",{className:"feed",children:[Object(o.jsx)("img",{src:d,className:"aspa"}),Object(o.jsx)("h1",{children:"Se Creo La Cuenta Correctamente"}),Object(o.jsx)("p",{className:"consejo",children:"Puedes ver la cuenta en :"}),Object(o.jsx)(j.b,{to:"/Cuentas",className:"redireccion",children:"Cuentas"})]})},g=function(){var e=Object(c.useState)(!0),A=Object(r.a)(e,2),t=A[0],n=A[1],a=Object(c.useState)(""),s=Object(r.a)(a,2),i=s[0],l=s[1],d=Object(c.useState)(""),j=Object(r.a)(d,2),g=j[0],m=j[1];return Object(o.jsx)("div",{className:"wrapper",children:t?Object(o.jsx)("div",{className:"view",children:Object(o.jsxs)("section",{className:"container-newAccount",children:[Object(o.jsx)("h4",{children:"CREAR UNA CUENTA"}),Object(o.jsxs)("div",{className:"data-new-acc",children:[Object(o.jsxs)("div",{className:"content-name-acc contents",children:[Object(o.jsx)("label",{children:"NOMBRE"}),Object(o.jsx)("input",{type:"text",className:"name-acc",placeholder:"Ejemplo: Cuenta de Abel",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(o.jsxs)("div",{className:"content-user-acc contents",children:[Object(o.jsx)("label",{children:"NOMBRE DEL CLIENTE"}),Object(o.jsx)("input",{type:"text",placeholder:"Ejemplo: Abel Hurtado",className:"name-store",value:g,onChange:function(e){return m(e.target.value)}})]}),Object(o.jsx)("div",{className:"btn-create-acc",children:Object(o.jsx)("input",{type:"submit",value:"Crear",id:"createAcc",onClick:function(){var e=document.querySelector(".name-acc").value,A=document.querySelector(".name-store").value;if(e.length>4&A.length>4){var c=document.querySelector(".Validar");c.style.color="#479211",c.textContent="SE CREO LA CUENTA CORRECTAMENTE",l(""),m(""),n(!t),setTimeout((function(){c.textContent=""}),2e3),function(e,A){var t=indexedDB.open(e,1);t.addEventListener("upgradeneeded",(function(){t.result.createObjectStore(A,{autoIncrement:"true"})}))}(e,A)}else{var a=document.querySelector(".Validar");a.style.color="#a35",a.textContent="POR FAVOR RELLENE CORRECTAMENTE LOS CAMPOS ",setTimeout((function(){a.textContent=""}),3500)}}})}),Object(o.jsx)("div",{className:"Validar"})]})]})}):Object(o.jsx)(u,{})})},m=t(8),b=t(13),C=(t(32),function(e){var A=Object(c.useState)({producto:"",price:""}),t=Object(r.a)(A,2),n=t[0],a=t[1],s=function(e){a(Object(b.a)(Object(b.a)({},n),{},Object(m.a)({},e.target.name,e.target.value)))},i=function(e,A,t){var c=document.querySelector(".nombres"),n=document.createElement("DIV"),a=document.createElement("DIV"),s=document.createElement("P"),o=document.createElement("P"),i=document.createElement("p");return a.classList.add("wraper"),n.classList.add("content"),s.classList.add("item-producto"),o.classList.add("item-precio"),i.classList.add("delete-producto"),s.textContent=e,o.textContent="s/ "+A,i.textContent="Eliminar",a.appendChild(s),a.appendChild(o),n.appendChild(a),n.appendChild(i),i.addEventListener("click",(function(){var e=prompt("\xbfDeseas Eliminar Esta Venta , si o no?");console.log(e),"si"===e||"s"===e||"S"===e||"SI"===e?(!function(e){console.log(e);var A=indexedDB.open(localStorage.getItem("nameCuenta"));A.addEventListener("success",(function(){A.result.transaction(localStorage.getItem("nameObject"),"readwrite").objectStore(localStorage.getItem("nameObject")).delete(e)}))}(t),c.removeChild(n)):console.log(e)})),n},l=function(){if(null!=e.nombreDeLaCuenta&null!=e.nombreDelCliente){var A=indexedDB.open(localStorage.getItem("nameCuenta"));A.addEventListener("success",(function(){var e=A.result,t=document.querySelector(".nombres");t.innerHTML="";var c=e.transaction(localStorage.getItem("nameObject"),"readonly").objectStore(localStorage.getItem("nameObject")).openCursor(),n=document.createDocumentFragment();c.addEventListener("success",(function(){if(c.result){var e=i(c.result.value.objecto,c.result.value.monto,c.result.key);n.appendChild(e),c.result.continue()}else{document.querySelector(".nombres").appendChild(n);t.offsetHeight>173&&(console.log("raa"),t.classList.add("overFlow"),t.style.height="380px")}}))}))}};return Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("div",{className:"view",children:[Object(o.jsx)("h1",{className:"name-account-client",children:"Agregar fiados a la cuenta"}),Object(o.jsx)("h2",{className:"nombreMrd name-account-client",children:e.nombreDeLaCuenta?e.nombreDeLaCuenta:Object(o.jsx)("p",{style:{color:"#a12"},children:"No Elejiste una cuenta"})}),Object(o.jsxs)("div",{className:"content-add visible",children:[Object(o.jsxs)("div",{className:"content-inputs",children:[Object(o.jsxs)("select",{id:"nombre",autoCorrect:"false",name:"producto",onChange:s,children:[Object(o.jsx)("option",{children:"Arroz"}),Object(o.jsx)("option",{children:"Azucar"}),Object(o.jsx)("option",{children:"Gaseosa"}),Object(o.jsx)("option",{children:"Chicles"}),Object(o.jsx)("option",{children:"Galleta: Casino"}),Object(o.jsx)("option",{children:"Galleta: Picara"}),Object(o.jsx)("option",{children:"Rellenita"}),Object(o.jsx)("option",{children:"Galleta: Soda"}),Object(o.jsx)("option",{children:"Galleta: Vainia"}),Object(o.jsx)("option",{children:"Galleta: Cranell"}),Object(o.jsx)("option",{children:"Cocoa"}),Object(o.jsx)("option",{children:"Champ\xfa"}),Object(o.jsx)("option",{children:"Jugo: Liber"}),Object(o.jsx)("option",{children:"Jugo: Cifrut"}),Object(o.jsx)("option",{children:"Jugo: Pulp"}),Object(o.jsx)("option",{children:"Kakun"}),Object(o.jsx)("option",{children:"Chocman"}),Object(o.jsx)("option",{children:"Papas: Lays"}),Object(o.jsx)("option",{children:"Chicito"}),Object(o.jsx)("option",{children:"Dorito"}),Object(o.jsx)("option",{children:"Cuates"}),Object(o.jsx)("option",{children:"Chetos"}),Object(o.jsx)("option",{children:"Chistris"}),Object(o.jsx)("option",{children:"Yogurt"}),Object(o.jsx)("option",{children:"Sivarita"}),Object(o.jsx)("option",{children:"Tuco Tallarin"}),Object(o.jsx)("option",{children:"Tuco Sivarita"}),Object(o.jsx)("option",{children:"Tallarines"}),Object(o.jsx)("option",{children:"Mallonesa"}),Object(o.jsx)("option",{children:"Mermelada"}),Object(o.jsx)("option",{children:"Mantequia"}),Object(o.jsx)("option",{children:"Ca\xf1onazo"}),Object(o.jsx)("option",{children:"Mentitas"}),Object(o.jsx)("option",{children:"Chocolate Triangulo"}),Object(o.jsx)("option",{children:"Sublime"}),Object(o.jsx)("option",{children:"Menestra: Ojo Negro"}),Object(o.jsx)("option",{children:"Menestra: Lenteja Serrana"}),Object(o.jsx)("option",{children:"Menestra: Castilla"}),Object(o.jsx)("option",{children:"Menestra: Panamito"}),Object(o.jsx)("option",{children:"Cancha: Serrana"}),Object(o.jsx)("option",{children:"Cancha: Perla"}),Object(o.jsx)("option",{children:"Lejia"}),Object(o.jsx)("option",{children:"Jabon"}),Object(o.jsx)("option",{children:"Detergente"}),Object(o.jsx)("option",{children:"Aceite"}),Object(o.jsx)("option",{children:"Leche"}),Object(o.jsx)("option",{children:"Atun"}),Object(o.jsx)("option",{children:"Sporade"}),Object(o.jsx)("option",{children:"Chupetines"})]}),Object(o.jsx)("input",{type:"number",id:"monto",placeholder:"Precio a pagar",name:"price",spellcheck:"false",onChange:s})]}),Object(o.jsxs)("div",{className:"options-btn",children:[Object(o.jsx)("button",{id:"btn-add",onClick:function(){var A=document.getElementById("nombre").value,t=document.getElementById("monto").value;if(e.nombreDeLaCuenta){if(t.length>0&""!==A){var c=new Date,n="".concat(c.getDate(),"/").concat(c.getMonth()+1,"/").concat(c.getYear()-100),a=indexedDB.open(localStorage.getItem("nameCuenta"));a.addEventListener("success",(function(){a.result.transaction(localStorage.getItem("nameObject"),"readwrite").objectStore(localStorage.getItem("nameObject")).add({objecto:A,monto:t,fechaFio:n}),l()}))}}else alert("mano algo salio mal :V")},children:"Agregar"}),Object(o.jsx)("button",{className:"showNames",onClick:l,children:"Productos Fiados"}),Object(o.jsx)(j.b,{to:"/Resultados",className:"btn_to_resultado",children:"Resultado"})]})]}),Object(o.jsx)("div",{className:"nombres"})]})})}),h=function(){return Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)("div",{className:"view",children:Object(o.jsxs)("section",{className:"container-accounts ",children:[Object(o.jsx)("h3",{children:"Cuentas"}),Object(o.jsx)("p",{onClick:function(){document.querySelector(".resultados-accounts").innerHTML="",indexedDB.databases().then((function(e){if(0!=e.length)e.map((function(e){!function(e){var A=document.querySelector(".resultados-accounts");A.style.height="372px";var t=document.createElement("DIV");t.setAttribute("class","cuenta");var c=document.createElement("A");c.setAttribute("href","/Gestion"),c.addEventListener("click",(function(){var A=indexedDB.open(e);localStorage.setItem("nameCuenta",e),console.log(localStorage.getItem("nameCuenta")),A.addEventListener("success",(function(){var e=A.result.objectStoreNames[0];localStorage.setItem("nameObject",e),console.log(localStorage.getItem("nameObject"))}))}));var n=document.createElement("B"),a=document.createElement("A");a.addEventListener("click",(function(){indexedDB.deleteDatabase(e),localStorage.removeItem("nameObject"),localStorage.removeItem("nameCuenta"),window.location.replace("")})),a.classList.add("btn-eliminar"),a.textContent="Eliminar",n.textContent=e,c.appendChild(n),t.appendChild(c),t.appendChild(a),A.appendChild(t)}(e.name)}));else{var A=document.querySelector(".resultados-accounts");A.style.color="#b21",A.style.padding="15px 0px",A.style.fontSize="15px",A.style.height="auto",A.style.overFlow="none",A.style.background="#cc9ba2",A.textContent="No Hay Cuentas"}}))},className:"btn-showAccs",children:"Mostrar Cuentas"}),Object(o.jsx)("div",{className:"resultados-accounts"})]})})})},x=function(e){return Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)("div",{className:"view",children:Object(o.jsxs)("section",{className:"container-resultado",children:[Object(o.jsx)("h3",{className:"result-title",children:"Resultado de las Cuentas"}),Object(o.jsxs)("div",{className:"content-resultados-of-buy",children:[Object(o.jsx)("div",{className:"monto",children:Object(o.jsxs)("h3",{className:"nameOfAccountClient",children:["Cliente :  ",null!==localStorage.getItem("nameObject")?Object(o.jsxs)("b",{children:[" ",localStorage.getItem("nameObject")]}):Object(o.jsx)("b",{style:{color:"#a21"},children:"No Escogiste una Cuenta"})]})}),Object(o.jsx)("div",{className:"monto-a-pagar",children:Object(o.jsx)("span",{className:"montoOfAccountClient",children:"Monto a pagar"})}),Object(o.jsx)("button",{className:"showResults",onClick:function(){if(null!==localStorage.getItem("nameObject")){var e=document.querySelector(".contents-result-numbers");e.style.height="450px",e.innerHTML="";var A=indexedDB.open(localStorage.getItem("nameCuenta"));A.addEventListener("success",(function(){var e=A.result.transaction(localStorage.getItem("nameObject"),"readonly").objectStore(localStorage.getItem("nameObject")).openCursor();e.addEventListener("success",(function(){e.result&&(!function(e,A,t){document.querySelector(".nameOfAccountClient");var c=document.querySelector(".content-resultados-of-buy"),n=(document.createElement("P"),document.querySelector(".contents-result-numbers")),a=document.createElement("B"),s=document.createElement("SPAN"),o=document.createElement("B");if(o.classList.add("fecha"),o.style.padding="0 0 0 5px",o.style.fontWeight="lighter",o.textContent=e,s.textContent=A,s.appendChild(o),a.textContent="S/ "+t,a.classList.add("numbers"),a.appendChild(s),n.appendChild(a),0==c.lastElementChild.classList.contains("btn-total")){var i=document.createElement("BUTTON");i.classList.add("btn-total"),i.textContent="Total",c.appendChild(i),i.addEventListener("click",(function(){for(var e=document.querySelector(".monto-number"),A=document.querySelectorAll(".numbers"),t=0,c=0;c<A.length;c++){var n=A[c].childNodes[0].textContent.replace("S/ ","");t+=Number(n)}e.textContent="S/  "+t.toFixed(2)}))}}(e.result.value.fechaFio,e.result.value.objecto,e.result.value.monto),e.result.continue())}))}))}else{var t=document.querySelector(".contents-result-numbers");t.style.height="450px",t.style.fontSize="25px",t.style.color="#b12",t.style.display="flex",t.style.justifyContent=" center",t.style.alignItems="center",t.textContent="No Elijiste una Cuenta"}},children:"Ver Resultado"}),Object(o.jsx)("div",{className:"contents-result-numbers"}),Object(o.jsxs)("div",{className:"total-pago",children:[Object(o.jsx)("span",{className:"monto-number",children:"X"}),Object(o.jsx)("b",{children:"Monto"})]})]})]})})})},I=t(2),B=function(){var e=localStorage.getItem("admin")?localStorage.getItem("admin"):localStorage.setItem("admin","userName"),A=Object(c.useState)(e),t=Object(r.a)(A,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),l=i[0],d=i[1],u=Object(c.useState)(!1),g=Object(r.a)(u,2),m=g[0],b=g[1],C=function(e){for(var A=document.querySelectorAll(".item-a"),t=0;t<A.length;)t<A.length&&(A[t].className="item-a",t++),e.currentTarget.className="item-a active"};return Object(o.jsxs)("div",{className:"sideBar",children:[Object(o.jsxs)("div",{className:"avatar",children:[Object(o.jsxs)("div",{className:"imgBx",children:[l.length>0?Object(o.jsx)("img",{src:l,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",objectFit:"cover"},className:"avatarUser"}):localStorage.getItem("UrlImgAvatar")?Object(o.jsx)("img",{src:localStorage.getItem("UrlImgAvatar"),style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",objectFit:"cover"},className:"avatarUser"}):console.log("nada"),Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNkY4RTU5QzJBMTAxMUUzQkNFQkUxNzVDOTMyOTg1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNkY4RTU5RDJBMTAxMUUzQkNFQkUxNzVDOTMyOTg1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2RjhFNTlBMkExMDExRTNCQ0VCRTE3NUM5MzI5ODUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2RjhFNTlCMkExMDExRTNCQ0VCRTE3NUM5MzI5ODUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VD3xWgAAFhBJREFUeNrs3d91FEcW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",alt:"Eva Green",className:"determinado"}),Object(o.jsxs)("div",{className:"update-avatar",children:[Object(o.jsx)("img",{src:"data:image/png;base64,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"}),Object(o.jsx)("p",{children:"Subir Avatar"}),Object(o.jsx)("input",{type:"file",onChange:function(e){var A=new FileReader;A.readAsDataURL(e.target.files[0]),A.addEventListener("load",(function(e){d(e.currentTarget.result),localStorage.setItem("UrlImgAvatar",e.currentTarget.result)}))}})]})]}),Object(o.jsxs)("span",{className:"box-username",children:[m?Object(o.jsxs)("form",{className:"box-form-edit-username",onSubmit:function(e){e.preventDefault(),b(!1);var A=document.querySelector(".ri-edit-box-line");A.classList.contains("ocultar")&&A.classList.remove("ocultar")},children:[Object(o.jsx)("input",{type:"text",placeholder:"Nuevo Nombre",onChange:function(e){a(e.target.value),localStorage.setItem("admin",e.target.value)},value:n}),Object(o.jsx)("input",{type:"submit",value:"Actualizar",className:""})]}):n.length>0?Object(o.jsx)("p",{children:n}):Object(o.jsx)("p",{children:"userName"}),Object(o.jsx)("i",{className:"ri-edit-box-line",onClick:function(e){b(!m),e.currentTarget.classList.toggle("ocultar")}})]})]}),Object(o.jsxs)("ul",{className:"sideBar-options",children:[Object(o.jsxs)(j.b,{to:"/",exact:!0,onClick:C,className:"sideBar-options-item",children:[Object(o.jsx)("i",{className:"ri-home-line"}),"Inicio"]}),Object(o.jsxs)(j.b,{to:"/CrearCuenta",onClick:C,className:"sideBar-options-item",children:[Object(o.jsx)("i",{className:"ri-account-box-line"}),"Crear Cuenta"]}),Object(o.jsxs)(j.b,{to:"/Cuentas",onClick:C,className:"sideBar-options-item",children:[Object(o.jsx)("i",{className:"ri-account-circle-fill"}),"Cuentas"]}),Object(o.jsxs)(j.b,{to:"/Gestion",onClick:C,className:"sideBar-options-item",children:[Object(o.jsx)("i",{className:"ri-function-line"}),"Gestion"]}),Object(o.jsxs)(j.b,{to:"/Resultados",onClick:C,className:"sideBar-options-item",children:[Object(o.jsx)("i",{className:"ri-slideshow-line"}),"Resultados"]})]})]})};var E=function(){var e=localStorage.getItem("nameCuenta"),A=localStorage.getItem("nameObject");return Object(o.jsxs)(j.a,{children:[Object(o.jsx)(B,{}),Object(o.jsxs)(I.d,{children:[Object(o.jsx)(I.b,{path:"/",exact:!0,children:Object(o.jsx)(l,{})}),Object(o.jsx)(I.b,{path:"/Resultados",children:Object(o.jsx)(x,{})}),Object(o.jsx)(I.b,{path:"/Gestion",children:Object(o.jsx)(C,{nombreDeLaCuenta:e,nombreDelCliente:A})}),Object(o.jsx)(I.b,{path:"/CrearCuenta",children:Object(o.jsx)(g,{})}),Object(o.jsx)(I.b,{path:"/Cuentas",children:Object(o.jsx)(h,{})}),Object(o.jsx)(I.a,{to:"/"})]})]})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d84aabf0.chunk.js.map