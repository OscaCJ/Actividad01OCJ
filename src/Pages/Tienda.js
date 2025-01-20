import React, { useState } from "react";
import "./Tienda.css";

const tiposProducto = [
  { id: 1, nombre: "Pan salado" },
  { id: 2, nombre: "Pan dulce" },
  { id: 3, nombre: "Repostería" },
];

const productos = [
  { id: 1,	idTipo: 1,	nombre: "Baguette",				precio: 50 },
  { id: 2,	idTipo: 1,	nombre: "Ciabatta",				precio: 10 },
  { id: 3,	idTipo: 1,	nombre: "Bolillo",				precio: 5 },
  { id: 4,	idTipo: 1,	nombre: "Telera",				precio: 5 },
  { id: 5,	idTipo: 1,	nombre: "Cemita",				precio: 10 },
  { id: 6,	idTipo: 1,	nombre: "Pan de caja",			precio: 50 },
  { id: 7,	idTipo: 2,	nombre: "Croissant",			precio: 15 },
  { id: 8,	idTipo: 2,	nombre: "Concha vainilla",		precio: 15 },
  { id: 9,	idTipo: 2,	nombre: "Concha chocolate",		precio: 15 },
  { id: 10,	idTipo: 2,	nombre: "Cuernitos",			precio: 10 },
  { id: 11,	idTipo: 2,	nombre: "Orejitas",				precio: 10 },
  { id: 12,	idTipo: 2,	nombre: "Besos",				precio: 15 },
  { id: 13,	idTipo: 2,	nombre: "Bisquet",				precio: 10 },
  { id: 14,	idTipo: 2,	nombre: "Rol de canela",		precio: 20 },
  { id: 15,	idTipo: 3,	nombre: "Panqué de elote",		precio: 50 },
  { id: 16,	idTipo: 3,	nombre: "Panqué de chocolate",	precio: 60 },
  { id: 17,	idTipo: 3,	nombre: "Panqué de nuez",		precio: 50 },
  { id: 18,	idTipo: 3,	nombre: "Panqué de vainilla",	precio: 50 },
  { id: 19,	idTipo: 3,	nombre: "Panque de naranja",	precio: 50 },
  { id: 20,	idTipo: 3,	nombre: "Strudel de Manzana",	precio: 70 },

];

const Tienda = () => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState(null);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [compra, setCompra] = useState([]);

  const handleAddToCart = () => {
    if (productoSeleccionado && cantidad > 0) {
      const articulo = productos.find((a) => a.id === productoSeleccionado);
      const total = articulo.precio * cantidad;

      setCompra((prevCompra) => [
        ...prevCompra,
        { ...articulo, cantidad, total },
      ]);
    }
  };

  const totalCompra = compra.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="tienda">
      <header>
        <h1>Seleccioné sus productos</h1>
      </header>
      <main>
        <section className="tienda__combo">
          <h3>Tipo de producto</h3>
          <select
            onChange={(e) => setTipoSeleccionado(Number(e.target.value))}
            value={tipoSeleccionado || ""}
          >
            <option value="" disabled>Seleccioné el tipo de producto</option>
            {tiposProducto.map((tipoProducto) => (
              <option key={tipoProducto.id} value={tipoProducto.id}>
                {tipoProducto.nombre}
              </option>
            ))}
          </select>
        </section>

        {tipoSeleccionado && (
          <section className="tienda__combo">
            <h3>Productos disponibles</h3>
            <select 
				onChange={(e) => setProductoSeleccionado(Number(e.target.value))}
				value={productoSeleccionado || ""}
            >
              <option value="" disabled>Seleccioné un producto</option>
              {productos
					.filter((art) => art.idTipo === tipoSeleccionado)
					.map((articulo) => (
                  <option key={articulo.id} value={articulo.id}>
                    {articulo.nombre}
                  </option>
                ))}
            </select>
          </section>
        )}

        {productoSeleccionado && (
          <section className="tienda__configuracion">
          <div>
            <label>
              Cantidad:
              <input
                type="number"
                min="1"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
              />
            </label>
            <button onClick={handleAddToCart} className="btn-add">
              Agregar al Carrito
            </button>
          </div>
        </section>
        )}

        {compra.length > 0 && (
          <section className="tienda__carrito">
            <h3>Resumen de la compra</h3>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio unitario</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {compra.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nombre}</td>
                    <td>{item.cantidad}</td>
                    <td>${item.precio}.00</td>
                    <td>${item.total}.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="total">Total a pagar: ${totalCompra}.00 </h3>
          </section>
        )}
      </main>
    </div>
  );
};

export default Tienda;