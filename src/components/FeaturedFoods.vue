<script setup>

</script>

<template>
  <!-- Service Section -->
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
      <div class="row">
        <div class="center-pizza-moment">
          <div class="img-holder">
            <img id=pizzaOfTheMonth class="center-pizza-moment" src="../assets/imgs/pizza-du-moment.jpg" alt="Pizza du moment : Merguez, salami piquant, poivrons, oignons et mozzarella." >
          </div>
          <!-- The Modal -->
          <div id="pizzaModal" class="modal">
            <span class="close">&times;</span>
            <img id=pizzaBig class="modal-content" src="../assets/imgs/pizza-du-moment.jpg">
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
      <h4 class="section-title mb-6 pb-3 text-center">
        -------------------
      </h4>
      <div class="row">
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Margherita</h5>
                <p class="float-right text-primary">12.-</p>
              </div>
              <div class="body">
                <p>Mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">4 Saisons</h5>
                <p class="float-right text-primary">17.-</p>
              </div>
              <div class="body">
                <p>Jambon, champignons frais, poivrons, artichauts, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Romana</h5>
                <p class="float-right text-primary">15.-</p>
              </div>
              <div class="body">
                <p>Jambon, champignons, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Andalouse</h5>
                <p class="float-right text-primary">16.-</p>
              </div>
              <div class="body">
                <p>Salami piquant, champignons frais, poivrons, câpres, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Napolitaine</h5>
                <p class="float-right text-primary">14.-</p>
              </div>
              <div class="body">
                <p>Anchois, câpres, olives, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Du Chef</h5>
                <p class="float-right text-primary">17.-</p>
              </div>
              <div class="body">
                <p>Chèvre, lardons, champignons frais, crème (mascarpone), mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Campagnarde</h5>
                <p class="float-right text-primary">15.-</p>
              </div>
              <div class="body">
                <p>Champignons frais, lardons, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Pizza Mania</h5>
                <p class="float-right text-primary">17.-</p>
              </div>
              <div class="body">
                <p>Champignons frais, oignons, lardons, oeuf, crème (mascarpone), mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Charcutière</h5>
                <p class="float-right text-primary">17.-</p>
              </div>
              <div class="body">
                <p>Jambon, lardons, salami piquant, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Méditerranéenne</h5>
                <p class="float-right text-primary">16.-</p>
              </div>
              <div class="body">
                <p>Thon, câpres, oignons, olives, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Végétarienne</h5>
                <p class="float-right text-primary">15.-</p>
              </div>
              <div class="body">
                <p>Champignons frais, poivrons, artichauts, oignons, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">4 Fromages</h5>
                <p class="float-right text-primary">16.-</p>
              </div>
              <div class="body">
                <p>Chèvre, gorgonzola, pecorino romano, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Hawaïenne</h5>
                <p class="float-right text-primary">15.-</p>
              </div>
              <div class="body">
                <p>Jambon, ananas, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Vaudoise</h5>
                <p class="float-right text-primary">17.-</p>
              </div>
              <div class="body">
                <p>Tomme vaudoise, champignons frais, lardons, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container raise-2">
      <h3 class="title">Nos blanches</h3>
      <h4 class="subtitle">--- au mascarpone ---</h4>
      <div class="row">
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Flammenkueche</h5>
                <p class="float-right text-primary">15.-</p>
              </div>
              <div class="body">
                <p>Oignons, lardons, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Raclette</h5>
                <p class="float-right text-primary">17.-</p>
              </div>
              <div class="body">
                <p>Raclette, oignons, lardons, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Chèvre miel</h5>
                <p class="float-right text-primary">14.-</p>
              </div>
              <div class="body">
                <p>Chèvre, miel, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-6 mb-4">
          <a href="javascrip:void(0)" class="custom-list">
            <div class="info">
              <div class="head clearfix">
                <h5 class="title float-left">Cremossa</h5>
                <p class="float-right text-primary">17.-</p>
              </div>
              <div class="body">
                <p>Chèvre, gorgonzola, pecorino romano, raclette, mozzarella</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
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
  <!-- End of Featured Food Section -->
</template>

<style scoped>

</style>