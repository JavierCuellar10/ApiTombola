import { Router } from "express";
import { Request, Response} from 'express';
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controlles/registro";

//La constante Router es el manejador de rutas de express
//con las funciones basicas de api rest(post,get,update,delete)
const router = Router()

//getItems para optener los items dah
router.get("/", getItems);
//Aqui para obtener un item
router.get("/:id", getItem);
//Para postear un item osea post
router.post("/", postItem);
//actualizar un item o cambiarle algo
router.put("/:id", updateItem);
//Para borrar un item :)
router.delete("/:id", deleteItem);

//Cada vez que se crea una constante router debemos exportarla 
export{router};