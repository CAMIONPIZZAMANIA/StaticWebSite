<script setup>
import { ref } from 'vue'

let currentYear = ref(new Date().getFullYear());

</script>

<template>
  <footer class="border border-dark border-left-0 border-right-0 border-bottom-0 p-4 bg-dark">
    <div class="container">
      <div class="row align-items-center text-center text-md-center">
        <div class="col">
          <p class="mb-0 small">{{ currentYear }}, <a href="https://www.camionpizzamania.ch" target="_blank">Camion Pizza Mania</a>  Tous droits réservés </p>
        </div>
        <div class="d-none d-md-block">
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>6m$ziWqF2,R;4MP