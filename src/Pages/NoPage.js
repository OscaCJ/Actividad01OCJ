import LogoNoEncontrado from "../Assets/pageNotFound.jpg";

const NoPage = () => {
    return (
      <div>
        <h1>Página no encontrada</h1>;
        <img src={LogoNoEncontrado} alt="LogoNoEncontrado" className=""/>
      </div>
    );
  };
  
  export default NoPage;
  