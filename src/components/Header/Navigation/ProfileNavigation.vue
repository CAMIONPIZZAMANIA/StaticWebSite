<script setup lang="ts">
import {useCartStore} from "@/stores/cart.js";
const cart = useCartStore();
function showCart(){
  cart.show()
}

</script>

<template>
  <!-- Profile Navigation -->
    <div class="d-flex flex-row">
      <ul class="navbar-nav navbar-expand">
        <li class="nav-item">
          <a class="nav-link" href="#cart" data-target="#cartModal">
            <i class="fa-solid fa-cart-shopping" @click="showCart()"></i>
            <span class="position-absolute translate-middle badge rounded-circle bg-primary pt-2">{{ cart.amount }}</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#profile">
            <i class="fa-regular fa-user"></i>
          </a>
        </li>
      </ul>
    </div>
</template>

<style scoped>
</style>