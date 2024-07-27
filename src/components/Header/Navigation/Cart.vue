<script setup lang="ts">
import { useCartStore} from "@/stores/cart";
const cart = useCartStore();
</script>

<template>
    <div v-if="cart.$state.visible" class="contentbar">
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
                            <th scope="col">Prix</th>
                            <th scope="col" class="text-right">Total</th>
                            <th scope="col">Retirer</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr v-for="item in cart.$state.items">
                            <td>{{ item.name }}</td>
                            <td>
                              <div class="form-group mb-0">
                                <input type="number" class="form-control cart-qty" name="cartQty" id="cartQty" :value=item.quantity>
                              </div>
                            </td>
                            <td>{{ item.price }}.-</td>
                            <td class="text-right">{{ cart.totalItem(item.name) }}.-</td>
                            <td><a href="#" class="text-danger" @click="cart.removeItem(item)"><i class="fa fa-trash-o"></i></a></td>
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
                                <td class="f-w-7 font-18"><h4>{{ cart.total }}.-</h4></td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="cart-footer text-right">
                      <a href="" class="btn btn-danger my-1" @click="cart.show()">Ajouter une pizza</a>
                      <a href="" class="btn btn-success my-1" @click="cart.emptyCart()">Réserver</a>
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