
// // alert("enalazado");

 let productos = [];

// Capturamos el formulario y agregamos el evento "submit"
const form = document.getElementById('product-form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitamos que la página se recargue al enviar el formulario

  // Capturamos los valores ingresados en los inputs y select
  const nombre = document.getElementById('name').value;
  const precio = document.getElementById('price').value;
  const cantidad = document.getElementById('cantidad').value;
  const categoria = document.getElementById('categoria').value;

  // Creamos un objeto con los datos del producto
  const producto = {
    nombre,
    precio,
    cantidad,
    categoria
  };

  // Agregamos el objeto producto al array de productos
  productos.push(producto);

  // Renderizamos la tabla con los datos de los productos
  adicionarTabla(productos);

  // Limpiamos los valores de los inputs
  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('cantidad').value = '';
  document.getElementById('categoria').value = '';
});

// Función para renderizar la tabla con los datos del array de productos
function adicionarTabla(productos) {
  // Capturamos el tbody de la tabla
  const tbody = document.querySelector('#product-table tbody');

  // Vaciamos el contenido del tbody
  tbody.innerHTML = '';

  // Recorremos el array de productos y por cada producto creamos una fila en la tabla
  productos.forEach((producto, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>${producto.cantidad}</td>
      <td>${producto.categoria}</td>
      <td>
        <button onclick="eliminarProducto(${index})">Eliminar</button>
        <button onclick="editarProducto(${index})">Editar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Imprimimos en la consola los datos del array de productos
  console.log(productos);
}

// Función para eliminar un producto del array y renderizar la tabla de nuevo
function eliminarProducto(index) {
  // Eliminamos el producto del array
  productos.splice(index, 1);

  // Renderizamos la tabla de nuevo
  adicionarTabla(productos);
}

// Función para editar un producto del array y renderizar la tabla de nuevo
function editarProducto(index) {
  // Capturamos el producto a editar
  const producto = productos[index];

  // Llenamos los valores de los inputs con los datos del producto a editar
  document.getElementById('name').value = producto.nombre;
  document.getElementById('price').value = producto.precio;
  document.getElementById('cantidad').value = producto.cantidad;
  document.getElementById('categoria').value = producto.categoria;

  // Eliminamos el producto del array
  productos.splice(index, 1);

  // Renderizamos la tabla de nuevo
  adicionarTabla(productos);
}
