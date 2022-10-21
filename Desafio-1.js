//Desafio Clase 3 - "Clases"

//Declaración de las clases y sus metodos:
class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;     
    }

    getFullName() {
        return console.log(`Usuario Completo: ${this.apellido}, ${this.nombre}`);
    };

    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota);
        return console.log(this.mascotas);
    };

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({nombre: nombre, autor: autor});
        return console.log(this.libros);
    }

    getBookNames() {
        return console.log(this.libros.map((libro) => {return libro.nombre}));
    } 
};

let usuario1 = new Usuario (
    'Axel',
    'Balbi Bieco', 
    [{nombre: 'Harry Potter', autor: 'Autor1'}, 
    {nombre: 'La Noche', autor: 'Anonimo'}],
    ['gato', 'perro', 'iguana']
);

let usuario2 = new Usuario (
    'Ruben Dario',
    'Fernandez', 
    [{nombre: 'El senor de los anillos', autor: 'No lo conozco'}, 
    {nombre: 'Museos', autor: 'El escritor'}],
    ['Elefante', 'Camaleon', 'Leon']
);

//Comprobaciones personales.
// console.log(usuario1);
// console.log(typeof(usuario1));
// console.log(usuario1.nombre);
// console.log(typeof(usuario1.nombre));
// console.log(usuario1.apellido);
// console.log(typeof(usuario1.apellido));
// console.log(usuario1.libros);
// console.log(typeof(usuario1.libros));
// console.log(usuario1.mascotas);
// console.log(typeof(usuario1.mascotas));
// console.log(usuario1.mascotas[2]);
// console.log(typeof(usuario1.mascotas[2]));


//Comprobación del método getFullName
console.log(usuario1.getFullName());
console.log(usuario2.getFullName());

//Comprobación del método addMascota
console.log(usuario1.addMascota('Toro'));
console.log(usuario2.addMascota('Serpiente'));

//Comprobación del método countMascotas
console.log(usuario1.countMascotas());
console.log(usuario2.countMascotas());

//Comprobación del método addBook
console.log(usuario1.addBook('Fundacion','Isaac Asimov'));
console.log(usuario2.addBook('Las moscas', 'W. Golding'));

//Comprobación del método getBookNames
console.log(usuario1.getBookNames());
console.log(usuario2.getBookNames());