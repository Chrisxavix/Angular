export class Producto {
    nombre: string;
    imgUrl: string;
    precio: number;
    cantidad: number;
    
    constructor (pNombre: string, pImgUrl: string, Pprecio: number) {
        this.nombre = pNombre;
        this.imgUrl = pImgUrl;
        this.precio = Pprecio;
        this.cantidad = 0;
    }
}