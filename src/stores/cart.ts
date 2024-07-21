import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        if (localStorage.getItem("cart"))
            return JSON.parse(localStorage.getItem("cart"));
        return {
            items: []
        }
    },
    actions:{
        addItem(name:string, price:number, quantity:number){
            this.items.push({ name, price, quantity })
        }
    }
})