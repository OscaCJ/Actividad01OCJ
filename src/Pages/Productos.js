import React from 'react';
import Records from '../mocks/productos';
import './Productos.css';

const Productos = () => {
  return (
	<div class="Productos__contenedor">
		<h1>Nuestros productos</h1>		
		<br/><br/>
		{
			Records.map(record => {
				return(
					<div>
						<section class="Productos__producto">
						   <div class="Productos__producto__c1">
							<img class="Imagen__producto" src = {record.imagen}  alt={record.nombre}/>
						   </div>
						   <div class="Productos__producto__c2">
							<p class="producto__nombre">{record.nombre}</p>
							<p class="producto__desc">{record.descripcion}</p>
						   </div>
						</section>
					</div>
				)
			})
		}
	</div>
  );
};

export default Productos;