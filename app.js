let book1 = new Book(
  1,
  "James Clear",
  "Hábitos Atómicos",
  undefined,
  "https://www.crisol.com.pe/media/catalog/product/cache/f6d2c62455a42b0d712f6c919e880845/9/7/9786287578364.jpg",
  "Paidos",
  "Libro"
);

let book2 = new Book(
  2,
  "Dan Brown",
  "La fortaleza digital",
    40,
  "https://images.cdn3.buscalibre.com/fit-in/360x360/9e/45/9e45905c1ffe66c43f04237851a5e843.jpg",
  "Umbriel",
  "Libro"
);

let commic1 = new Commic(
  3,
  "Peter David",
  "The Incredible Hulk Silent Screams",
  120,
  "https://m.media-amazon.com/images/I/71H4P87+RSL._SL1041_.jpg",
  "Marvel",
  "Dale Keonwn"
);

var carrito = new Cart()


const objectBooks = [
    book1.getObject(),
    book2.getObject(),
    commic1.getObject()
]


//Indexad ID del html con Javascript
const container = document.getElementById("container")

const cartCount = document.getElementById("cartCount")


objectBooks.map( item => {
    container.innerHTML += renderBook(item)

})

document.querySelectorAll(".addToCart").forEach((button) => {
    button.addEventListener("click",()=>{
        const bookId = button.getAttribute("idOfCart")
        const book = objectBooks.find( item=> item.id = bookId)
        carrito.addToCart(book)
        cartCount.innerHTML = carrito.cart.length
    })
})



