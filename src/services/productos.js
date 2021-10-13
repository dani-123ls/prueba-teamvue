class ProductoService{
    productos=[];

    constructor(){//Cuando la coloco acá, ya me queda global
        this.productos=[
            { nombre: "Disco Duro", precio: 200000 }, //lo mismo a java o python clave-valor
             { nombre: "Teclado", precio: 100000 },
             { nombre: "Mouse", precio: 80000 },
             { nombre: "Pantalla", precio: 8000000 },
             { nombre: "Memoria USB", precio: 50000 }

           
        ];

        
    }

    obtenerTodos(){//me regresa información
        return this.productos;
    }

    

}export default new ProductoService();