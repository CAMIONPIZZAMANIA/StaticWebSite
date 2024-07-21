<script setup lang="ts">
import { useCartStore} from "@/stores/cart";

const cart = useCartStore();
</script>
<template>
    <div v-if="cart.$state.items.length === 0" class="contentbar">
      <!-- Start row -->
      <div class="row">
        <!-- Start col -->
        <div class="col-md-12 col-lg-12 col-xl-12">
          <div class="card m-b-30">
            <div class="card-header">
              <h5 class="card-title">Votre sélection est vide</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="contentbar">
      <!-- Start row -->
      <div class="row">
        <!-- Start col -->
        <div class="col-md-12 col-lg-12 col-xl-12">
          <div class="card m-b-30">
            <div class="card-header">
              <h5 class="card-title">Votre sélection</h5>
            </div>
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-8">
                  <div class="cart-container">
                    <div class="cart-head">
                      <div class="table-responsive">
                        <table class="table table-borderless">
                          <thead>
                          <tr>
                            <th scope="col">Pizza</th>
                            <th scope="col">Quantité</th>
                            <th scope="col">Prix Unitaire</th>
                            <th scope="col" class="text-right">Total</th>
                            <th scope="col">Retirer</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>Mozzarella</td>
                            <td>
                              <div class="form-group mb-0">
                                <input type="number" class="form-control cart-qty" name="cartQty1" id="cartQty1" value="1">
                              </div>
                            </td>
                            <td>12.00 CHF</td>
                            <td class="text-right">12.00 CHF</td>
                            <td><a href="#" class="text-danger"><i class="ri-delete-bin-3-line"></i></a></td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="cart-body">
                      <div class="row">
                        <div class="col-md-12 order-2 order-lg-1 col-lg-5 col-xl-6">
                          <div class="order-note">
                            <form>
                              <div class="form-group">
                                <label for="specialNotes">Message pour Olivier:</label>
                                <textarea class="form-control" name="specialNotes" id="specialNotes" rows="3" placeholder="Ajouter un ingrédient, demander une cuisson spéciale,..."></textarea>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div class="col-md-12 order-1 order-lg-2 col-lg-7 col-xl-6">
                          <div class="order-total table-responsive ">
                            <table class="table table-borderless text-right">
                              <tbody>
                              <tr>
                                <td class="f-w-7 font-18"><h4>Montant :</h4></td>
                                <td class="f-w-7 font-18"><h4>CHF 12.00</h4></td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="cart-footer text-right">
                      <a href="" class="btn btn-danger my-1"><i class="ri-arrow-left-line ml-2"></i>Ajouter une pizza</a>
                      <a href="" class="btn btn-success my-1">Réserver<i class="ri-arrow-right-line ml-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End col -->
      </div>
      <!-- End row -->
    </div>
</template>

<style scoped>
</style>