let misProductos = ``

for (let elemento of productos){
    misProductos = misProductos + `
    <div class="product">
                <img src=${elemento.imagen}" alt="">
                <div class="product-txt">
                    <h3>${elemento.descripcion}</h3>
                    <p>calidad premium</p>
                    <p class="precio">${elemento.precio}</p>
                    <a href="#" class="agregar-carrito btn-2" data-id="1">Agregar al carrito</a>
                </div>
            </div>
    `
}


document.querySelector(".product-content").innerHTML = misProductos