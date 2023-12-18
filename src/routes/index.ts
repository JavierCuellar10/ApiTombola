import  express,{ Router } from "express";
import { readdirSync } from "fs";
import path from "path";

const PATH_ROUTER = __dirname;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split('.').shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {

  const cleanName = cleanFileName(fileName);

  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
        console.log(cleanFileName(fileName));
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };