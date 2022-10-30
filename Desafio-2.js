//Desafio Clase 4: Manejo de Archivos en JS

const fs = require('fs');

class Contenedor {
    constructor (fileName) {
        this.fileName = fileName
    };

    async save(obj) {   
        try {
            let data = await readFile('productos.txt')
            data.push(obj)
            let strData = JSON.stringify(data, null, 2)
            await fs.promises.writeFile(this.fileName, strData)
            return console.log(obj.id)
        }
        catch (err) {
            console.log (`Hubo el siguiente error al agregar el objeto: ${err}`)
        }
    };

    async getById(num) {   
        try {  
            const filtrado = await readFile(this.fileName).filter( x => {return x.id === num});
            console.log(filtrado)
        }
        catch (err) {
            console.log (`El ID buscado no existe. \nDetalle del ${err}`)
        }
    };

    async getAll() {   
        try {  
            let reading = await readFile(this.fileName);
            console.log(reading);
        }
        catch (err) {
            console.log (`Hubo un error al intentar obtener todos los objetos: ${err}`)
        }
    };

    async deleteById(num) {   
        try {
            const data = await readFile(this.fileName).filter( x => {return x.id !== num});
            let stringData = JSON.stringify(data, null, 2)
            await fs.promises.writeFile(this.fileName, stringData);
        }
        catch (err) {
            console.log (`Se presenta el siguiente ${err}`)
        }
    };

    async deleteAll() {   
        try {  
            await fs.promises.writeFile(this.fileName, '');
        }
        catch (err) {
            console.log (`Se presenta el siguiente ${err}`)
        }
    };
};



//Creo una funcion para leer y parsear el documento. 
function readFile(fileName) {
    let fileRead = JSON.parse(fs.readFileSync(fileName, 'utf-8'))
    return fileRead;
}


//Creo una clase para crear productos.
class Productos {
    constructor (title, price, thumbnail) {
        this.title = title,
        this.price = price,
        this.thumbnail = thumbnail,
        this.id = (Math.max(...JSON.parse(fs.readFileSync('productos.txt', 'utf-8')).map((x) => {return x.id})) + 1)
    }
};


//Ejecución del programa

let productos = new Contenedor('productos.txt');

// // Creo un producto para guardarlo en el contenedor
//let triangulo = new Productos ("Triangulo", 800, "thumbnail a eleccion");
//productos.save(triangulo);
//productos.getById(1);
//productos.getAll();
//productos.deleteById(3);
//productos.deleteAll();

