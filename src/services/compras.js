class CompraService{
    Compras=[];

    constructor(){//Cuando la coloco acá, ya me queda global
        this.compras=[
            
        ];

        
    }

    obtenerTodos(){//me regresa información
        return this.compras;
    }

}export default new CompraService();