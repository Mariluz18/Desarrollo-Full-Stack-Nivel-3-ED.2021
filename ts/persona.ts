// Importamos las otras clases para poder usarlo en esta clase
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

// Creamos la clase Persona
export class Persona {
  //Atributos
  private nombre: string;
  private apellidos: string;
  private edad: number;
  private dni: string;
  private cumpleaños: string;
  private colorFavorito: string;
  private sexo: string;
  private direccion: Direccion | undefined;
  private mail: Mail | undefined;
  private telefono: Telefono | undefined;
  private notas: string[];


  //Dar el estado inicial de la clase
  constructor(
    _nombre: string,
    _apellidos: string,
    _edad: number,
    _dni: string,
    _cumpleaños: string,
    _colorFavorito: string,
    _sexo: string,
    _notas: string[] = []
  ) {
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
  public toString(): string {
    const direccion: string = this.getDireccion()
      ? `Dirección: ${this.getDireccion().calle} Nº ${
          this.getDireccion().numero
        },piso ${this.getDireccion().piso} ${this.getDireccion().letra}. CP:${
          this.getDireccion().codigoPostal
        } ${this.getDireccion().poblacion}, ${this.getDireccion().provincia}`
      : `Dirección: ---`;

    const mail: string = this.getMail()
      ? `Mail ${this.getMail().tipo}: ${this.getMail().direccion}`
      : `Mail: ---`;

    const telefono: string = this.getTelefono()
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
  public setMail(nuevoMail: Mail): void {
    this.mail = nuevoMail;
  }
  //Obtiene el valor de mail
  public getMail(): any {
    return this.mail;
  }

   //Asigna un valor a dirección
  public setDireccion(nuevaDireccion: Direccion): void {
    this.direccion = nuevaDireccion;
  }
   //Obtiene el valor de dirección
  public getDireccion(): any {
    return this.direccion;
  }

  //Asigna un valor a teléfono
  public setTelefono(nuevoTelefono: Telefono): void {
    this.telefono = nuevoTelefono;
  }
  //Obtiene el valor de teléfono
  public getTelefono(): any {
    return this.telefono;
  }

  //Añade una nueva nota al array
  public agregarNotas(nuevoNotas: string): void {
    this.notas.push(nuevoNotas);
  }
  //Obtiene todas las nota del array
  public getNotas(): any {
    return this.notas;
  }
}
