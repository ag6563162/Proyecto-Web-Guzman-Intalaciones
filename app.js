let datoscliente = [{
    nombre: "jose",
    telefono: "234-567-5432",
    direccion: "calle #10 barrio juanito"
},{
    nombre: "juan",
    telefono:"876-098-2345",
    direccion: "calle 2 barrio pedro"
    
}]

function agregarcliente() {
    let nombre = document.getElementById('nombre').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;

    datoscliente.push({
        nombre: nombre,
        telefono: telefono,
        direccion: direccion 
        
    });

    alert("Cliente agregado exitosamente!");

    let ultimo = datoscliente.length -1;
    
    console.log(`${datoscliente[0].nombre} - ${datoscliente[0].telefono} - ${datoscliente[0].direccion}`);
    console.log(`${datoscliente[ultimo].nombre} - ${datoscliente[ultimo].telefono} - ${datoscliente[ultimo].direccion}`);

    document.getElementById('nombre').value = "";
    document.getElementById('telefono').value = "";
    document.getElementById('direccion').value = "";
};

function mostrarcliente() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < datoscliente.length; i++) {
        resultado.innerHTML += `<p>Nombre: ${datoscliente[i].nombre} </p>`;
        resultado.innerHTML += `<p>Telefono: ${datoscliente[i].telefono} </p>`;
        resultado.innerHTML += `<p>Direccion: ${datoscliente[i].direccion} </p>`;
        resultado.innerHTML += `=<hr>`;
        
    };
};

mostrarcliente()