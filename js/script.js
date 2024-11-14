
const nextpage = document.getElementById("next-page");
//const texto = document.getElementById("character-list");

nextpage.addEventListener("click", () =>{
    fetch("https://rickandmortyapi.com/api/character/?page=1")
        .then((Response) =>{
            return Response.json()
            console.log(Response)
        })
        .then((data) => {
            console.log(data.results)
            const resultado = data.results
            const lista = document.getElementById("character-list")
            resultado.forEach(resultado =>{
                const divimagen = document.createElement("div")
                divimagen.classList.add("imagen-personaje");
                const imagen = document.createElement("img")
                const nombre = document.createElement("h4") //crea un h4
                nombre.classList.add("nombre-personaje")//Crea una clase para el css
                nombre.innerText = resultado.name //añade en el texto del h4 los nombres
                imagen.src = resultado.image
                divimagen.appendChild(nombre)
                divimagen.appendChild(imagen)//Agregar la imagen al div
                lista.appendChild(divimagen);//Agrega las imagenes al div de la UL 
            })
        })
})

const prevpage = document.getElementById("prev-page")

prevpage.addEventListener("click", () => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
    
    .then((data) => {
        console.log(data)
    })
})


