<template>
    <header>
        <h1>MENÚ</h1>
        </header>
    <main>
        
    <div>
        <h2 valor="Hello word">Productos</h2>
        <form action="#" id="form_menu">
            <label for="producto">Producto:</label>
            <select name="producto" id="producto" v-model="seleccion">
                <option value="-1">Seleccione un producto</option>

            <option
            v-for="(unProducto, llave) in listaProductos"
            v-bind:key="llave"
            v-bind:value="llave"
            >
            {{ unProducto.nombre }} - ${{ unProducto.precio }}
            </option>
             
            </select>
           
            <button type="button">Agregar +</button>
            <!-- <select name="" id=""></select> -->
        </form>
    </div>
    </main>
    
</template>

<script>
export default {
    mounted() {
        let producto1 = { nombre: "Pandeyucas(Tradicionales y crocanticos)", precio: 6000};
        let producto2 = { nombre: "Arepas(De maíz pelao)", precio: 8000};
        let producto3 = { nombre: "Hormigas Culonas(Platillo exótico y exquisito)", precio: 12000};
        let producto4 = { nombre: "Papas Fritas(Bien crujientes)", precio: 7000};
        let producto5 = { nombre: "Patacones(De los mejores plátanos)", precio: 7000};
   
   this.listaProductos = [
      producto1,
      producto2,
      producto3,
      producto4,
      producto5,
    ]; //cuidado, el this
  },
  data(){
      return{
          listaProductos: [],
            compra: {
                producto: {},
            },
            seleccion: -1,
      };
      
  },
   
};
</script>

<style scoped>
    header h1{
        font-size: 1.5rem;
    }
body {
    text-align: left;
    padding: 1rem;
    margin:4rem;
}

#form_menu{
    display:grid;
    grid-template-columns: 6rem 10rem;
    row-gap: 1rem;
}
main {
    
    display: grid;
    grid-template-columns: 2fr 4fr;
    column-gap:1rem;
}
</style>