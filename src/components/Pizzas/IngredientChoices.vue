<script setup>
import { ref } from 'vue'
import jsondata1CHF from '../../data/ingredients_1chf.json'
const ingredients1CHF = ref(jsondata1CHF)
import jsondata2CHF from '../../data/ingredients_2chf.json'
const ingredients2CHF = ref(jsondata2CHF)

function getListOfIngredients(listOfIngredientsToFormat){
  let listOfIngredientsFormatted = "";
  listOfIngredientsToFormat.forEach(ingredient => {
    if(listOfIngredientsFormatted === ""){
      listOfIngredientsFormatted += ingredient.name
    }else{
      listOfIngredientsFormatted += ", " + ingredient.name.toLowerCase()
    }
  })
  return listOfIngredientsFormatted
}
</script>

<template>
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
              <p>{{ getListOfIngredients(ingredients1CHF) }}</p>
            </div>
            <a class="btn btn-primary mt-3">Ajouter</a>
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
              <p>{{ getListOfIngredients(ingredients2CHF) }}</p>
            </div>
            <a class="btn btn-primary mt-3">Ajouter</a>
          </div>
        </a>
      </div>
    </div>
</template>

<style scoped>

</style>