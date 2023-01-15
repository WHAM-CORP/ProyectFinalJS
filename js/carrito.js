let infoLs = JSON.parse(localStorage.getItem("carrito"))

const cargarCarrito = (array) => {

    const cardVendidas = document.querySelector(".contenedor_productos")

    const datosVenta = array.reduce((acc, element) => {
        return acc + `
       <div class="card_prod" id="prod-${element.id}">
         <img class="prod_ima" src="${element.image}" alt="${element.category}">
         <p>
         <h2>${element.title}</h2>
         <h3>${element.price}</h3> 
         </p>
         <button id="prod-${element.id}" class="botones" > Eliminar de Carrito 
         </button>
       </div>
    `
    }, "")
    cardVendidas.innerHTML = datosVenta
}

cargarCarrito(infoLs || [])


function borrarVenta(array) {
    const botones = document.querySelectorAll(".botones")

    botones.forEach((element) => {
        element.onclick = () => {
            const id = element.id.slice(5)
            const filtro = array.filter((elem) => {
                return elem.id != Number(id)
            })
            infoLs = filtro
            localStorage.setItem("carrito", JSON.stringify(infoLs))
            cargarCarrito(infoLs)
            Swal.fire(
                'Eliminado del carrito correctamente',
                'Gracias por Elegir',
                'success'
            )
            borrarVenta(infoLs)

        }
    })
}
borrarVenta(infoLs)

const botonBorrarCarrito = document.querySelector("#allProd")

botonBorrarCarrito.onclick = () => {
    localStorage.removeItem("carrito")
    document.querySelector(".contenedor_productos").innerHTML = "no hay productos en lam lista"
}