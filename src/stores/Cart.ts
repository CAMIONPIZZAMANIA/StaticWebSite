import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        count: 0,
        total: 0.00,
        items:[]
    }),
    getters:{
        getCount:(state)=> state.count,
        getTotal:(state)=> state.total,
        getItems:(state)=> state.items
    },
    actions:{
        addItem(name:string, price:string, quantity:number) {
            this.items.push({ name, price, quantity })
        }
    }
})