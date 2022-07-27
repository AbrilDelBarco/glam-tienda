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
/* para ver cant de prendas) */
console.log(document.getElementsByTagName("h3"));
console.log(document.querySelectorAll("h2"));

/* para ver precios */
console.log(document.querySelector("h2"));
let listaPrendas = document.querySelectorAll("h2")

for(let prendas of listaPrendas) {
    console.log(`esta prenda tiene un costo de  ${prendas.innerText}`)
} 

console.log(titulo.innerText);
titulo.innerText = "ideas para outfits";
titulo.innerHTML = "<strong>agrego html</strong>";

titulo.style.color = "red";

titulo.className= "container row"; // cambio de clase //
titulo.setAttribute("class", "titulo1"); //cambio de atributo(valor a modificar, valor deseado//

/* let link = document.querySelector("a");
link.setAttribute("href", "https://www.google.com/");
 */
//crear HTML
let subtitulo = document.createElement("h2");
subtitulo.setAttribute("id", "nuevoElemento");
subtitulo.innerHTML = "<a href=''>este es un link</a>"
console.log(subtitulo);

let a = document.querySelector('a')
a.setAttribute('href', 'https://www.google.com.ar/')