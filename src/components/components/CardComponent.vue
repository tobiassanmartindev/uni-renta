<template>
  <div class="property-item mb-2">
    <a href="property-single.html" class="img">
      <img src="../../assets/images/img_2.jpg" alt="Image" class="img-fluid" />
    </a>

    <div class="property-content">
      <div class="price mb-2">
        <span>{{ precio?.toLocaleString('es-AR', {
          style: 'currency',
          currency: 'ARS'
        }) }}</span>
      </div>
      <div>
        <span class="d-block mb-2 text-black-50">{{ calle }}</span>
        <span class="city d-block mb-3">{{ ciudad }}, {{ barrio }}</span>

        <div class="specs d-flex mb-4">
          <span class="d-block d-flex align-items-center me-3">
            <span class="icon-bed me-2"></span>
            <span class="caption">{{ ambientes }}</span>
          </span>
          <span class="d-block d-flex align-items-center">
            <span class="icon-bath me-2"></span>
            <span class="caption">{{ banios }}</span>
          </span>
        </div>
        <a @click="$router.push(`/alquileres/${id}`)" class="btn btn-primary py-2 px-3">Ver detalles</a>
      </div>
    </div>
  </div>
</template>

<style>
.property-content {
  padding: 15px !important;

}
</style>

<script>
import { defineComponent } from 'vue'
// import { tns } from './node_modules/tiny-slider/src/tiny-slider'
export default defineComponent({
  name: 'CardComponent',
  // propiedades
  props: {
    id: Number,
    titulo: String,
    descripcion: String,
    precio: String,
    ambientes: Number,
    mts: Number,
    dormitorios: String,
    ciudad: String,
    barrio: String,
    calle: String,
    ubicacion: String,
    banios: Number,
  },
  data() {
    return {
      // texto: 'Hola mundo'
    }
  },
  methods: {},
  mounted() { }
})
</script>
