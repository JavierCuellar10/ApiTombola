import "dotenv/config";
import { connect } from "mongoose";
//Función asincronica con promesa retornable
async function dbConnect(): Promise<void> {
    //se conecta la constante a la que esta en env
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
}
//se exporta
export default dbConnect;