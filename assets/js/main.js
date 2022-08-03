let products = [];
let total = 0;

function add (product, price){
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `pagar $${total}`;
}

function pay (){
    window.alert(products.join(", /n"));
}
let titulo = document.getElementById("titulo");
console.log(titulo);
/* NODOS */
/* para ver cant de prendas */
console.log(document.getElementsByTagName("h3"));
console.log(document.querySelectorAll("h2"));

/* para ver precios */
console.log(document.querySelector("h2"));
let listaPrendas = document.querySelectorAll("h2")

for(let prendas of listaPrendas) {
    console.log(`esta prenda tiene un costo de  ${prendas.innerText}`)
}

//crear HTML
let subtitulo = document.createElement("h2");
subtitulo.setAttribute("id", "nuevoElemento");
subtitulo.innerHTML = "<a href=''>este es un link</a>"
console.log(subtitulo);

let a = document.querySelector('a')
a.setAttribute('href', 'https://www.google.com.ar/')

//Nuevos elementos, ingresos de ropa//
/* let ingresos = document.getElementById("indumentaria");
let indumentaria = ["chombaT", "chombaL", "basica","calza"];

for(const ingreso of ingresos){
    let li = document.createElement("li");
    li.innerHTML = ingreso
    ingresos.appendChild(li);
    
    console.log(ingresos);
    console.log(indumentaria);
    console.log(ingreso);

}
let producto = { id: 1, nombre: "chombaT", precio: 3500};
let concatenando = "ID : " + producto.id + "- Producto" + producto.nombre + "$" + producto.precio; 
  */
class Producto{
    constructor(prenda, categoria, costo){
        this.prenda=prenda;
        this.categoria=categoria;
        this.costo = costo; 
    }
}
let listaProductos = [
    {prenda: "chomba", categoria:"indumentaria", costo:2000},
    {prenda:"calza", categoria:"indumentaria", costo:1000},
    {prenda:"buzo", categoria:"indumentaria", costo:2500},
];

const agregarProductos = ()=>{
    let prenda = document.querySelector("#prenda").value;
    let categoria = document.querySelector("#categoria");
    let costo = parseFloat(document.querySelector("#costo").value);

    let productoNuevo = new Producto(prenda, categoria, costo);
    listaProductos.push(productoNuevo);
    return productoNuevo;

}
listaProductos.forEach(el => {
    document.createElement("div");
nodo.innerHTML = `<h3>${el.prenda}</h3>
                <h2>${el.categoria}<h2>
                `
})
