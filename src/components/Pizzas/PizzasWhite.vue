<script setup>
import { ref } from 'vue'
import jsondata from '../../data/pizzas_white.json'

const pizzas = ref(jsondata)
</script>

<template>
  <div class="container raise-2">
    <div class="row">
      <div v-for="pizza in pizzas" class="col-md-6 mb-4">
        <a href="javascrip:void(0)" class="custom-list">
          <div class="info">
            <div class="head clearfix">
              <h5 class="title float-left">{{ pizza.name }}</h5>
              <p class="float-right text-primary">{{ pizza.price }}</p>
            </div>
            <div class="body">
              <p>{{ pizza.ingredients }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>