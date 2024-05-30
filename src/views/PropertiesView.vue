<template>
  <div class="hero page-inner overlay">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-9 text-center">
          <h1 class="heading" data-aos="fade-up">Alquileres</h1>
          <nav
            class="nav-custom-css"
            aria-label="breadcrumb"
            data-aos="fade-up"
            data-aos-delay="200"
          >
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
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4" v-for="card in alquileres">
          <div class="property-item mb-30">
            <a href="property-single.html" class="img">
              <img src="../assets/images/img_1.jpg" alt="Image" class="img-fluid" />
            </a>

            <div class="property-content">
              <div class="price mb-2">
                <span>{{ card.price }}</span>
              </div>
              <div>
                <span class="d-block mb-2 text-black-50">{{ card.address }}</span>
                <span class="city d-block mb-3">{{ card.city }}</span>

                <div class="specs d-flex mb-4">
                  <span class="d-block d-flex align-items-center me-3">
                    <span class="icon-bed me-2"></span>
                    <span class="caption">{{ card.beds }}</span>
                  </span>
                  <span class="d-block d-flex align-items-center">
                    <span class="icon-bath me-2"></span>
                    <span class="caption">{{ card.baths }}</span>
                  </span>
                </div>

                <a href="property-single.html" class="btn btn-primary py-2 px-3">Ver detalles</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center py-5">
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
      </div>
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
import router from '@/router'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PropertiesViews',
  data() {
    return {
      alquileres: [
        {
          price: '$1,291,000',
          address: '5232 California Fake, Ave. 21BC',
          city: 'California, USA',
          beds: 2,
          baths: 2
        },
        {
          price: '$950,000',
          address: '1234 Elm Street, Apt 5A',
          city: 'New York, USA',
          beds: 3,
          baths: 2
        },
        {
          price: '$1,750,000',
          address: '6789 Oak Lane, Suite 101',
          city: 'San Francisco, USA',
          beds: 4,
          baths: 3
        },
        {
          price: '$1,750,000',
          address: '6789 Oak Lane, Suite 101',
          city: 'San Francisco, USA',
          beds: 4,
          baths: 3
        },
        {
          price: '$1,750,000',
          address: '6789 Oak Lane, Suite 101',
          city: 'San Francisco, USA',
          beds: 4,
          baths: 3
        },
        {
          price: '$500,000',
          address: '4567 Maple Avenue, Apt 2B',
          city: 'Austin, USA',
          beds: 2,
          baths: 1
        },
        {
          price: '$1,200,000',
          address: '8910 Pine Street, Apt 3C',
          city: 'Seattle, USA',
          beds: 3,
          baths: 2
        },
        {
          price: '$850,000',
          address: '2345 Cedar Road, Suite 7',
          city: 'Chicago, USA',
          beds: 2,
          baths: 2
        },
        {
          price: '$1,100,000',
          address: '5678 Birch Boulevard, Apt 4D',
          city: 'Miami, USA',
          beds: 3,
          baths: 2
        },
        {
          price: '$1,500,000',
          address: '9012 Walnut Drive, Suite 2A',
          city: 'Los Angeles, USA',
          beds: 4,
          baths: 3
        },
        {
          price: '$620,000',
          address: '3456 Spruce Street, Apt 6B',
          city: 'Denver, USA',
          beds: 2,
          baths: 1
        },
        {
          price: '$1,950,000',
          address: '7890 Redwood Lane, Suite 101',
          city: 'Boston, USA',
          beds: 5,
          baths: 4
        }
      ]
    }
  },
  methods: {},
  components: { PopularPropieties },
  mounted() {}
})
</script>
