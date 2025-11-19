import { Time } from "@angular/common";
import { Producto } from "./producto";

export class Pedido {
    constructor(
        public id: number = 0,
        public productos: Producto[],
        public fecha: string,
        public hora: string,
        public metodoPago: string,
        public metodoEnvio: string,
        public total: number,
        public status:string = "no comprado",
    ){}
}

