function renderBook(book ){
    return `
          <div class="card" style="width: 550px; height: 200px">
        <div class="row g-0">
          <div class="col-md-3 col-xs-1">
            <img
              src=${book.img}
              class="img-fluid rounded-start"
              style="height: 200px;"
            />
          </div>
          <div class="col-md-8">
            <div
              class="card-body"
              style="
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              "
            >
              <div>
                <h5 class="card-title fw-bold .fs-4 text fw-bold">
                  ${book.name}
                </h5>
                <p class="card-text fw-bold text-warning">
                  Precio de envio: ${book.deliberyPrice}
                </p>
              </div>
              <div>
                <p class="card-text fw-bold fs-2 text">S/ 25.00</p>
                <button 
                type="button"
                idOfCart="${book.id}"
                class="btn btn-primary addToCart">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    `
}