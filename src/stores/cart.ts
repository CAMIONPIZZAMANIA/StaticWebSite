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
        },
        totalItem(nameToFind:string){
            const itemFound = this.items.find((item) => item.name == nameToFind)
            return itemFound.quantity * itemFound.price
        },
        total():number{
            let tot=0
            this.items.forEach(item => tot += item.quantity * item.price)
            return tot
        }
    }
})