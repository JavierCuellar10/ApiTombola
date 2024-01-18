import {Schema, Types, Model, model} from "mongoose";
import { Configuracion } from "../interfaces/configuracion.interfase";
import { text } from "express";
//Es un esquema(representacion de propiedades que se guardan en db) 
//y hacemos implementación de la interface de car
const ItemSchema = new Schema<Configuracion>(
    //Se crean dos objetos
    {
        //datos importados de Car
        identificacion: {
            type: String,
            //validación
            required: true,
            index: true,
            maxlength: 1000,
        },
        valor: {
            
            type: String,
            //validación
            required:true,
            maxlength: 1000,
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
const ConfiguracionModel = model('configuracion', ItemSchema);
export default ConfiguracionModel;