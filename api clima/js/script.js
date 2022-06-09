/**
 * Tipos de peticiones-Metodos HTTP
 * get->Bajar recursos
 * post->Crear informacion. Cuando de envia una solicitud por metodo post se puede
 * enviar el body de la solicitud (objeto llave-valor Ej {nombres: pepe, edad:54})
 * delete->Eliminar informacion
 * update->Actualizar información que ya existe en el server
 */

function consultarCiudad() {
    let ciudad = document.getElementById("campo-ciudad").value;
    const options = {
        method: "GET"
    };

    // Petición HTTP
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=7fca1b12884279f3bfaffc2b8ff67534`, options)
        .then(response => response.text())
        .then(data => {
            //Convertimos formato JSON cadena en objeto de JS
            let infoClima = JSON.parse(data);
            console.log(infoClima);
            let latitud = parseFloat(infoClima.coord.lat).toFixed(2);
            let longitud = parseFloat(infoClima.coord.lon).toFixed(2);
            let celsius = parseFloat(infoClima.main.temp - 273.15).toFixed(2);
            let nubosidad = (infoClima.weather[0].description);
            let icono = (infoClima.weather[0].icon);

            document.getElementById('latitud').innerHTML = 'Latitud: ' + latitud + ' grados';
            document.getElementById('longitud').innerHTML = 'Longitud: ' + longitud + ' grados';
            document.getElementById('temperatura').innerHTML = 'Temperatura: ' + celsius + ' °C';
            document.getElementById('nubosidad').innerHTML = 'Nubosidad: ' + nubosidad;
            document.getElementById('icon').setAttribute('src', `http://openweathermap.org/img/wn/${icono}@2x.png`);
        }).catch((err) => { console.log("Info error: ", err); })
}
