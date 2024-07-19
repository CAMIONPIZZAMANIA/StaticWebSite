<script setup>

</script>

<template>
  <div class="row">
    <div class="center-pizza-moment">
      <div class="img-holder">
        <img id=pizzaOfTheMonth class="center-pizza-moment" src="../../assets/imgs/pizza-du-moment.jpg" alt="Pizza du moment : Merguez, salami piquant, poivrons, oignons et mozzarella." >
      </div>
      <!-- The Modal -->
      <div id="pizzaModal" class="modal">
        <img id=pizzaBig class="modal-content" src="../../assets/imgs/pizza-du-moment.jpg">
        <div id="caption"></div>
      </div>
      <a href="javascrip:void(0)" class="custom-list">
        <div class="info">
          <div class="head clearfix">
            <h5 class="title float-left">La pizza du moment</h5>
            <p class="float-right text-primary">18.-</p>
          </div>
          <div class="body">
            <p class="pizza-ingredient">Merguez, salami piquant, poivrons, oignons et mozzarella.</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>