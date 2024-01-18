//Este va a ser el encargado de la logica del negocio 
//conectandose y haciendo la interferencia con la base de datos
import { Registro } from "../interfaces/registro.interface";
import RegistroModel from "../models/registro";
import ConfiguracionModel from "../models/configuracion";

//Recibimos los datos que deben cumplir con la interfaz car 
//y los insertamos en la base de datos
const insertRegistro = async (registro : Registro) =>{
  const responseInsert = await RegistroModel.create(registro)
  //la respuesta la retornamos
  return responseInsert;
};

//Función asincrona para obtener un carro por el id
const getRegistro = async(id:string) => {
    //Conectamos la constante para obtener directamente desde la bd
    //y la buscamos por su id
    const responseRegistro = await RegistroModel.findOne({_id: id});
    return responseRegistro;
}

//Función asincrona para obtener todos los items
const getRegistros = async() => {
    //Conectamos la constante para obtener directamente desde la bd
    const responseRegistro = await RegistroModel.find({});
    return responseRegistro;
}

const updateRegistro = async (id:string, data: Registro) => {
    const responseRegistro = await RegistroModel.findOneAndUpdate({_id: id}, data,{new:true},);
    return responseRegistro;

}

const deleteRegistro = async (id:string) => {
    const responseRegistro = await RegistroModel.deleteOne({_id: id});
    return responseRegistro;
    
}

const getRegistroconConfiguracion = async() => {
  const Reporte = []
  const responseRegistro = await RegistroModel.aggregate([
    {
      $lookup:{
        from: "configuracions",
        localField: "identificacion",
        foreignField: "identificacion",
        as: "tablaConfi"
      }
    }, 
    {
      $project: {
        id: '$_id',
        identificacionRegistro: '$identificacion',
        descripcion: '$descripcion',
        identificacionConfiguracion: '$tablaConfi.identificacion',
        valorConfiguracion: '$tablaConfi.valor'
      }
    }
  ])
  return responseRegistro;
  //Conectamos la constante para obtener directamente desde la bd
    //y la buscamos por su id



 
  //   const responseRegistro = await RegistroModel.aggregate([{ "$lookup": {
  //       "from": "configuracions",
  //       "localField": "identificacion",
  //       "foreignField": "identificacion",
  //       "as": "configuracions"
  //     }},
  //     {
  //       "$unwind": "$configuracions"
  //     },
  //     {
  //       "$match": {
  //         "configuracions.valor": "Pruebn"
  //       }
  //     },
  //     {
  //       "$group": {
  //         "_id": "$_id",
  //         "identificacion": {
  //           "$first": "$identificacion"
  //         },
  //         "configuracions": {
  //           "$addToSet": {
  //             "hola": "$configuracions.valor"
  //           }
  //         }
  //       }
  //     }
 
  // ])
  //   return responseRegistro;
}





export { insertRegistro, getRegistro, getRegistros, updateRegistro, deleteRegistro,getRegistroconConfiguracion };