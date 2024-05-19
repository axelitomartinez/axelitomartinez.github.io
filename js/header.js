//Crear una variable miHeader 


let miHeader = `
    <div class="menu container">
                    <!-- Logo -->
                    <div>
                        <a href="/"><img src="/images/img/logonegro2.png" alt="logo" class="logo"></a>
                    </div>
                <input type="checkbox" id="menu"/>
                <label for="menu">
                    <img src="/images/menu.png" class="menu-icono" alt="menu">
                </label>
                <nav class="navbar">
                    <ul>
                        <li><a href="/index.html">Inicio</a></li>
                        <li><a href="/Servicios.html">Servicios</a></li>
                        <li><a href="/Productos.html">Productos</a></li>
                        <li><a href="/Contacto.html">Contactos</a></li>
                    </ul>
                </nav>
                <div>
                    <ul>
                        <li class="submenu">
                            <img src="/images/car.svg" id="img-carrito" alt="carrito">
                            <div id="carrito">
                                <table id="lista-carrito">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <a href="#" id="vaciar-carrito" class="btn-2">Vaciar Carrito</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header-content container">
                <div class="header-img">
                    <img src="/cacerolas.varias.png" alt="">
                </div>
                <div class="header-txt">
                    <h1>Bienvenido a nuestro servicio de restauración de productos de bazar</h1>
                    <p>¡Devuelve el brillo y la funcionalidad a tus utensilios de cocina!</p>
                    <a href="#" class="btn-1">Informacion</a>
                </div>

            </div>
`
//Selecciono el header y con innerHTML agrego lo que defini en la variable miHeader
document.querySelector("header").innerHTML = miHeader