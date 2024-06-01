<template>
  <div class="hero page-inner overlay">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-9 text-center">
          <h1 class="heading" data-aos="fade-up">Alquileres</h1>
          <nav class="nav-custom-css" aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <ol class="breadcrumb text-center justify-content-center">
              <li class="breadcrumb-item text-white-50">
                <a @click="$router.push('/')">Inicio</a>
              </li>
              <li class="breadcrumb-item active text-white-50" aria-current="page">Propiedades</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div class="section section-properties">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="font-weight-bold text-primary heading mb-4">
            Resultados de tu busqueda "busqueda"
          </h2>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Ciudad</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option selected>Ciudad</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-2 d-grid gap-2">
          <a href="property-single.html" class="btn btn-primary py-2 px-3">Buscar</a>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4" v-for="card in propiedades">
          <CardComponent :id="card.id" :titulo="card.titulo" :descripcion="card.descripcion" :precio="card.precio"
            :ambientes="card.ambientes" :mts="card.mts" :dormitorios="card.dormitorios" :ciudad="card.ciudad"
            :barrio="card.barrio" :calle="card.calle" :ubicacion="card.ubicacion" :banios="card.banios" />
        </div>
      </div>
      <!-- <div class="row align-items-center py-5">
        <div class="col-lg-3">Pagination (1 of 10)</div>
        <div class="col-lg-6 text-center">
          <div class="custom-pagination">
            <a href="#">1</a>
            <a href="#" class="active">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style scoped>
.hero.page-inner.overlay {
  background-image: url('../assets/images/hero_bg_1.jpg');
  height: 300px;
}

.nav-custom-css {
  margin-bottom: 50px !important;
}
</style>
<script>
import PopularPropieties from '@/components/components/PopularPropieties.vue'
import CardComponent from '@/components/components/CardComponent.vue'
// import router from '@/router'
import { supabase } from '@/clients/supabase';

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AlquileresView',
  data() {
    return {
      propiedades: []
    }
  },
  methods: {
    async getAlquileres() {
      let { data: propiedades, error } = await supabase
        .from('propiedades')
        .select('*')
      this.propiedades = propiedades
    }
  },
  components: { PopularPropieties, CardComponent },
  mounted() { this.getAlquileres() }
})
</script>
