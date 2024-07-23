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
        //private methods
        findItemByName(nameToFind:string):string{
            return this.items.find((item) => item.name == nameToFind)
        },
        //public methods
        addItem(name:string, price:number, quantity:number){
            try{
                let existingItem = this.findItemByName(name)
                let existingQuantity = 0
                if(existingItem !== undefined){
                    existingQuantity += existingItem.quantity
                    this.items = this.items.filter(item => item !== existingItem)
                }
                //new add
                this.items.push({ name: name, price: price, quantity : quantity + existingQuantity })
            }catch (e){
                let result = e.message;
            }
        },
        emptyCart(){
            this.items = []
        },
        removeItem(itemToRemove:string){
            this.items = this.items.filter(item => item !== itemToRemove)
        },
        totalItem(nameToFind:string){
            const itemFound = this.findItemByName(nameToFind)
            return itemFound.quantity * itemFound.price
        }
    }
})