//Este va a ser el encargado de la logica del negocio 
//conectandose y haciendo la interferencia con la base de datos
import { Registro } from "../interfaces/registro.interface";
import RegistroModel from "../models/registro";


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

export { insertRegistro, getRegistro, getRegistros, updateRegistro, deleteRegistro};