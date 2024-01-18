import { Router } from 'express';
import { Request, Response } from 'express';
import path from 'path';
import { uploadImage } from '../services/imagen';  // Ruta donde se encuentra la función

const router = Router();

router.post('/upload', (req: Request, res: Response) => {
  uploadImage(req, res);
});

export { router };