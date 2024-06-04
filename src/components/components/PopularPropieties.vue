<template>
  <div class="section">
    <div class="container">
      <div class="row mb-5 align-items-center">
        <div class="col-lg-6">
          <h2 class="font-weight-bold text-primary heading">Propiedades destacadas</h2>
        </div>
        <div class="col-lg-6 text-lg-end">
          <p>
            <a @click="$router.push('/alquileres')" class="btn btn-primary text-white py-3 px-4">Ver todas las
              propiedades</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="property-slider-wrap">
            <div class="my-slider">
              <div class="property-item" v-for="card in popularProperties" :key="card">
                <CardComponent :id="card.id" :precio="card.precio" :barrio="card.barrio" :ciudad="card.ciudad" :banios="card.banios" :ambientes="card.ambientes" />
              </div>
            </div>
            <div id="customize-toggle" class="d-none"></div>
            <div id="property-nav" class="controls" tabindex="0" aria-label="Carousel Navigation">
              <span class="prev" data-controls="prev" aria-controls="property" tabindex="-1">Anterior</span>
              <span class="next" data-controls="next" aria-controls="property" tabindex="-1">Siguiente</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CardComponent from './CardComponent.vue'
import { supabase } from '@/clients/supabase';

export default defineComponent({
  name: 'PopularPropieties',
  components: { CardComponent },
  data() {
    return {
      texto: 'Hola mundo',
      popularProperties: [
        
      ]
    }
  },
  methods: {
    async getPopularProperties(){
      
      let { data: propiedades_populares } = await supabase
        .from('propiedades_populares')
        .select('*')

        this.popularProperties = propiedades_populares
    }
  },
  mounted() {
    this.getPopularProperties().then(()=>{
      tns({
      container: '.my-slider',
      items: 3,
      slideBy: 'page',
      autoplay: true,
      controlsContainer: '.controls',
      autoplayButton: '#customize-toggle',
      gutter: '30',
      responsive: {
        350: {
          items: 1
        },
        500: {
          items: 2
        },
        700: {
          items: 3
        }
      }
    })
    });
    
  }
})
</script>
