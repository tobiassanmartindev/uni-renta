<template>
  <div class="hero page-inner overlay">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-9 text-center mt-5">
          <h1 class="heading" data-aos="fade-up">
            {{ propiedad.titulo }}
          </h1>
          <span class="text-white fs-3">{{ propiedad.barrio }}, {{ propiedad.calle }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-7">
          <div class="img-property-slide-wrap">
            <div class="img-property-slide">
              <img src="../assets/images/img_1.jpg" alt="Image" class="img-fluid" />
              <img src="../assets/images/img_2.jpg" alt="Image" class="img-fluid" />
              <img src="../assets/images/img_3.jpg" alt="Image" class="img-fluid" />
            </div>
            <div id="customize-toggle" class="d-none"></div>
            <div id="property-nav" class="controls" tabindex="0" aria-label="Carousel Navigation">
              <span class="prev" data-controls="prev" aria-controls="property" tabindex="-1">Anterior</span>
              <span class="next" data-controls="next" aria-controls="property" tabindex="-1">Siguiente</span>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <h2 class="heading text-primary">{{ propiedad.barrio }}, {{ propiedad.calle }}</h2>
          <p class="meta">{{ propiedad.ciudad }}</p>
          <p class="text-black fs-5">
            {{ propiedad.descripcion }}
          </p>
          <div class="agent-box">
            <span class="fs-5 text-dark">Contacta con el anunciante</span>
            <!-- <div class="img mb-4">
              <img src="../assets/images/person_2-min.jpg" alt="Image" class="img-fluid" />
            </div> -->
            <div class="text mt-3 mb-5">
              <h3 class="mb-1">Alicia Huston</h3>
              <div class="meta mb-5">Particular</div>

              <div class="row">
                <div class="col">
                  <button type="button" class="btn btn-success rounded">WhatsApp</button>
                </div>
                <div class="col">
                  <button type="button" class="btn btn-dark rounded">Telefono</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mb-5" style="margin-top: -40px">
    <div class="fs-2 text-dark mb-3">
      Como llegar ?
    </div>
    <div class="row justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1571.567045541812!2d-57.54645994837416!3d-38.02065330856915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc2f0480a9c5%3A0x18067df5c0c600db!2sMart%C3%ADn%20Miguel%20de%20G%C3%BCemes%2C%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1717220884976!5m2!1ses!2sar"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

</template>
<style scoped>
.hero.page-inner.overlay {
  background-image: url('../assets/images/hero_bg_3.jpg')
}
</style>
<script>
import { defineComponent } from 'vue'
import { supabase } from '@/clients/supabase';
export default defineComponent({
  name: 'DetalleAlquilar',
  components: {},
  data() {
    return {
      propiedad: []
    }
  },
  methods: {
    async getDetalleAlquiler() {
      let { data: propiedad, error } = await supabase
        .from('propiedades')
        .select("*")

        // Filters
        .eq('id', this.$route.params.id)
      this.propiedad = propiedad[0];
    }
  },
  mounted() {
    this.getDetalleAlquiler()
    tns({
      container: ".img-property-slide",
      items: 1,
      slideBy: "page",
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      controlsContainer: '.controls',
      autoplay: true,
      autoplayButton: '#customize-toggle',
    })
  }
})
</script>
