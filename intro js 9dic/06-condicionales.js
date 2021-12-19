/* 
Condicionales se utilizan para tomar decisiones dentro de nuestro programa
*/

/* if(condición)
{
código
código
} */

let edad;
edad= parseInt(prompt("DAME TU EDAD"));

if(edad>=18 && edad<=29)
{
    document.write("ERES UN ADULTO JOVEN");
}
else if(edad>=30 && edad<60)
{
    document.write("ERES UN ADULTO ");
}
else if(edad>=60)
{
    document.write("ERES UN ADULTO MAYOR ");
}

else
{
    document.write("NIÑO");
}