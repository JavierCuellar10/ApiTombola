import { Router } from "express";
import {readdirSync} from "fs";

//dirname es una constate de note que nos va a devolver la ruta del
//directorio actual (osea src y routes)
const PATH_ROUTER =`${__dirname}`;
//constante para las rutas
const router = Router();

/**
 * 
 * quitador de .ts en los archivos con el split
 * quita luego del . lo que haya
 * @param fileName
 * @returns 
 */
const cleanFileName = (fileName:String) => {
    const file = fileName.split('.').shift();
    return file;
};

/**
 * Creador de rutas dinamico
 */
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    //Se salta el index
    if(cleanName !== "index" ){
        //importacion dinamica
        import(`./${cleanName}`).then((moduleRouter) => {
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    } 
});


export { router };