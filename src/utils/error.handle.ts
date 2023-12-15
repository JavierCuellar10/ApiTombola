import { Response } from "express";

// Función para manejar errores HTTP
const handleHtttp = (res: Response, error: String, erroRaw?: any) => {
    console.log(erroRaw)
    // Establece el código de estado HTTP 500 (Internal Server Error)
    res.status(500);

    // Envía una respuesta al cliente en formato JSON con el mensaje de error proporcionado
    res.send({ error });
};

// Exporta la función handleHtttp para que pueda ser utilizada en otros archivos
export { handleHtttp };