import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes";
import db from "./config/mongo"
import { eliminarRegistro, modificarRegistro , crearRegistro} from "./services/Funciones"

//const puerto por el cual va a funcionar la aplicacion (el de el archivo env) 
//En el caso de que no funcione por ese puerto el 3001
const PORT = process.env.PORT || 3001;
//creamos el app por express
const app = express();
//Aquí le decimos a la aplicacion que haga uso de los cors
//estos cors es para evitar el problema del origen cruzado de recursos
//osea dejar que un dominio use tu API
app.use(cors());
//La app hace uso del json en express
app.use(express.json());

app.use(router);
db().then(() => console.log("Conexion Ready"));
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`) );



  