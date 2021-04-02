export class Tarea {
    titulo: string;
    descripcion: string;
    completo: boolean;

    constructor(pTitulo = '', pDescripcion = '') {
       this.titulo = pTitulo;
       this.descripcion =  pDescripcion;
       this.completo = false;
    }
}