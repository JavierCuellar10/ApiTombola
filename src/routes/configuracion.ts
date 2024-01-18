import { Router } from "express";
import { Request, Response} from 'express';
import path from "path";
import { deleteItem, getItem, getItems, postItem, updateItem, findconfigid,getItemId } from "../controlles/configuracion";

//La constante Router es el manejador de rutas de express
//con las funciones basicas de api rest(post,get,update,delete)
const router = Router()

//getItems para optener los items dah
router.get("/ObtenerTodos", getItems);
//Aqui para obtener item registro con configuracion
router.get("/ObtenerConfigs", findconfigid);
//Aqui para obtener la configuracion por identificacion
router.get("/ObtenerId/:identificacion", getItemId);
//Aqui para obtener un item
router.get("/Obtener:id", getItem);

//Para postear un item osea post
router.post("/Crear", postItem);
//actualizar un item o cambiarle algo
router.put("/Actualizar:id", updateItem);
//Para borrar un item :)
router.delete("/Eliminar:id", deleteItem);

//Cada vez que se crea una constante router debemos exportarla 
export{router};