<script setup>
    import imgVillageLeTerroir from '../../assets/imgs/location-villars-le-terroir-closed.PNG'
    import imgOrny from '../../assets/imgs/location-orny.PNG'
    import imgBottens from '../../assets/imgs/location-bottens.PNG'
    import imgPoliezLeGrand from '../../assets/imgs/location-poliez-le-grand.PNG'
    import imgBavois from '../../assets/imgs/location-bavois.PNG'
</script>

<template>
  <!-- Location Section -->
  <section id="locations">
    <div class="container">
      <h3 class="section-title mb-5 text-center location-custom">Nos emplacements</h3>
      <div class="row">
        <div class="col-md-4 my-3">
          <div class="team-wrapper text-center">
            <a href="https://maps.app.goo.gl/Rp1KytKgSLw8QQRV8"><h5 class="my-3">Lundi : VILLARS-LE-TERROIR</h5></a>
            <a href="https://maps.app.goo.gl/Rp1KytKgSLw8QQRV8"><img :src="imgVillageLeTerroir" class="circle-120 rounded-circle mb-3 shadow" alt="Thanks to Pigga"></a>
          </div>
        </div>
        <div class="col-md-4 my-3">
          <div class="team-wrapper text-center">
            <a href="https://maps.app.goo.gl/1J7vSuQnChSppoKQ9"><h5 class="my-3">Mardi : ORNY</h5></a>
            <a href="https://maps.app.goo.gl/1J7vSuQnChSppoKQ9"><img :src="imgOrny" class="circle-120 rounded-circle mb-3 shadow" alt="Thanks to Pigga"></a>
          </div>
        </div>
        <div class="col-md-4 my-3">
          <div class="team-wrapper text-center">
            <a href="https://maps.app.goo.gl/sZKwEadSCPBK5kew7"><h5 class="my-3">Mercredi : BOTTENS</h5></a>
            <a href="https://maps.app.goo.gl/sZKwEadSCPBK5kew7"><img :src="imgBottens" class="circle-120 rounded-circle mb-3 shadow" alt="Thanks to Pigga"></a>
          </div>
        </div>
        <div class="col-md-4 my-3">
          <div class="team-wrapper text-center">
            <a href="https://maps.app.goo.gl/SuxcLFGE8cJAZxKR7"><h5 class="my-3">Jeudi : POLIEZ-LE-GRAND</h5></a>
            <a href="https://maps.app.goo.gl/SuxcLFGE8cJAZxKR7"><img :src="imgPoliezLeGrand" class="circle-120 rounded-circle mb-3 shadow" alt="Thanks to Pigga"></a>
          </div>
        </div>
        <div class="col-md-4 my-3">
          <div class="team-wrapper text-center">
            <a href="https://maps.app.goo.gl/oYTeb7Vm7fMT9HdU7"><h5 class="my-3">Vendredi : BAVOIS</h5></a>
            <a href="https://maps.app.goo.gl/oYTeb7Vm7fMT9HdU7"><img :src="imgBavois.PNG" class="circle-120 rounded-circle mb-3 shadow" alt="Thanks to Pigga"></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End of Location Section -->
</template>

<style scoped>

</style>