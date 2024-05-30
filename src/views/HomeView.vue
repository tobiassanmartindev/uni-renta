<template>
  <div class="hero">
    <div class="hero-slide">
      <div class="img overlay"></div>
    </div>

    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-10 text-center">
          <h1 class="heading" data-aos="fade-up">Encuentra tu hogar ideal para tus estudios</h1>
          <form
            action="#"
            class="narrow-w form-search d-flex align-items-stretch mb-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="text"
              class="form-control px-4"
              placeholder="Busca por facultad o por ciudad"
            />
            <button type="submit" class="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <PopularPropieties />

  <section class="features-1">
    <div class="container">
      <div class="row">
        <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div class="box-feature">
            <span class="flaticon-house"></span>
            <h3 class="mb-3">Nuestros Alquileres</h3>
            <p>Variedad de opciones para estudiantes universitarios.</p>
            <p><a href="#" class="learn-more">Más Información</a></p>
          </div>
        </div>
        <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
          <div class="box-feature">
            <span class="flaticon-building"></span>
            <h3 class="mb-3">Fácil y Rápido</h3>
            <p>Encuentra tu alojamiento ideal en pocos clics.</p>
            <p><a href="#" class="learn-more">Más Información</a></p>
          </div>
        </div>
        <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div class="box-feature">
            <span class="flaticon-house-3"></span>
            <h3 class="mb-3">Soporte al Usuario</h3>
            <p>Estamos aquí para ayudarte en cada paso del camino.</p>
            <p><a href="#" class="learn-more">Más Información</a></p>
          </div>
        </div>
        <div class="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
          <div class="box-feature">
            <span class="flaticon-house-1"></span>
            <h3 class="mb-3">Propiedades Verificadas</h3>
            <p>Alquileres seguros y confiables para estudiantes.</p>
            <p><a href="#" class="learn-more">Más Información</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section section-4 bg-light">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-5">
          <h2 class="font-weight-bold heading text-primary mb-4">
            Encuentra el alquiler perfecto para vos
          </h2>
          <p class="text-black-50">
            Explora nuestra variedad de opciones y contacta con el propietario que más te convenga.
          </p>
        </div>
      </div>
      <div class="row justify-content-between mb-5">
        <div class="col-lg-7 mb-5 mb-lg-0 order-lg-2">
          <div class="img-about dots">
            <img src="../assets/images/hero_bg_3.jpg" alt="Image" class="img-fluid" />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="d-flex feature-h">
            <span class="wrap-icon me-3">
              <span class="icon-home2"></span>
            </span>
            <div class="feature-text">
              <h3 class="heading">250 Propiedades</h3>
              <p class="text-black-50">Amplia variedad de opciones para elegir.</p>
            </div>
          </div>

          <div class="d-flex feature-h">
            <span class="wrap-icon me-3">
              <span class="icon-person"></span>
            </span>
            <div class="feature-text">
              <h3 class="heading">Asistencia Personalizada</h3>
              <p class="text-black-50">Ayuda y soporte en todo momento.</p>
            </div>
          </div>

          <div class="d-flex feature-h">
            <span class="wrap-icon me-3">
              <span class="icon-security"></span>
            </span>
            <div class="feature-text">
              <h3 class="heading">Propiedades Seguras</h3>
              <p class="text-black-50">Alquileres verificados y confiables.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row section-counter mt-5">
        <div class="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div class="counter-wrap mb-5 mb-lg-0">
            <span class="number"><span class="countup text-primary">3298</span></span>
            <span class="caption text-black-50">Propiedades para alquilar</span>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div class="counter-wrap mb-5 mb-lg-0">
            <span class="number"><span class="countup text-primary">2181</span></span>
            <span class="caption text-black-50">Propiedades en venta</span>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
          <div class="counter-wrap mb-5 mb-lg-0">
            <span class="number"><span class="countup text-primary">9316</span></span>
            <span class="caption text-black-50">Propiedades totales</span>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
          <div class="counter-wrap mb-5 mb-lg-0">
            <span class="number"><span class="countup text-primary">7191</span></span>
            <span class="caption text-black-50">Agentes disponibles</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.img.overlay {
  background-image: url('../assets/images/hero_bg_1.jpg');
}
</style>

<script>
import PopularPropieties from '@/components/components/PopularPropieties.vue'
import Footer from '@/components/components/Footer.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      texto: 'Hola mundo'
    }
  },
  methods: {},
  components: {
    PopularPropieties
  }
})
</script>
