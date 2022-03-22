"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mail_1 = require("./mail");
const direccion_1 = require("./direccion");
const telefono_1 = require("./telefono");
const persona_1 = require("./persona");
//array para guardar las personas creadas
let listaPersonas = [];
//instancia de Persona
let persona1 = new persona_1.Persona("Ricardo", "Perez Santana", 50, "54349838F", "10/08/1972", "Azul", "Masculino");
persona1.setMail(new mail_1.Mail("personal", "ricky72@gmail.com"));
persona1.setDireccion(new direccion_1.Direccion("Falua", "123", "3º", "C", "35124", "San Bartolomé de Tirajana", "Las Palmas"));
persona1.setTelefono(new telefono_1.Telefono("Casa", "928321123"));
persona1.agregarNotas("nota 1");
persona1.agregarNotas("nota 2");
let persona2 = new persona_1.Persona("Isabel", "Perez Gonzalez", 50, "54343432F", "10/08/1972", "Rojo", "Femenino");
persona2.setMail(new mail_1.Mail("personal", "isabelita@gmail.com"));
persona2.setDireccion(new direccion_1.Direccion("Doctor Alemán", "12", "2º", "B", "35110", "Vecindario", "Las Palmas"));
persona2.setTelefono(new telefono_1.Telefono("Casa", "928349823"));
persona2.agregarNotas("Me llamo Isabel");
let persona3 = new persona_1.Persona("Patricio", "Ríos Tapia", 33, "42233412H", "10/10/1989", "Verde", "Masculino");
persona3.setMail(new mail_1.Mail("ejemplo", "patricio@gmail.com"));
persona3.setDireccion(new direccion_1.Direccion("Las Bajas", "12", "2º", "B", "35200", "Arnao", "Las Palmas"));
persona3.setTelefono(new telefono_1.Telefono("Casa", "928092389"));
persona3.agregarNotas("esto es una nota");
persona3.agregarNotas("esto es otra nota");
// Para hacer las pruebas de todo lo que quiero mostrar
// console.log(persona1);
// console.log(persona1.getMail());
// console.log(persona1.getDireccion());
// console.log(persona1.getTelefono());
// console.log(persona1.getNotas());
listaPersonas = [persona1, persona2, persona3];
// Muestro el Array de personas
console.log(listaPersonas);
// Esta función busca a la persona por DNI del contacto
const actualizarPersona = (buscarDni) => {
    const mipersona = listaPersonas.find((p) => p.dni === buscarDni);
    if (!mipersona) {
        console.log("Persona no encontrada - DNI no coincide");
        return;
    }
    console.log("ENCONTRADO:");
    console.log(mipersona.toString());
    // Esto modifica la persona encontrada
    //// Nueva información ////
    mipersona.setMail(new mail_1.Mail("trabajo", "fue_modificado@gmail.com"));
    mipersona.setDireccion(new direccion_1.Direccion("probando", "11", "1º", "A", "35000", "Las Pruebas", "Las Palmas"));
    mipersona.setTelefono(new telefono_1.Telefono("Movil", "6161616161"));
    console.log("MODIFICADO:");
    console.log(mipersona.toString());
    // Es el mismo método pero con el forEach
    /*   listaPersonas.forEach((p) => {
  
      //si encuentra este dni hacemos los cambios
      if (p.dni === buscarDni) {
        console.log("ENCONTRADO:");
        console.log(p.toString());
        //// Nueva información ////
        p.setMail(new Mail("trabajo", "fue_modificado@gmail.com"));
        p.setDireccion(
          new Direccion("probando", "11", "1º", "A", "35000", "Las Pruebas", "LP")
        );
        p.setTelefono(new Telefono("Movil", "6161616161"));
        console.log("MODIFICADO:");
        console.log(p.toString());
      }
    }); */
};
// Llama a la función con el DNI que le hemos pasado
actualizarPersona("42233412H");
// actualizarContacto("54349838");
