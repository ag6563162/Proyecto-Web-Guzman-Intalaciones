/*  let productos = [{
    producto: "Corredera Estilo Europeo M-100",
    precio: "6000"
},{
    producto: "Corredera Estilo Europeo C-70",
    precio: "5000"
},{
    producto: "Corredera Estilo Europeo P-90",
    precio: "4000"
},{
    producto: "Corredera Estilo Tradicional",
    precio: "2500"
}]; */
 
let aagregarproducto = document.querySelector('button');
let table = document.querySelector('#cuerpoTabla');

let productoInput = document.querySelector('#producto');
let precioInput = document.querySelector('#precio');
let cantidadInput = document.querySelector('#cantidad');

    agregarproducto.addEventListener('click', () => {
    let producto = productoInput.value;
    let precio = precioInput.value;
    let cantidad = cantidadInput.value;

    let subtotal = cantidad * precio;

    let template = `
            <tr>
            <td>${producto}</td>
            <td>${cantidad}</td>
            <td>${precio}</td>
            <td> ${subtotal}</td>
            </tr>
    `

    table.innerHTML += template;

    let valorTotal = document.getElementById('inputTotal');
    if (subtotal > 0) {
    valorTotal.value = subtotal;
    console.log(subtotal)
};
});

