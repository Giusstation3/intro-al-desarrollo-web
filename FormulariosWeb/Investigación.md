# Investigación Múltiple
Por: Giuseppe Valencia
## Etiquetas semánticas y sus diferencias entre sí
En HTML existen etiquetas que de forma visual tienen los mismos resultados pero que semánticamente son diferentes.
Investigar diferencias entre las siguientes etiquetas a nivel visual y a nivel motores de búsqueda.

### `<b>` vs `<strong>`:
Ambas renderizan por defecto como **negritas**. La diferencia es que la etiqueta `<b>` es un texto en negrita, mientras que `<strong>` le da una prioridad semantica mayor a strong.

> The `<strong>` element is for content that is of greater importance, while the `<b>` element is used to draw attention to text without indicating that it's more important. 

### `<i>` vs `<em>` :
Ambas renderizan por defecto como *Italica*. La diferencia está en que la etiqueta `<i>` se usa para especificar que es una palabra fuera del contexto normal como una palabra extranjera en otro idioma, mientras que `<em>` se utiliza para remarcar que esta palabra se debe de leer con énfasis. 

> The `<em>` element represents stress emphasis of its contents, while the `<i>` element represents text that is set off from the normal prose, such as a foreign word. 

### `<s>` vs `<del>` :
Ambas renderizan por defecto como ~~strikethrough~~. La diferencia está en que la etiqueta `<s>` se usa para indicar texto que es incorrecto o que ya no es válido, mientras que en `<del>` se utiliza para mostrar que texto fue eliminado pero con la intención de mostrar el historial de cambios del documento. 

> `<del>` HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, while the `<s>` element is used to represent things that are no longer relevant or no longer accurate.

## Notas
- Es importante mencionar que ninguna de las tags mencionadas anteriormente otorgan un mejor ranking a nivel SEO (Search Engine Optimization) sin embargo sí ayudan a los buscadores y tecnología de accessibilidad a interpretar mejor el contenido dentro de la página web.
- Recuerda que, a pesar de que es posible utilizar estas etiquetas para estilizar texto, siempre es mejor utilizar CSS para estilos.

## Elementos de bloque vs Elementos de línea.
Todos los elementos en HTML tienen una forma de mostrarse predeterminada. Las formas de mostrarse más comunes `block` y `inline`

### Bloque
Un elemento de bloque siempre comienza en una nueva línea, se les coloca de manera automática un margen antes y después del bloque y toman todo el ancho de la página de manera automática. 

Algunos ejemplos de elementos de bloque son: 

-`<p>`

-`<header>`

-`<hr>`

-`<footer>`

-`<ul>`

### Línea
Un elemento de línea no comienza en una nueva línea y es capaz de tomar el espacio que sea necesario. 

Algunos ejemplo de elementos de línea son: 

-`<button>`

-`<br>`

-`<input>`

-`<img>`

-`<strong>`

## Campos de Formularios en HTML

### `<input>`
La etiqueta `<input>` permite recibir datos del usuario. Tiene el atributo `type` que cambia su comportamiento.
Ejemplos de distintos `type`:

```html
<input type="text" placeholder="Escribe tu nombre">
<input type="password" placeholder="Contraseña">
<input type="email" placeholder="Correo electrónico">
<input type="number" min="0" max="100">
<input type="date">
<input type="checkbox"> Acepto términos
<input type="radio" name="opcion"> Opción 1
```

### `<label>`
Se usa para asociar texto descriptivo con un campo de formulario. Mejora accesibilidad.
```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre">
```

### `<output>`
Muestra resultados calculados por scripts.
```html
<form oninput="resultado.value=parseInt(a.value)+parseInt(b.value)">
  <input type="number" id="a"> + <input type="number" id="b">
  = <output name="resultado" for="a b"></output>
</form>
```

### `<progress>`
Representa el progreso de una tarea.
```html
<progress value="70" max="100">70%</progress>
```

### `<select>` y `<option>`
Se usan para crear listas desplegables.
```html
<select>
  <option value="mex">México</option>
  <option value="usa">Estados Unidos</option>
  <option value="esp">España</option>
</select>
```

### `<textarea>`
Permite capturar texto de varias líneas.
```html
<label for="comentarios">Comentarios:</label><br>
<textarea id="comentarios" rows="4" cols="50"></textarea>
```

## Sources
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/s
- W3Schools.com. (n.d.). https://www.w3schools.com/html/html_blocks.asp