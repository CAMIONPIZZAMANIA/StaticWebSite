<script setup>
import Pizzas from "@/components/Main/Service/Pizzas.vue"
import PizzasWhite from "@/components/Main/Service/PizzasWhite.vue"
import PizzaOfTheMoment from "@/components/Main/Service/PizzaOfTheMoment.vue";
import IngredientChoices from "@/components/Main/Service/IngredientChoices.vue";
import PizzaWelcome from "@/components/Main/Service/PizzaWelcome.vue";
</script>

<template>
  <section id="pizzas" class="pattern-style-4 pizza-custom">
    <div class="container raise-2">
      <PizzaWelcome />
      <PizzaOfTheMoment />
    </div>
    <h4 class="section-title mb-6 pb-3 text-center">
      -------------------
    </h4>
    <div class="container raise-2">
      <Pizzas />
      <PizzasWhite />
      <IngredientChoices />
    </div>
  </section>
</template>

<style scoped>

</style>