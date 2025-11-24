export class Producto {
    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public precio :number,
        public img :string,
        public cantidad:number = 0
    ){}

    getSubtotal(): number{
        return this.cantidad*this.precio;
    }

    incrementar(): void {
    this.cantidad++;
  }

  decrementar(): void {
    if (this.cantidad > 0) this.cantidad--;
  }

}
