# SessionStorage en JavaScript
Escrito por Giusstation3

## ¿Qué es sessionStorage?
Es una API del navegador que permite almacenar datos de forma temporal en el lado del cliente. A diferencia de las cookies, no se envían automáticamente al servidor en cada petición, y a diferencia de localStorage su duración está limitada a la sesión de la pestaña o ventana. Esto significa que los datos se mantienen mientras la pestaña esté abierta y se borran al cerrarla.

Igual que local storage almacena información en pares de "key" y "value".

## Propiedades y estructura
Sus propiedades principales son las siguientes:

* setItem: Para almacenar la información en un par de key y value.
* getItem: Para recuperar el valor almacenado dando la key.
* removeItem: Para eliminar un valor de sessionStorage. 
* clear: Para borrar todo el almacenamiento de la sesión.
* length: Para obtener el número de elementos almacenados.

```javascript
sessionStorage.setItem("usuario", "Gius");

const nombre = sessionStorage.getItem("usuario");

sessionStorage.removeItem("usuario");

sessionStorage.clear();

console.log(sessionStorage.length);
```

Cada dato se guarda como string. Para guardar objetos es necesario convertirlos usando JSON.stringify() al guardar y JSON.parse() al recuperar.

## Requerimientos
Para poder utilizarlo se requiere de lo siguiente:

* Un navegador que soporte la API Web Storage.
* Ejecutar el código usando HTTPS.
* Que el almacenamiento no esté bloqueado por el usuario o por configuración del buscador.


## Diferencias con localStorage
Las diferencias que tiene sessionStorage con localStorage son las siguientes:

sessionStorage dura solo mientras la pestaña está abierta mientras que localStorage persiste incluso después de cerrar y reabrir el navegador. EL sessionStorage es único para cada tab, en localstorage se comparte el mismo almacenamiento independientemente de la tab. Finalmente, sessiónStorage se usa para datos que no deben almacenarse después de salir de la tab como por ejemplo la información que llenaste en un formulario, mientras que localStorage puede ser para cosas como el modo oscuro si está activado o no.

## Fuentes
[MDN Web Docs - sessionStorage](https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage)

[Window SessionStorage W3Schools](https://www.w3schools.com/jsref/prop_win_sessionstorage.asp)

[Difference Between Local Storage, Session Storage And Cookies](https://www.geeksforgeeks.org/javascript/difference-between-local-storage-session-storage-and-cookies/)