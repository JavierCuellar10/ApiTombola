import {Schema, Types, Model, model} from "mongoose";
import { Registro } from "../interfaces/registro.interface";
import { text } from "express";
//Es un esquema(representacion de propiedades que se guardan en db) 
//y hacemos implementación de la interface de car
const ItemSchema = new Schema<Registro>(
    //Se crean dos objetos
    {
        //datos importados de Car
        identificacion: {
            type: String,
            //validación
            required: true,
            maxlength: 1000,
        },
        descripcion: {
            
            type: String,
            //validación
            maxlength: 1000,
        },
        opcional1: {
            type: String,
        },
        opcional2:{
            type: String,
        },

    },
    {
        //fecha de creación y actualización
        timestamps: true,
        //Guarda datos por la versión
        versionKey: false,
    }
);

//vamos a implementar ItemSchema en itemModel 
//model recibe string osea el nombre y el esquema
const RegistroModel = model('registros', ItemSchema);
export default RegistroModel;