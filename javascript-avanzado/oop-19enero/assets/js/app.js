/* Clases, molde que nos permite crear objetos */

class Animal{
    /* nombre;
    especie; */
    //constructor es una función
    constructor(nombre,especie){
        /* console.log('Este es un constructor'); */

        //this hace referencia al contexto en que se está utilizando
        this.nombre=nombre;
        this.especie=especie;
    }

    //getters y setters
    //solo tienen este propósito leer o modificar el atributo
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre=nombre;
    }

    get getEspecie(){
        return this.especie;
    }

    set setEspecie(especie){
        this.especie=especie;
    }

    //métodos == función
    presentarse(){
        document.write(`Hola soy ${this.especie} y me llamo ${this.nombre}<br>`)
    }
    cambiarNombre(nuevoNombre){
        this.nombre=nuevoNombre;
        let mensaje=`Mi nuevo nombre es ${this.nombre} y soy un ${this.especie}`;
        return document.write(mensaje);
    }

    //Métodos estáticos
    //Pertenece sólo a la clase y no se hereda a los objetos
    static saludar(){

        return console.log('Hola, soy un método estático');
    }
}
Animal.saludar();
//Animal.presentarse();
//console.log(Animal.getNombre);

//Heredan los atributos y los métodos de la clase que están utilizando
const Animal1=new Animal("sbooby","perro");
//creamos un objeto
//instanciar = hacer una copia, crear un objeto
console.log(Animal1);
const animal2=new Animal('pecas','gato');
console.log(animal2);

const Animal3=new Animal();
console.log(Animal3);

Animal1.presentarse();
animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre='Scraapy';
console.log(Animal1.nombre);


document.write(Animal1.cambiarNombre('Shaggy'));

//Getters y setters
// get= obtener el valor de un Atributo
//set= fijar o cambiar el valor de un Atributo
// SE UTILIZA como si fueran ATRIBUTOS

console.log(Animal1.getNombre);
Animal1.setNombre= "MANCHAS3000";
console.log(Animal1.getNombre);
console.log(Animal1);