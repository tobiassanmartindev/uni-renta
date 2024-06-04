<template>
  <div class="hero page-inner overlay">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-9 text-center mt-5">
          <h1 class="heading" data-aos="fade-up">Publica tu propiedad</h1>

          <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
            <ol class="breadcrumb text-center justify-content-center">
              <li class="breadcrumb-item"><a href="#">Inicio</a></li>
              <li class="breadcrumb-item active text-white-50" aria-current="page">
                Quiero publicar
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="container">
      <div class="row text-left mb-5">
        <div class="col-12">
          <h2 class="font-weight-bold heading text-primary mb-4">Como publicar en Uni Renta</h2>
        </div>
        <div class="col-lg-6">
          <p class="text-black-50">
            Inicia Sesion para continuar
          </p>
          <p class="text-black-50">
           <button>Inicia Sesion</button> O  <button>Registrate</button>
          </p>
          <p class="text-black-50">
           Para continuar
          </p>
        </div>
        <div class="col-lg-6">
          <p class="text-black-50">
            <span class="text-black">Que tenemos en cuenta para las publicaciones?</span> <br />
            Validamos la informacion de cada publicacion con el email del anunciante, verificamos la calidad de las fotos.
          </p>
          <p class="text-black-50">
            <span class="text-black">Publicaciones</span> <br />
            Cada anunciante tendra 3 publicaciones totalmente Gratis disponibles, luego de esto se cobrara una tarifa extra.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PublicarView',
  components: {},
  data() {
    return {
    }
  },
  methods: {},
  mounted() {
  }
})
</script>
