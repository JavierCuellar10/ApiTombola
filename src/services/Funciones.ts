import { Registro } from "../interfaces/registro.interface";
import { getRegistros, getRegistro, updateRegistro, deleteRegistro,insertRegistro } from "./registro";

const imprimirRegistros = async () => {
    try {
        const cars = await getRegistros();
        console.log('Lista de Registros:', cars);
    } catch (error) {
        console.error('Error al obtener la lista de Registros:', error);
    }
};

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const eliminarRegistro = async () => {
    readline.question('Ingrese el id a eliminar: ', async (id:string) => {
        try {
            await deleteRegistro(id);
            console.log(`Registro con ID ${id} eliminado exitosamente.`);
        } catch (error) {
            console.error(`Error al eliminar el registro con ID ${id}:`, error);
        } finally {
            readline.close();
        }
    });
};

const modificarRegistro = async () => {
    readline.question('Ingrese el id del registro a modificar: ', async (id: string) => {
        try {
            const registro = await getRegistro(id);
            if (!registro) {
                console.log(`No se encontró un registro con ID ${id}.`);
                readline.close();
                return;
            }

            console.log('Registro encontrado:', registro);

            console.log('Seleccione el campo a modificar:');
            console.log('1. Identificación');
            console.log('2. Descripción');
            console.log('3. Opcional1');
            console.log('4. Opcional2');

            readline.question('Ingrese el número de la opción: ', async (opcion: string) => {
                try {
                    switch (opcion) {
                        case '1':
                            registro.identificacion = await preguntaAsync('Ingrese la nueva identificación: ');
                            break;
                        case '2':
                            registro.descripcion = await preguntaAsync('Ingrese la nueva descripción: ');
                            break;
                        case '3':
                            registro.opcional1 = await preguntaAsync('Ingrese el nuevo valor para opcional1: ');
                            break;
                        case '4':
                            registro.opcional2 = await preguntaAsync('Ingrese el nuevo valor para opcional2: ');
                            break;
                        default:
                            console.log('Opción no válida.');
                            break;
                    }

                    // Luego, actualiza el registro
                    const responseRegistro = await updateRegistro(id, registro);

                    console.log(`Registro con ID ${id} modificado exitosamente:`, responseRegistro);
                } catch (error) {
                    console.error(`Error al modificar el registro con ID ${id}:`, error);
                } finally {
                    readline.close();
                }
            });
        } catch (error) {
            console.error(`Error al obtener el registro con ID ${id}:`, error);
            readline.close();
        }
    });
};

// Función auxiliar para convertir pregunta en una promesa
const preguntaAsync = (mensaje: string) => new Promise<string>(resolve => readline.question(mensaje, resolve));

const obtenerRegistro = async () => {
    readline.question('Ingrese el id del registro a obtener: ', async (id:string) => {
        try {
            const registro = await getRegistro(id);
            if (!registro) {
                console.log(`No se encontró un registro con ID ${id}.`);
            } else {
                console.log('Registro encontrado:', registro);
            }
        } catch (error) {
            console.error(`Error al obtener el registro con ID ${id}:`, error);
        } finally {
            readline.close();
        }
    });
};
const crearRegistro = async () => {
    try {
        readline.question('Ingrese la identificación: ', (identificacion: string) => {
            readline.question('Ingrese la descripción: ', (descripcion: string) => {
                readline.question('Ingrese el valor para opcional1: ', (opcional1: string) => {
                    readline.question('Ingrese el valor para opcional2: ', async (opcional2: string) => {
                        try {
                            const nuevoRegistro: Registro = {
                                identificacion,
                                descripcion,
                                opcional1,
                                opcional2,
                            };

                            insertRegistro(nuevoRegistro);
                            console.log('Nuevo registro creado:', nuevoRegistro);

                            readline.close();
                        } catch (error) {
                            console.error('Error al crear el nuevo registro:', error);
                            readline.close();
                        }
                    });
                });
            });
        });
    } catch (error) {
        console.error('Error al crear el nuevo registro:', error);
        readline.close();
    }
}


export { eliminarRegistro, modificarRegistro, crearRegistro };