"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
// Creamos la clase Persona
class Persona {
    //Dar el estado inicial de la clase
    constructor(_nombre, _apellidos, _edad, _dni, _cumpleaños, _colorFavorito, _sexo, _notas = []) {
        this.nombre = _nombre;
        this.apellidos = _apellidos;
        this.edad = _edad;
        this.dni = _dni;
        this.cumpleaños = _cumpleaños;
        this.colorFavorito = _colorFavorito;
        this.sexo = _sexo;
        this.notas = _notas;
    }
    //Getters y Setters
    //Muestra la información de la persona de forma ordenada
    toString() {
        const direccion = this.getDireccion()
            ? `Dirección: ${this.getDireccion().calle} Nº ${this.getDireccion().numero},piso ${this.getDireccion().piso} ${this.getDireccion().letra}. CP:${this.getDireccion().codigoPostal} ${this.getDireccion().poblacion}, ${this.getDireccion().provincia}`
            : `Dirección: ---`;
        const mail = this.getMail()
            ? `Mail ${this.getMail().tipo}: ${this.getMail().direccion}`
            : `Mail: ---`;
        const telefono = this.getTelefono()
            ? `Teléfono ${this.getTelefono().tipo}:  ${this.getTelefono().numero}`
            : `Teléfono: ---`;
        return `
      Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, Dni: ${this.dni} \n
      Edad: ${this.edad}, Cumpleaños: ${this.cumpleaños} \n      
      Color Favorito: ${this.colorFavorito}, Sexo: ${this.sexo} \n
      ${mail}\n   
      ${direccion}\n   
      ${telefono}\n
      ${this.getNotas()}\n
      `;
    }
    //Asigna un valor a mail
    setMail(nuevoMail) {
        this.mail = nuevoMail;
    }
    //Obtiene el valor de mail
    getMail() {
        return this.mail;
    }
    //Asigna un valor a dirección
    setDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
    }
    //Obtiene el valor de dirección
    getDireccion() {
        return this.direccion;
    }
    //Asigna un valor a teléfono
    setTelefono(nuevoTelefono) {
        this.telefono = nuevoTelefono;
    }
    //Obtiene el valor de teléfono
    getTelefono() {
        return this.telefono;
    }
    //Añade una nueva nota al array
    agregarNotas(nuevoNotas) {
        this.notas.push(nuevoNotas);
    }
    //Obtiene todas las nota del array
    getNotas() {
        return this.notas;
    }
}
exports.Persona = Persona;
