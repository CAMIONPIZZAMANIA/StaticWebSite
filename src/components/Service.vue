<script setup>
import Pizzas from "@/components/Pizzas/Pizzas.vue"
import PizzasWhite from "@/components/Pizzas/PizzasWhite.vue"
import PizzaOfTheMoment from "@/components/Pizzas/PizzaOfTheMoment.vue";
import IngredientChoices from "@/components/Pizzas/IngredientChoices.vue";
import PizzaWelcome from "@/components/Pizzas/PizzaWelcome.vue";
</script>

<template>
  <section id="pizzas" class="pattern-style-4 pizza-custom">
      <PizzaWelcome />
      <PizzaOfTheMoment />
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