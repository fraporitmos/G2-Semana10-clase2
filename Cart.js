class Cart{

    constructor(){
        this.cart = []
        this.totalPayment = 0
        this.discount = 20
    }

    addToCart(product){
        this.cart.push(product)   
        this.getTotalPayment(product.price)
    }

  
    getProducts(){
        return this.cart
    }

    getTotalPayment(price){
        this.totalPayment = (this.totalPayment + price)
    }

    getFinalPayment(){
        return this.totalPayment - this.discount
    }
}