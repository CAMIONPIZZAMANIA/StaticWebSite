<script setup>
import Pizzas from "@/components/Pizzas/Pizzas.vue"
import PizzasWhite from "@/components/Pizzas/PizzasWhite.vue"
</script>

<template>
  <section id="pizzas" class="pattern-style-4 pizza-custom">
    <div class="container raise-2">
      <h3 class="section-title mb-6 pb-3 text-center">Nos pizzas</h3>
      <h4 class="section-title mb-6 pb-3 text-center">
        -------------------- <br>
        Une pizza de type napolitaine, cuite au feu de bois. <br>
        Une pâte qui a levée au minimum 72 heures.<br>
        La sauce : Tomates San Marzano DOP, huile d'olive et basilic. <br>
        Mozzarella Fior di latte.<br>
        -------------------
      </h4>
      <h4 class="section-title mb-6 pb-3 text-center">
        -------------------
      </h4>
    </div>
      <Pizzas />
      <PizzasWhite />
    <div class="container raise-2">
      <h3 class="title">Nos suppléments</h3>
      <h4 class="subtitle">--- à choix ---</h4>
      <div class="row">
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Supplément à 1 CHF</h5>
                <p class="float-right text-primary"></p>
              </div>
              <div class="body">
                <p>champignons, oignons, câpres, oeuf, poivrons, artichauts, crème, ananas, pecorino romano</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Supplément à 2 CHF</h5>
                <p class="float-right text-primary"></p>
              </div>
              <div class="body">
                <p>jambon, lardons, salami piquant, gorgonzola, chèvre, anchois, raclette, tomme vaudoise, thon</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>