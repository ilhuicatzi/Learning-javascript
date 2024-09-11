export const codeQuestions = [
  {
    id: 1,
    question: "¿Cuál es el resultado de este código?",
    code: "console.log(typeof null);",
    answer: "Respuesta: object",
    comment:
      "El resultado de este código es 'object'. Esto es un error en el lenguaje de programación JavaScript. El valor null es un tipo de dato primitivo, no un objeto.",
  },
  {
    id: 2,
    question: "Identifique el error de esta función asincrónica",
    code: `async function fetchData() {
      const data = await fetch("https://api.example.com/data");
      return data.json();
  }`,
    answer: "Respuesta: Falta manejar el error",
    comment:
      "El código no maneja el error en caso de que la petición falle. Se debe usar un bloque try...catch para manejar el error.",
  },
  {
    id: 3,
    question: "¿Cuál es el resultado de este código?",
    code: `const obj = { a: 1, b: 2 };
  const { a, b } = obj;
  console.log(a, b);`,
    answer: "Respuesta: 1 2",
    comment:
      "El código desestructura el objeto obj en las variables a y b, y luego imprime los valores de a y b en la consola.",
  },
  {
    id: 4,
    question: "¿Cuál es el resultado de este código?",
    code: `const arr = [1, 2, 3];
  const newArr = [...arr, 4];
  console.log(newArr);`,
    answer: "Respuesta: [1, 2, 3, 4]",
    comment:
      "El código crea un nuevo array newArr que contiene los elementos del array arr y el número 4, y luego imprime el nuevo array en la consola.",
  },
  {
    id: 5,
    question: "¿Cuál es el resultado de este código?",
    code: `const arr = [1, 2, 3];
  const [first, ...rest] = arr;
  console.log(first, rest);`,
    answer: "Respuesta: 1 [2, 3]",
    comment:
      "El código desestructura el array arr en la variable first y el resto de los elementos en la variable rest, y luego imprime el valor de first y el array rest en la consola.",
  },
  {
    id: 6,
    question: "¿Cuál es el resultado de este código?",
    code: `const arr = [1, 2, 3];
        const newArr = arr.map((num) => num * 2);
        console.log(newArr);`,
    answer: "Respuesta: [2, 4, 6]",
    comment:
      "El código utiliza el método map para crear un nuevo array newArr que contiene los elementos del array arr multiplicados por 2, y luego imprime el nuevo array en la consola.",
  },
  {
    id: 7,
    question: "¿Cuál es el resultado de este código?",
    code: `const arr = [1, 2, 3];
        const sum = arr.reduce((acc, num) => acc + num, 0);
        console.log(sum);`,
    answer: "Respuesta: 6",
    comment:
      "El código utiliza el método reduce para sumar todos los elementos del array arr, comenzando desde el valor inicial 0, y luego imprime el resultado en la consola.",
  },
  {
    id: 8,
    question: "¿Cuál es el resultado de este código?",
    code: `const arr = [1, 2, 3];
        const filteredArr = arr.filter((num) => num > 1);
        console.log(filteredArr);`,
    answer: "Respuesta: [2, 3]",
    comment:
      "El código utiliza el método filter para crear un nuevo array filteredArr que contiene los elementos del array arr que son mayores que 1, y luego imprime el nuevo array en la consola.",
  },
  {
    id: 9,
    question: "Explique el uso del operador de propagación en esta función:",
    code: `function sum(...nums) {
        return nums.reduce((acc, num) => acc + num, 0);
    }`,
    answer:
      "Respuesta: El operador de propagación permite pasar un número variable de argumentos a la función sum y los agrupa en un array llamado nums.",
    comment:
      "La función sum utiliza el operador de propagación para aceptar un número variable de argumentos y luego suma todos los números pasados como argumentos.",
  },
  {
    id: 10,
    question: "¿Cuál es el resultado de este código?",
    code: `const arr = [1, 2, 3];
        const newArr = arr.map((num) => num * 2);
        console.log(arr);`,
    answer: "Respuesta: [1, 2, 3]",
    comment:
      "El código no modifica el array original arr, solo crea un nuevo array newArr con los elementos del array arr multiplicados por 2.",
  },
  {
    id: 11,
    question: "¿Cuál es el propósito de bind en este contexto?",
    code: `this.handleClick = this.handleClick.bind(this);`,
    answer: "Respuesta: Vincular el método handleClick al contexto actual.",
    comment:
      "El propósito de vincular en este contexto es asegurarse de que el método handleClick se ejecute en el contexto correcto cuando se llame, para evitar errores de referencia a this.",
  },
  {
    id: 12,
    question: "Explique el uso de Promise.all en este código:",
    code: `const promises.all([fetch(url1), fetch(url2)]).then((res1, res2) => {
        // Procesar respuestas
    });`,
    answer:
      "Respuesta: Promise.all se utiliza para esperar a que múltiples promesas se resuelvan y luego ejecutar una función con los resultados de las promesas.",
    comment:
      "En este código, Promise.all espera a que las promesas devueltas por fetch(url1) y fetch(url2) se resuelvan, y luego ejecuta la función con los resultados de las promesas.",
  },
  {
    id: 13,
    question: "¿Qué registrará este código y por qué?",
    code: `for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 0);
    }`,
    answer: "Respuesta: 3 3 3",
    comment:
      "El código utiliza un bucle for para crear tres funciones de temporización que imprimen el valor de i después de un retraso de 0 ms. Debido a que var i es hoisted y se comparte entre las tres funciones de temporización, el valor final de i después del bucle es 3, por lo que cada función de temporización imprime 3.",
  },
  {
    id: 14,
    question: "¿Qué registrará este código y por qué?",
    code: `console.log(1);
        setTimeout(() => console.log(2), 0);
        Promise.resolve().then(() => console.log(3));
        console.log(4);`,
    answer: "Respuesta: 1 4 3 2",
    comment:
      "El código registra 1, 4, 3 y 2 en ese orden. La función de temporización se coloca en la cola de tareas, por lo que se ejecuta después de que se resuelva la promesa y se registre 3.",
  },
  {
    id: 15,
    question: "¿Cuál es el resultado de este código?",
    code: `const obj = { a: 1, b: 2 };
        const newObj = { ...obj, c: 3 };
        console.log(newObj);`,
    answer: "Respuesta: { a: 1, b: 2, c: 3 }",
    comment:
      "El código crea un nuevo objeto newObj que contiene las propiedades del objeto obj y la nueva propiedad c con el valor 3, y luego imprime el nuevo objeto en la consola.",
  },
  {
    id: 16,
    question: "¿Qué registrará este código y por qué?",
    code: `for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 0);
    }`,
    answer: "Respuesta: 0 1 2",
    comment:
      "El código utiliza un bucle for con let i para crear tres funciones de temporización que imprimen el valor de i después de un retraso de 0 ms. Debido a que let i crea un nuevo ámbito de bloque para cada iteración del bucle, cada función de temporización captura el valor de i en ese ámbito de bloque específico.",
  },
  {
    id: 17,
    question: "Identifique el problema con este bucle for...of:",
    code: `const obj = { a: 1, b: 2, c: 3 };
        for (const key of obj) {
          console.log(key);
        }`,
    answer: "Respuesta: obj no es iterable",
    comment:
      "El bucle for...of solo se puede utilizar con objetos iterables, como arrays o cadenas. El objeto obj no es iterable, por lo que el código arrojará un error.",
  },
  {
    id: 18,
    question:
      "¿Qué hace esta IIFE (expresión de función invocada inmediatamente)?",
    code: `(function() {
        var x = 10;
        console.log(x);
    })();`,
    answer:
      "Respuesta: La IIFE declara una variable x con el valor 10 y luego imprime x en la consola.",
    comment:
      "La IIFE se ejecuta inmediatamente después de ser declarada y se utiliza para encapsular variables y funciones en un ámbito local para evitar conflictos con el ámbito global.",
  },
  {
    id: 19,
    question: "¿Cuál es el resultado de este código?",
    code: `const arr = [1, 2, 3];
        const sum = arr.reduce((acc, num) => acc + num);
        console.log(sum);`,
    answer: "Respuesta: 6",
    comment:
      "El código utiliza el método reduce para sumar todos los elementos del array arr sin un valor inicial, por lo que comienza desde el primer elemento del array y luego imprime el resultado en la consola.",
  },
  {
    id: 20,
    question: "¿Cuál es el resultado de este código?",
    code: `const arr = [1, 2, 3];
        const [first] = arr;
        console.log(first);`,
    answer: "Respuesta: 1",
    comment:
      "El código desestructura el array arr en la variable first, que captura el primer elemento del array, y luego imprime el valor de first en la consola.",
  },
  {
    id: 21,
    question: "Explique este uso de la tarea de desestructuración:",
    code: `const [a, , b] = [1, 2, 3];
        console.log(a, b);`,
    answer:
      "Respuesta: a captura el primer elemento del array y b captura el tercer elemento del array.",
    comment:
      "La tarea de desestructuración omite el segundo elemento del array y asigna el primer elemento a la variable a y el tercer elemento a la variable b.",
  },
  {
    id: 22,
    question: "¿Cuál es el resultado de esta comparación estricta?",
    code: `console.log(0 == '0');
        console.log(0 === '0');`,
    answer: "Respuesta: true false",
    comment:
      "La comparación == convierte los operandos al mismo tipo antes de compararlos, por lo que 0 y '0' son iguales. La comparación === no convierte los operandos, por lo que 0 y '0' no son iguales.",
  },
  {
    id: 23,
    question: "Identifique el propósito de Object.freeze en este contexto:",
    code: `const obj = { a: 1 };
        Object.freeze(obj);
        obj.a = 2;
        console.log(obj.a);`,
    answer: "Respuesta: Evitar que se modifique el objeto obj",
    comment:
      "El propósito de Object.freeze en este contexto es evitar que se modifique el objeto obj después de congelarlo. Cualquier intento de modificar el objeto congelado resultará en un error en modo estricto.",
  },
  {
    id: 24,
    question: "Explique el comportamiento de this en la función flecha:",
    code: `const obj = {
        value: 'Hello',
        createFunc: function() {
            return () => console.log(this.value);
            },
        };
        const func = obj.createFunc();
        func();`,
    answer:
      "Respuesta: this en la función flecha se refiere al contexto léxico en el que se definió, en este caso, el objeto obj.",
    comment:
      "En una función flecha, this se refiere al contexto léxico en el que se definió la función, en lugar de al objeto que llama a la función. En este caso, this en la función flecha se refiere al objeto obj.",
  },
  {
    id: 25,
    question: "¿Cuál es el problema con esta herencia de clases?",
    code: `
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        constructor(name, breed) {
            super(name);
            this.breed = breed;
        }
    }`,
    answer:
      "Respuesta: Falta llamar a super() en el constructor de la clase hija Dog.",
    comment:
      "En la herencia de clases en JavaScript, el constructor de la clase hija debe llamar a super() para inicializar las propiedades heredadas de la clase padre. En este caso, el constructor de la clase Dog debe llamar a super(name) para inicializar la propiedad name heredada de la clase Animal.",
  },
  {
    id: 26,
    question: "Analice el uso del operador rest en esta desestructuración de objetos:",
    code: `const { a, ...rest } = { a: 1, b: 2, c: 3 };
        console.log(a, rest);`,
    answer: "Respuesta: 1 { b: 2, c: 3 }",
    comment:
      "El operador rest en la desestructuración de objetos captura el valor de la propiedad a en la variable a y el resto de las propiedades en un nuevo objeto rest.",
  },
  {
    id: 27,
    question: "¿Cuál es el resultado de este código y por qué?",
    code: ` const first = () => console.log('First');
        const second = () => console.log('Second');
        const third = () => console.log('Third');
        
        first();
        setTimeout(second, 0);
        third();`,
    answer: "Respuesta: First Third Second",
    comment:
      "El código registra 'First', 'Third' y 'Second' en ese orden. La función de temporización se coloca en la cola de tareas, por lo que se ejecuta después de que se registre 'Third'.",
  },
  {
    id: 28,
    question: " Identifique el problema con la exportación/importación de este módulo:",
    code: `
    // moduleA.js
    export const name = 'JavaScript';
        
    // moduleB.js
    import { name } from './moduleA';
    console.log(name);`,
    answer: "Respuesta: Falta la extensión del archivo en la importación.",
    comment:
      "En la importación de módulos en JavaScript, se debe incluir la extensión del archivo en la ruta del módulo si el archivo no tiene una extensión predeterminada, como .js. En este caso, la importación debería ser import { name } from './moduleA.js';",
  },
  {
    id: 29,
    question: "¿Qué hace este código con el objeto Map?",
    code: `
    const map = new Map();
      map.set('key1', 'value1');
      map.set('key2', 'value2');

    for (const [key, value] of map) {
      console.log(\`\${key}: \${value}\`);
    }`,
    answer: "Respuesta: Itera sobre las entradas clave-valor del objeto Map.",
    comment:
      "El código utiliza un bucle for...of para iterar sobre las entradas clave-valor del objeto Map y luego imprime cada par clave-valor en la consola.",
  },
  {
    id: 30,
    question: "Explique la salida de este código async/await",
    code: ` 
    async function asyncFunc() {
      console.log(2);
      await null;
      console.log(3);
    }

    console.log(1);
    asyncFunc();
    console.log(4);`,
    answer: "Respuesta: 1 2 4 3",
    comment:
      "El código registra 1, 2, 4 y 3 en ese orden. La función asyncFunc se ejecuta de forma asíncrona, por lo que el código continúa ejecutándose después de llamar a la función asyncFunc.",
  },
  {
    id: 31,
    question: "Explique el patrón utilizado en este código:",
    code: `
    function Person(name) {
      this.name = name;
    }

    Person.prototype.getName = function() {
      return this.name;
    };

    const person = new Person('Alice');
    console.log(person.getName());`,
    answer:
      "Respuesta: Constructor de función y prototipo para crear objetos con métodos compartidos.",
    comment: "El código utiliza un constructor de función y el prototipo para crear objetos con propiedades y métodos compartidos. Esto permite que los objetos creados a partir del constructor compartan los mismos métodos a través del prototipo.",
  }
];
