<template>
  <div id="vueapp">
    <router-view/>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
export default {
  components: {
    Home
  }
}
</script>
