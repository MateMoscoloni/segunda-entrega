//clases
class Juego {
    constructor(nombre, formato, precio, info){
      this.nombre = nombre;
      this.formato = formato;
      this.precio = precio;
      this.info = info;
    }
agregarJuego(producto){
    this.productos.push(producto);
}
//le suma el 65% de impuestos por compras
calcularTotal() {
    return this.precio * 1.65;
    }
}
  
class Item {
    constructor(juego, cantidad) {
        this.juego = juego;
        this.cantidad = cantidad;
    }
}

//array de juegos
const juego1 = new Juego("Elden Ring", "digital", 4999, "un juego de aventura mundo abierto. De los creadores de Dark Souls")
const juego2 = new Juego("Hades", "digital", 329, "un roguelite basado en la mitología griega")
const juego3 = new Juego("Hunt", "digital", 799, "un battleroyale ambientado en los 70'")
const juego4 = new Juego("Portal", "físico, edición coleccionista", 1799, "un clásico de la compañía Valve")

const juegos = new Array(juego1, juego2, juego3, juego4);

const contenedor = document.getElementById('accordion'); //agarro el div contenedor
const miLocalStorage = window.localStorage;

//crear la carta (individual) y crear todas las cartas
function crearCarta(name, type, price){
    let carta = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${type}</p>
            <p class="card-text">${price}</p>
            <button class="agregar_carrito btn btn-primary">A comprar</button>
        </div>
    </div>
    `;
    contenedor.innerHTML+=carta
}


function crearMas(){
    juegos.forEach(juego => crearCarta(juego.nombre, juego.formato, juego.calcularTotal()))
}
crearMas()

//click para sumar al local storage

function mostraEnPantalla() {
    let sumar = document.getElementsByClassName("agregar_carrito");
    sumar.map(item =>  console.log(item))
    /* prod.addEventListener("click", addToChart)  */
 /*      */
}

function addToChart(datos) {
    let dato = datos.path[1].children[0].innerText;
    let obj = juegos.find(o => o.nombre === dato)
    const item = new Item(obj, 1)
    const jJSON = JSON.stringify(item)
    console.log(item)
    let datoGuardado = miLocalStorage.getItem(obj.nombre)
    miLocalStorage.setItem('carrito', jJSON)
  /*   if (datoGuardado === "") {
    } else {
        let deserial = JSON.parse(datoGuardado)
        console.log(datoGuardado)
        deserial.cantidad = deserial.cantidad + 1;
        let nuevoD = JSON.stringify(deserial)
        miLocalStorage.setItem('carrito', nuevoD)
        console.log(deserial)
    } */
}
mostraEnPantalla()

///arranca el carrito

const cont_tabla = document.getElementById('tablac');
 


function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function mostrarTablaCompra(nom, tipo, prc) {
    let carro = `<table class="table">
    <thead><
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Tipo</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>${nom}</td>
        <td>${tipo}</td>
        <td>${prc}</td>
      </tr>
    </tbody>
  </table>`;
  cont_tabla.innerHTML += carro
}
mostrarTablaCompra("elden ring", "digital", 1234523)  






//para mostrar obtengo todo del local storage y lo meto en un array
//deserilizar todo
//crear tablas con for each