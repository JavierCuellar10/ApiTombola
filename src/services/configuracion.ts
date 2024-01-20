//Este va a ser el encargado de la logica respecto a configuracion
//conectandose y haciendo la interferencia con la base de datos
import { Configuracion } from "../interfaces/configuracion.interfase";
import ConfiguracionModel from "../models/configuracion";


//Recibimos los datos que deben cumplir con la interfaz Configuracion 
//y los insertamos en la base de datos
const insertConfiguracion = async (configuracion : Configuracion) =>{
    const responseInsert = await ConfiguracionModel.create(configuracion)
    //la respuesta la retornamos
    return responseInsert;
};

//Función asincrona para obtener la configuracion por el id
const getConfiguracion = async(id:string) => {
    console.log(`Buscando configuración con identificación: ${id}`);
    
    //Conectamos la constante para obtener directamente desde la bd
    //y la buscamos por su id
    const responseConfiguracion = await ConfiguracionModel.findOne({_id: id});
    return responseConfiguracion;
}

//Función asincrona para obtener la configuracion por el identificacion
const getConfiguracionId = async(identificacion:string) => {
    //Conectamos la constante para obtener directamente desde la bd
    //y la buscamos por su identificacion
    const responseConfiguracion = await ConfiguracionModel.findOne({identificacion: identificacion});
    return responseConfiguracion;
}

//Función asincrona para obtener todos los items
const getConfiguraciones = async() => {
    //Conectamos la constante para obtener directamente desde la bd
    const responseConfiguracion = await ConfiguracionModel.find({});
    return responseConfiguracion;
}

const updateConfiguracion = async (id:string, data: Configuracion) => {
    const responseConfiguracion = await ConfiguracionModel.findOneAndUpdate({_id: id}, data,{new:true},);
    return responseConfiguracion;

}

const deleteConfiguracion = async (id:string) => {
    const responseConfiguracion = await ConfiguracionModel.deleteOne({_id: id});
    return responseConfiguracion;
    
}

const FindConfiguracionId = async() => {

    const responseRegistro = await ConfiguracionModel.aggregate([
      { $match:{
          identificacion: { $in: ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26"]}
      },},
      { $project:{
        _id: 0,
        repeatDatos: { $cond: [{ $eq: ["$identificacion", "17"] }, "$valor",null] },
        camposMostrar: { $cond: [{ $eq: ["$identificacion", "18"] }, "$valor",null] },
        OpcionIdentificacion:{ $cond: [{ $eq: ["$identificacion", "19"] }, "$valor",null] },
        OpcionDescripcion:{ $cond: [{ $eq: ["$identificacion", "20"] }, "$valor",null] },
        OpcionOpcional1:{ $cond: [{ $eq: ["$identificacion", "21"] }, "$valor",null] },
        OpcionOpcional2:{ $cond: [{ $eq: ["$identificacion", "22"] }, "$valor",null] },
        ValorIdentificacion:{ $cond: [{ $eq: ["$identificacion", "23"] }, "$valor",null] },
        ValorDescripcion:{ $cond: [{ $eq: ["$identificacion", "24"] }, "$valor",null] },
        ValorOpcional1:{ $cond: [{ $eq: ["$identificacion", "25"] }, "$valor",null] },
        ValorOpcional2:{ $cond: [{ $eq: ["$identificacion", "26"] }, "$valor",null] },
      },}
      
  ])
      
      
      const consulta = {
        repeatDatos: responseRegistro[0].repeatDatos,
        camposMostrar:responseRegistro[1].camposMostrar ,
        OpcionIdentificacion:responseRegistro[2].OpcionIdentificacion,
        OpcionDescripcion:responseRegistro[3].OpcionDescripcion,
        OpcionOpcional1:responseRegistro[4].OpcionOpcional1,
        OpcionOpcional2:responseRegistro[5].OpcionOpcional2,
        ValorIdentificacion:responseRegistro[6].ValorIdentificacion,
        ValorDescripcion:responseRegistro[7].ValorDescripcion,
        ValorOpcional1:responseRegistro[8].ValorOpcional1,
        ValorOpcional2:responseRegistro[9].ValorOpcional2,
      }
  
      return consulta
  
  
  }

export { insertConfiguracion, getConfiguracion, getConfiguraciones, updateConfiguracion, deleteConfiguracion, FindConfiguracionId,
getConfiguracionId};