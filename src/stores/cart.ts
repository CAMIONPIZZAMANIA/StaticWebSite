import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        if (localStorage.getItem("cart"))
            return JSON.parse(localStorage.getItem("cart"));
        return {
            items: [],
            visible : false,
        }
    },
    getters:{
        total(state) {
            let tot=0
            state.items.forEach(item => tot += item.quantity * item.price)
            return tot
        },
        amount(state){
            let amount:number = 0
            state.items.forEach(item => amount += item.quantity)
            return amount
        }
    },
    actions:{
        //private methods
        findItemByName(nameToFind:string):string{
            return this.items.find((item) => item.name == nameToFind)
        },
        //public methods
        addItem(name:string, price:number, quantity:number){
            let existingItem = this.findItemByName(name)
            let existingQuantity = 0
            if(existingItem !== undefined){
                existingQuantity += existingItem.quantity
                this.items = this.items.filter(item => item !== existingItem)
            }
            //add item (new or updated)
            this.items.push({ name : name, price: price, quantity : quantity + existingQuantity })
        },
        emptyCart(){
            this.items = []
            this.visible = false
        },
        removeItem(itemToRemove:string){
            this.items = this.items.filter(item => item !== itemToRemove)
            if(this.items.length === 0){
                this.visible = false
            }
        },
        totalItem(nameToFind:string){
            const itemFound = this.findItemByName(nameToFind)
            return itemFound.quantity * itemFound.price
        },
        show(){
            this.visible = !this.visible
        },
        updateItemQuantity(itemName:string, newQuantity:number){
            let itemToUpdate = this.findItemByName(itemName)
            this.items = this.items.filter(item => item !== itemToUpdate)
            //update quantity
            this.items.push({ name : itemToUpdate.name, price : itemToUpdate.price, quantity : newQuantity })
        }
    }
})