import './MainMenu.css';

import Productos from '../Pages/Productos';
import Tienda from '../Pages/Tienda';
import Home from '../Pages/Home';

const MainMenu = () => {
  return (
    <div class="page__menu">
	  <div class="mainMenu__menu">
		 <ul>
		  <li><a href="../">Inicio</a></li>
		  <li><a href="../Productos">Nuestros Productos</a></li>
		  <li><a href="../Tienda">Comprar en línea</a></li>
		</ul>
	  </div>
    </div>
  );
}

export default MainMenu;