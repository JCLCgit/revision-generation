class Pokemon{
    constructor(nombre='no elegido',tipo='no encontrado'){
        this.nombre=nombre;
        this.tipo=tipo;
    }

    //métodos
    atacar(){
        return console.log(`${this.nombre} está atacando `);
    }


}

class Pikachu extends Pokemon{
    constructor(nombre,tipo, edad){
        super(nombre,tipo);
        this.edad=edad;
    }

    //métodos
    evolucionar(){
        return console.log(`${this.nombre} está evolucionando`);
    }
}

class Electrico extends Pikachu{
    constructor(nombre, tipo, edad, color){
        super(nombre, tipo, edad);
        this.color=color;
    }

}

const Electrico1=new Electrico("Pancho","Eléctrico",4, "GRIS");
console.log(Electrico1);

const Pikachu1= new Pikachu("Juan","eléctrico",3);//pertenece a la clase Pikachu
console.log(Pikachu1);
Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1=new Pokemon("Charmander","fuego"); //pertenece a la clase pokemon
Pokemon1.atacar();