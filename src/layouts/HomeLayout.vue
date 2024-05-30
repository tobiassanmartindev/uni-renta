<template>
  <NavBar />
  <RouterView></RouterView>
  <Footer />
</template>
<style>
.img.overlay {
  background-image: url('../assets/images/hero_bg_1.jpg');
}
</style>

<script>
import { defineComponent } from 'vue'
import NavBar from '../components/components/NavBar.vue'
import Footer from '../components/components/Footer.vue'

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      texto: 'Hola mundo'
    }
  },
  methods: {},
  components: { NavBar, Footer }
})
</script>
