import { defineStore } from 'pinia'

class CartError extends RangeError{}

export const useCartStore = defineStore('cart', {
    state: () => ({ count: 0, total: 0.00 }),
    getters: {
        bool: (state) => state.count,
        double: (state) => state.total,
    },
    actions: {
        addItem() {
            throw new CartError('addItem')
        },
        removeItem() {
            throw new CartError('removeItem')
        },
        emptyCart(){
            throw new CartError('emptyCart')
        },
    },
})