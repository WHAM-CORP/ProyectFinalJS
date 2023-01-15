const btnCerrar = document.querySelector(".cerrarSesionUser")

function validar(clave) {
    if (clave !== true) {
        window.location.href = "../index.html"
    } else {
        //window.alert("Bienvenido Usuario")
    }
}

validar(elementDelLs("UserNormal"))

btnCerrar.onclick = () => {
    localStorage.removeItem("UserNormal")
    window.location.href = "../index.html"
}

//funcion para que aparesca los productos en el html 

const traerDatosAlContainer = (array) => {

    const containerProd = document.querySelector(".contenedor_productos")
    const datosArray = array.reduce((acc, element) => {
        return acc + `
           <div class="card_prod" id="prod-${element.id}">
             <img class="prod_ima" src="${element.image}" alt="${element.category}">
             <p>
             <h2>${element.title}</h2>
             <h3>${element.price}</h3> 
             </p>
             <button id="prod-${element.id}" class="botones" > Agregar al carrito 
             </button>
           </div>
        `
    }, "")
    containerProd.innerHTML = datosArray
}

//funcion para crear el carrito de compras
let compras=[]

function carritoAdd(array){
    const botones=document.querySelectorAll(".botones")

    botones.forEach((element)=>{
        element.onclick=()=>{
            const id = element.id.slice(5)
            const filtro=array.find((elem)=>{
                return elem.id == Number(id)
            })
            compras.push(filtro)
            Swal.fire(
                'Agregado al carrito correctamente',
                'Gracias por Elegir',
                'success'
              )

            localStorage.setItem("carrito",JSON.stringify(compras))
        }
    })
}
const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
compras = productosElegidos || []

// traemos la informacion de la api y ejecutamos la funcion que nos permitira mostrar los datos en la pagina ejecutando las funciones creadas

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data) => {
        const dataProducts = data 
        traerDatosAlContainer(dataProducts)
        carritoAdd(dataProducts)
    })
    .catch((error) => console.log("Error en la carga"))

