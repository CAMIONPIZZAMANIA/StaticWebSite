import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        if (localStorage.getItem("cart"))
            return JSON.parse(localStorage.getItem("cart"));
        return {
            items: []
        }
    },
    getters:{
        total(state) {
            let tot=0
            state.items.forEach(item => tot += item.quantity * item.price)
            return tot
        }
    },
    actions:{
        addItem(name:string, price:number, quantity:number){
            this.items.push({ name, price, quantity })
        },
        totalItem(nameToFind:string){
            const itemFound = this.items.find((item) => item.name == nameToFind)
            return itemFound.quantity * itemFound.price
        }
    }
})