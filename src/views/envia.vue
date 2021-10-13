<template>
  
  
  <main>
    <div>
      <!--crear secciones-->
      <h2 valor="Hello Word">Registrar compra</h2>
      <form action="#" id="form_compra">
        <label for="cliente">Cliente</label>
        <input
          type="text"
          name="cliente"
          v-model="compra.cliente"
        /><!--ahí me asocia con lo que escriba en el input -->
        <label id="doc" for="documento">Documento</label>
        <input type="text" name="documento" v-model="compra.documento" />
        <label for="producto">Producto:</label>
        <select name="producto" id="productos" v-model="seleccion">
          
          <option value="-1">Seleccione un producto</option>
          <!--me ahorro el for de función cargar compras-->
          <option
            v-for="(unProducto, llave) in listaProductos"
            v-bind:key="llave"
            v-bind:value="llave"
          >
            {{ unProducto.nombre }} - ${{ unProducto.precio }}
          </option>
        </select>
        <label for="cantidad">Cantidad:</label>
        <input type="number" name="cantidad" v-model="compra.cantidad" />

        <div>
          <input
            type="radio"
            name="envio"
            v-model="compra.envio"
            value="0"
          />Express
        </div>

        <div>
          <input type="radio" name="envio" v-model="compra.envio" value="1" />
          Normal
        </div>
        <button type="reset">Limpiar</button>
        <!-- <button onclick="procesarInformacion()" type="button">Agregar Compra</button> -->
        <button @click.prevent="procesarInformacion" type="button">
          Agregar Compra</button
        ><!--los ()los utilizo en la función, si voy a pasarle parametros, sino no -->
      </form>
      <!-- <h3>Cliente: {{compra.cliente}}</h3>
            <h3>Documento: {{prueba}}</h3> -->
    </div>

   
  </main>
<p></p>

</template>

<script>
// @ is an alias to /src
import ProductoService from "@/services/productos.js";//me manda traer los servicios
import CompraService from "@/services/compras.js";
export default {
  mounted() {
    this.listaProductos= ProductoService.obtenerTodos();//guardo todos esos servicios acá 
    this.listaCompras = CompraService.obtenerTodos();

    
  },
  data() {
    //regresa un objeto,todo tipo de datos dentro de return
    return {
      //las represento con un diccionario
      listaProductos: [],
      titulo: "Registro de compra",
      compra: {
        cliente: "",
        documento: "",
        producto: {},
        cantidad: 0, //le coloca ese valor a cantidad de manera automática, tan pronto inicio la página
        envio: 0,
      },

      seleccion: -1,
      nombresEnvio: ["Express", "Normal"],
      valoresEnvio: [20000, 10000],
      listaCompras: [],
    };
  },
  methods: {
    //atributo

    limpiarFormulario() {
      //solución error
      this.compra ={
        cliente: "",
        documento: "",
        producto: {},
        cantidad: 0,
        envio: 0,
      };
      this.seleccion = -1;
    },
    procesarInformacion() {
      this.compra.total = 0;
      this.compra.descuento = 0;

      this.compra.producto = this.listaProductos[this.seleccion];

      let subtotal = this.compra.producto.precio * this.compra.cantidad;
      let valorEnvio = 0;

      if (this.compra.cantidad > 10) {
        this.compra.descuento = subtotal * 0.1;
      }

      if (subtotal > 5000000) {
        if (this.compra.envio == 0) {
          valorEnvio += this.valoresEnvio[1]; //estaría en la posición de normal
        } else {
          valorEnvio = 0;
        }
        this.compra.descuento +=
          this.valoresEnvio[this.compra.envio] - valorEnvio; //tener en cuenta, ya que todo inicia en la posición 0
      } else {
        valorEnvio = this.valoresEnvio[this.compra.envio]; //proceso con listas
      }

      this.compra.total = valorEnvio + subtotal - this.compra.descuento; //falta el this?

      this.listaCompras.push(this.compra);

      this.limpiarFormulario();//forma correcta de pasarlo
      
      this.$router.push({name:"recibe"});//funcion de manera programatica- tan pronto elimine, para que cambie
      //de tal manera que se vaya de una pantalla a otra, se puede trabajar para que me mande al carrito
    },
  },
  name: "Home",
  components: {},
};
</script>

<style scoped>

#form_compra {
  display: grid;
  grid-template-columns: 6rem 10rem;
  row-gap: 1rem;
  color:tomato;
  border-color: green;
}
#doc {
  border-block-color: black;

}
main {
  display: grid;
  grid-template-columns: 4fr 8fr;
  column-gap: 1rem;
  padding: 2rem;
  color:tomato;
  border-color: green;
}
table {
  width: 80%;
  margin: auto;
  color:tomato;
  border-color: green;
}
</style>
