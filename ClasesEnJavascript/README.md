# Clases en Javascript
Escrito por Giusstation3

## ¿Qué son las clases? 
Las clases en Javascript son plantillas estructuradas introducidas en ES6 para la creación sencilla de objetos que tienen propiedades y métodos compartidos con sintaxis similares a los de Programación Orientada Objetos tradicional.

Están construidas sobre "Prototipos" de objetos ya que realidad en Javascript no existen las clases de manera predeterminada como las conocemos en lenguajes de programación orientados a objetos como Java, sino que más bien son sintáxis especiales que imitan la funcionalidad de clases mediante objetos. 

## ¿Cómo se usan? 
La razón principal por la que se desaría usar una clase es poder manipular estructuras repetidas y con métodos y propiedades especiales sin tener que repetir el mismo código. Sirve además para mantener una estructura y jerarquía sobre los objetos que creamos. 

Para utilizar una clase primero debemos de declarla de la siguiente forma, dentro de constructor añadimos propiedades de la clase y añadiendo los métodos que queremos para esa clase.

```javascript
class Player {
    constructor(name,rank,favoriteGame) {
        this.name = name;
        this.rank = rank;
        this.favoriteGame = favoriteGame;
    }
}
```
## ¿Cómo se crean instancias? 
Para crear instancias de objetos, es decir instanciar objetos. Tenemos que hacerlo de la siguiente manera, en una const y además agregando los parámetros que van dentro del constructor.

```javascript
const player1 = new Player("Giusstation3",32,"Rainbow Six Siege");
```

## ¿Cómo se hacen métodos y funciones? 
Para definir un método simplemente lo declaramos dentro de la clase sin necesidad de escribir la palabra function. 
Se hace de la siguiente manera:

```javascript
class Player {
    constructor(name,rank,favoriteGame) {
        this.name = name;
        this.rank = rank;
        this.favoriteGame = favoriteGame;
    }
    decirFrase()    {
        return "Hagamos esto señores...";
    }
}
```

## Componentes

Algunos de los componentes que puede contener una clase son:

* Un constructor que es como el “inicio” de la clase. Se ejecuta automáticamente cuando creamos un nuevo objeto y sirve para definir sus propiedades iniciales.
* Métodos que son funciones que escribimos dentro de la clase para darle comportamientos específicos a los objetos que creemos.
* Propiedades que son los datos que guardan los objetos. Pueden definirse dentro del constructor o directamente en la clase.
* Métodos estáticos que pertenecen directamente a la clase y no a las instancias. Se usan para tareas generales que no dependen de un objeto en particular.
* Campos privados o públicos que sirven para controlar qué partes de la clase se pueden usar desde fuera y cuáles quedan “escondidas” dentro.

## Fuentes
[How to Use Classes in JavaScript – A Handbook for Beginners](https://www.freecodecamp.org/news/how-to-use-classes-in-javascript-handbook#heading-wait-what-javascript-has-no-real-classes)

[JavaScript Classes - W3Schools](https://www.w3schools.com/Js/js_classes.asp)

[Clases en Javascript - Manz.dev](https://lenguajejs.com/javascript/oop/clases/)
