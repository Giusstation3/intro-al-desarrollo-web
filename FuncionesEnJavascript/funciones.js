function saludar_usuario(nombre) {
    console.log("Hola, " +  nombre + "! Bienvenido al curso de programación.");
}


function repetir_texto(texto,veces) {
    return ((texto + " ").repeat(veces));
}

/*Recordemos que en JS los String son inmutables debemos convertirlo en un array*/
function invertir_palabra(palabra){
    var palabraArr = palabra.split("");
    var invertir = palabraArr.reverse();
    var res = invertir.join("");
    return res;
}


//De manera interesante de acuerdo con mi investigación los strings se comportan como arrays y se pueden acceder de forma directa
function contar_vocales(texto){
    var contador=0; 
    for(var i=0;i<texto.toLowerCase().length;i++){
        //includes es como el contains y es case sensitive.
        if("aeiou".includes(texto[i].toLowerCase())) {
            contador++;
        }
    }
    return contador;
}

//no existen tuplas en javascript, los arrays son lo más parecido.
function mayusculas_y_minusculas(texto){
    return [texto.toLowerCase(),texto.toUpperCase()];
}


function promedio_lista(numeros){
    var suma=0;
    if(numeros.length === 0){
        return 0
    }
    else if(numeros.length !== 0){
        for(var i=0;i<numeros.length;i++){
            suma+= numeros[i];
        }
    }
    return suma/numeros.length;
}

// Devuelve [maximo, minimo] usando un recorrido simple
function maximo_y_minimo(numeros) {
    if (numeros.length === 0) {
        return [null, null];
    }
    var maximo = numeros[0];
    var minimo = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
        if (numeros[i] < minimo) {
            minimo = numeros[i];
        }
    }
    return [maximo, minimo];
}

function filtrar_pares(numeros) {
    var res = [];
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            res.push(numeros[i]);
        }
    }
    return res;
}

function sumar_elementos_texto(lista_textos) {
    return lista_textos.join(" ");
}

function buscar_elemento(lista, elemento) {
    return lista.includes(elemento);
}


function contar_palabras(frase) {
    var t = frase.trim();
    if (t === "") {
        return 0;
    }
    var partes = t.split(/\s+/);
    return partes.length;
}


function duplicar_elementos(lista) {
    var res = [];
    for (var i = 0; i < lista.length; i++) {
        res.push(lista[i] * 2);
    }
    return res;
}



function capitalizar_palabras(frase) {
    var palabras = frase.split(" ");
    var res = [];
    for (var i = 0; i < palabras.length; i++) {
        var w = palabras[i];
        if (w.length > 0) {
            res.push(w[0].toUpperCase() + w.slice(1).toLowerCase());
        } else {
            res.push(w);
        }
    }
    return res.join(" ");
}


function mezclar_listas(lista1, lista2) {
    var res = [];
    var limite = Math.min(lista1.length, lista2.length);
    for (var i = 0; i < limite; i++) {
        res.push(lista1[i]);
        res.push(lista2[i]);
    }
    return res;
}


function contar_frecuencia(lista) {
    var conteo = {};
    for (var i = 0; i < lista.length; i++) {
        var item = String(lista[i]);
        if (conteo[item] === undefined) {
            conteo[item] = 1;
        } else {
            conteo[item] += 1;
        }
    }
    return conteo;
}


if (typeof require !== "undefined" && require.main === module) {
    saludar_usuario("Axi");
    console.log(repetir_texto("Hola", 3));
    console.log(invertir_palabra("café"));
    console.log(contar_vocales("AmIgaa"));
    console.log(mayusculas_y_minusculas("set"));
    console.log(maximo_y_minimo([3, 1, 9, 0]));
    console.log(filtrar_pares([1, 2, 3, 4, 5, 6]));
    console.log(sumar_elementos_texto(["hola", "mundo", "JS"]));
    console.log(buscar_elemento(["a", "b", "c"], "b"));
    console.log(contar_palabras("hola   mundo   desde   javascript"));
    console.log(duplicar_elementos([1, 2, 3]));
    console.log(capitalizar_palabras("hola aXi CÓMo eSTÁS"));
    console.log(mezclar_listas(["a", "b", "c"], [1, 2, 3, 4]));
    console.log(contar_frecuencia(["a", "b", "a", "c", "b", "a"]));

}