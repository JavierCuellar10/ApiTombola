import { Router } from "express";
import { Request, Response} from 'express';
import path from "path";
import { deleteItem, getItem, getItems, postItem, updateItem, getItemconConf,postItems  } from "../controlles/registro";

//La constante Router es el manejador de rutas de express
//con las funciones basicas de api rest(post,get,update,delete)
const router = Router()

//getItems para optener los items dah
router.get("/ObtenerTodos", getItems);
//Aqui para obtener item registro con configuracion
router.get("/ObtenerRegistroConf", getItemconConf);
//Aqui para obtener un item
router.get("/Obtener/:id", getItem);
router.post("/CrearTodos", postItems);
//Para postear un item osea post
router.post("/Crear", postItem);
//actualizar un item o cambiarle algo
router.put("/Actualizar/:id", updateItem);
//Para borrar un item :)
router.delete("/Eliminar/:id", deleteItem);



//Cada vez que se crea una constante router debemos exportarla 
export{router};