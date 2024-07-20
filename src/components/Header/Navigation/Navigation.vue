<script setup>
import SecondNavigation from "@/components/Header/Navigation/SecondNavigation.vue";
import ProfileNavigation from "@/components/Header/Navigation/ProfileNavigation.vue";
import Cart from "@/components/Header/Navigation/Cart.vue";
</script>

<template>
  <nav class="nav-second navbar custom-navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <SecondNavigation />
      <ProfileNavigation />
    </div>
    <div class="container-fluid">
      <Cart />
    </div>
  </nav>
</template>

<style scoped>
</style>