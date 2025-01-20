import Logo2 from '../Assets/Logo2.png';
import '../Componentes/MainHeader.css';

const MainHeader = () => {
  return (
    <div class="page-header-main">
        <header class="mainHeader">
		      <img src={Logo2} alt="LogoHDV" />
      </header>
    </div>
  );
}

export default MainHeader;