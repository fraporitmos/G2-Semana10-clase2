class Book {

    constructor(id,author,name,price,img, editotial, type){
        this.id = id
        this.author =  author
        this.name = name
        this.price = price
        this.img = img
        this.editotial = editotial
        this.type = type
        this.rentPrice = 0
        this.deliveryPrice = 15
    }


    getSummary(){
        return `
        ======== ${this.id} =========
        Name: ${this.name}
        Author: ${this.author}
        Price: ${this.getFinalPrice()}
        Editorial: ${this.editotial}
        Tipo: ${this.type}
        Rent Price: ${this.rentPrice}
        `   
    }


    getObject(){
        return {        
            id: this.id, 
            name: this.name, 
            author: this.author,
            img: this.img,
            price: this.getFinalPrice(),
            editorial: this.editotial,
            tipo: this.type,
            deliberyPrice:  this.deliveryPrice,
            rent_price: this.rentPrice
        }
    }


    getFinalPrice(){
      if(this.price == undefined){
        return 10 + this.deliveryPrice 
      }else{
        let finalPrice = this.price + this.deliveryPrice
        return finalPrice
      }
    }

}