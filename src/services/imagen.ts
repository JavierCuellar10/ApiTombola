// Importa los módulos necesarios
import { Request, Response } from 'express';
import multer from 'multer';
import carpetaguardado from '../config-variable/variablesprincipales';

// Configuración de Multer para el manejo de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = carpetaguardado; // variable donde esta la ruta
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear().toString().substr(-2);
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');

    const fileName = `${day}-${month}-${year}_${hours}-${minutes}-${seconds}_${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

// Función para subir una imagen
const uploadImage = (req: Request, res: Response) => {
  upload.single('imagen')(req, res, async (err) => {
    try {
      if (err instanceof multer.MulterError) {
        // Error de Multer
        res.status(400).json({ success: false, message: 'Error al subir la imagen' });
        return;
      } else if (err) {
        // Otro tipo de error
        res.status(500).json({ success: false, message: 'Error interno del servidor' });
        return;
      }

      // Aquí puedes acceder a la información del archivo a través de req.file
      const { body, file } = req;
      const imagePath = file ? file.path : null;

      // Puedes manejar la lógica de la base de datos aquí utilizando tu servicio correspondiente

      res.json({ success: true, message: 'Imagen subida exitosamente', imagePath });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error al subir la imagen' });
    }
  });
};

export { uploadImage };
