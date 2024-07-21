import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            items: []
        };
    },
    actions:{
        addItem(name:string, price:number, quantity:number){
            this.items.push({ name, price, quantity })
        }
    }
})