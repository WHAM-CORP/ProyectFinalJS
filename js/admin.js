const btnCerrar = document.querySelector(".cerrarSesion")

function validar(clave) {
    if (clave !== true) {
        window.location.href = "../index.html"
    } else {
        // window.alert("Bienvenido Administrador")
    }
}

validar(elementDelLs("UserAdmin"))

btnCerrar.onclick = () => {
    localStorage.removeItem("UserAdmin")
    window.location.href = "../index.html"
}

// 
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data) => {
        const dataProducts = data
        datosProducts(dataProducts)
    })
    .catch((error) => console.log("Error en la carga"))

const tablaProd = document.querySelector(".tabla")

function datosProducts(array) {
    const tablaProdNew = array.reduce((acc, elemento) => {
        return acc + `
        <tbody class="cuerpo">
            <tr class="filas">
                <td class="casillas">
                    ${elemento.title}
                </td>
                <td class="casillas">
                    ${elemento.description}
                </td>
                <td class="casillas">
                ${elemento.price}
            </td>
            </tr>
        </tbody>       
        `
    }, `
    <thead>
        <tr>
            <th>
                Nombre Prod
            </th>
            <th>
                Descipcion
            </th>
            <th>
                Pecio
            </th>
        <tr>
    </thead>
    `)
    tablaProd.innerHTML = tablaProdNew
}
