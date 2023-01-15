const usuario=document.querySelector("#user")
const password=document.querySelector("#pass")
const formulario=document.querySelector(".loguin")
const contenLoguin=document.querySelector(".contenedor-loguin")

const usuarioAdmin={
    id:"001",
    user:"Administrador",
    pass:"admin2022"

}
const usuarioNormal={
    id:"001",
    user:"Usuario",
    pass:"user2022"
}

const subirAlLS = (clave ,valor)=>{
    localStorage.setItem(clave,JSON.stringify(valor))
}
const elementDelLs =(clave)=>{
    return JSON.parse(localStorage.getItem(clave)) 
}

formulario.onsubmit = (e) =>{
    e.preventDefault()
    if(usuario.value === usuarioAdmin.user && password.value===usuarioAdmin.pass){
        subirAlLS("UserAdmin",true)
        contenLoguin.style.display="none"
        window.location.href="./html/admin.html"

    }else if(usuario.value===usuarioNormal.user && password.value===usuarioNormal.pass){
        subirAlLS("UserNormal",true)
        contenLoguin.style.display="none"
        window.location.href="./html/user.html"
        
    }else{
        window.alert("USUARIO NO EXISTE EN EL SISTEMA")
    }
}

