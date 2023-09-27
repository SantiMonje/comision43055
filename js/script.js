(function() {
    let numerodeEntradas = parseFloat(prompt("Cuántas entradas desea comprar?"));
    let totalCompra = 0;
    
    if (numerodeEntradas <= 2) {
        for (let i = 0; i < numerodeEntradas; i++) {
            let nombrePelicula = prompt("Ingrese el nombre de la película");
            let precioPelicula = parseFloat(prompt("Ingrese el precio de la entrada $:"));
            let descuento = parseFloat(prompt("Ingrese el número de descuento para la entrada en porcentaje"));
            let precioconDescuento = calcularPrecioDescuento(precioPelicula, descuento);
            totalCompra += precioconDescuento;
            console.log("Resumen de la entrada " + (i + 1) + ":");
            console.log("Nombre de la película:", nombrePelicula);
            console.log("Precio $:" + precioPelicula.toFixed(2));
            console.log("Descuento:", descuento + "%");
            console.log("Precio con descuento:" + precioconDescuento.toFixed(2));
        }
        console.log("Total de la compra:" + totalCompra.toFixed(2));
        alert("Compra realizada con éxito\nTotal de la compra:" + totalCompra.toFixed(2));
    } else {
        console.log("El número máximo son 2 entradas");
    }
    function calcularPrecioDescuento(precio, descuento) {
        return precio - (precio * descuento / 100);
    }
})();