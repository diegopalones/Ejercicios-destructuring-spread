// const personas = ['Juan', 'Laura', 'Patricia', 'María', 'Paula']

// console.log(personas[2])
// console.log(personas[4])

// // 1.  Ejercicios destructuring

// // Dado el siguiente objeto:

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];

// //   Extrae la empleada Ana con todos sus datos personales:


const [ , empleado2] = empleados;
console.log(empleado2);

// Extrae el email del empleado Luis 


const [{ email: emailLuis }] = empleados;
console.log(emailLuis);

// Dado el siguiente objeto:


const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

// Cambia el nombre de la propiedad “name” por “nombre“

const {name : nombre} = pokemon

// Extrae el nombre del Pokemon

console.log(nombre)

// Extrae el tipo de Pokemon que es

const { type } = pokemon;

console.log(type);

// Extrae el movimiento “Tackle”

const {moves} = pokemon;

const [ , pok] = moves;

console.log(pok);



// 2. Ejercicios spread/rest
// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const mergeAllPokemon = { pikachu,pokemon };
console.log(mergeAllPokemon);


// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

// sumEveryOther(6, 8, 2, 3, 1); //20 (pista Sofía (for))
// sumEveryOther(11, 3, 12); //26 

const sumEveryOther = (...numeros) => {
    let sumar = 0;
    for (let i = 0; i < numeros.length; i++) {
      sumar += numeros[i];
    }
    return sumar;
  };
  console.log(sumEveryOther(6, 8, 2, 3, 1));
  console.log(sumEveryOther(11,3,12));

//   Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

// addOnlyNums(1, 'perro', 2, 4); //7

addOnlyNums = (...allIn) => {
    numeros = allIn.filter(num => typeof num === 'number')
    allIn = numeros.reduce((a,b)=> a+b)
    return allIn
 };
 
 console.log(addOnlyNums(1, "perro", 2, 4))

  //Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
//countTheArgs('gato', 'perro'); //2
//countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

const countTheArgs = (...args) => {
    console.log(args.length);
  };
  countTheArgs("gato", "perro");
  countTheArgs("gato", "perro", "pollo", "oso");
  
  //Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
  
  array1 = ['azul','blanco','rojo','amarillo'];
  array2 = [ 2, 12, 22, 44, 66]
  
  
  combinalos =(a1,a2) => {
      mezclaArray = [...a1, ...a2];
      return mezclaArray;
  
  }
  
  console.log(combinalos(array1,array2));





























