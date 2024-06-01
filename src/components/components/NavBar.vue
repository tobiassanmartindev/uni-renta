<template>
  <div class="site-mobile-menu site-navbar-target">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close">
        <span class="icofont-close js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body"></div>
  </div>
  <nav class="site-nav">
    <div class="container">
      <div class="menu-bg-wrap">
        <div class="site-navigation">
          <a @click="$router.push('/')" class="logo m-0 float-start cursor-pointer">Uni Renta</a>

          <ul class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
            <li class="cursor-pointer" :class="$route.path == '/' ? 'active' : ''">
              <a @click="$router.push('/')">Inicio</a>
            </li>

            <li class="cursor-pointer" :class="$route.path == '/about' ? 'active' : ''">
              <a @click="$router.push('/about')">Sobre nosotros</a>
            </li>
            <li><a class="cursor-pointer">Quiero publicar</a></li>
            <li><a class="cursor-pointer login rounded" @click="loginWithGoogle()">Iniciar Sesion</a></li>
          </ul>

          <a href="#"
            class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
            data-toggle="collapse" data-target="#main-navbar">
            <span></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.login {
  background-color: #007070;
  color: #fff !important;
}

.login:hover {
  background-color: #004444;
  color: #fff !important;
}
</style>

<script>
import { supabase } from '@/clients/supabase';
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NavBar',
  data() {
    return {
      texto: 'Hola mundo'
    }
  },
  methods: {
    async loginWithGoogle() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            prompt: 'consent',
            redirectTo: '/',
          },
        },
      })
      console.log(":)")
    }
  },
  mounted() {
  },
})
</script>
