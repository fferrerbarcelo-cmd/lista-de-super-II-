
let listaDeSuper = ["Sal", "Leche", "Arroz"];

// Agregar dos productos al final
listaDeSuper.push("Pan");
listaDeSuper.push("Huevos");

// Agregar dos productos al principio
listaDeSuper.unshift("Manzanas");
listaDeSuper.unshift("Bananas");

// Mostrar la cantidad de productos
console.log("Cantidad antes de eliminar:", listaDeSuper.length);

// Eliminar el último producto y guardarlo
let noHabia = listaDeSuper.pop();

// Eliminar el primer producto y guardarlo
let comprado = listaDeSuper.shift();

// Mostrar la cantidad final en la consola
console.log("Producto eliminado del final:", noHabia);
console.log("Producto eliminado del principio:", comprado);
console.log("Cantidad final:", listaDeSuper.length);
console.log("Lista final:", listaDeSuper);

// Mostrar la lista final en la página
const listaFinal = document.getElementById("listaFinal");
const cantidadFinal = document.getElementById("cantidadFinal");
const operaciones = document.getElementById("operaciones");

listaDeSuper.forEach(function(producto) {
    const elemento = document.createElement("li");
    elemento.textContent = producto;
    listaFinal.appendChild(elemento);
});

cantidadFinal.textContent = listaDeSuper.length;

operaciones.innerHTML = `
    <div class="operacion">
        <strong>1.</strong> Se agregaron Pan y Huevos con
        <strong>push()</strong>.
    </div>
    <div class="operacion">
        <strong>2.</strong> Se agregaron Manzanas y Bananas con
        <strong>unshift()</strong>.
    </div>
    <div class="operacion">
        <strong>3.</strong> Se eliminó ${noHabia} con
        <strong>pop()</strong>.
    </div>
    <div class="operacion">
        <strong>4.</strong> Se eliminó ${comprado} con
        <strong>shift()</strong>.
    </div>
    <div class="operacion">
        <strong>5.</strong> La cantidad final es
        <strong>${listaDeSuper.length} productos</strong>.
    </div>
`;
