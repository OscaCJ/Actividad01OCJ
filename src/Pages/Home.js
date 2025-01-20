import { Link } from "react-router-dom";
import './Home.css';

function Home() {
	return (
		<div id="pagina-info" class="home__contenedor">
			<header class="home__header">
				<h1 class="home__subtitulo">Nuestra Historia</h1>
			</header>
			<div class="home__contenido">
				<p>
					En el corazón de la Ciudad de México, nació un sueño: El hornito del valle.
					Fundada en 2014 por los hermanos Francisco Juamperez Barberena y Pedro J. B., 
					esta panadería artesanal se convirtió rápidamente en un referente de sabor y tradición en la colonia Escuadrón 201, Iztapalapa.
					Nuestro compromiso con la frescura, la calidad y el sabor excepcional nos llevó al éxito.
					Nuestros productos se convirtieron en los favoritos de la zona, impulsando la expansión del negocio.
					Hemos visto crecer familias enteras y hemos sido orgullosamente la fuente de alegría que ha endulzado sus fiestas, 
					celebraciones, cumpleaños, aniversarios, desayunos, comidas familiares, meriendas y muchos momentos más.
				</p>
				<p>
					Hoy en día seguimos un ícono de la calidad en México por nuestros clásicos panques y panadería de alta calidad, 
					innovación continua y servicio excepcional.
					Gracias a ello nos hemos ganado el corazón y preferencia de cada uno de nuestros invitados.
				</p>
			</div>
		</div>
	);
}

export default Home;
