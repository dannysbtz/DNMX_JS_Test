// Crear una peticion axios de manera que me permita descargar el contenido de una solicitud GET
// por ejemplo realizar una petición get a la pagina de google https://www.google.com/
import axios from 'axios'

axios.get('https://www.google.com/')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });