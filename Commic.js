class Commic extends Book{

    constructor(id,author,name,price,img, editotial, ilustrator){
        super(id,author,name,price,img, editotial)
        this.type = "Commic"
        this.ilustrator = ilustrator
    }

    getSummary(){
        return `
        ======== ${this.id} =========
        Name: ${this.name}
        Author: ${this.author}
        Price: ${this.getFinalPrice()}
        Editorial: ${this.editotial}
        Tipo: ${this.type}
        Ilustrador: ${this.ilustrator}
        `
    }

}