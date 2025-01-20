import React from 'react';
import MainHeader from './Componentes/MainHeader';
import MainMenu from './Componentes/MainMenu';
import AppRouter from './router/AppRouter';
import './App.css';



const MainApp = () =>{
	return(
		<>
			<div class="MainApp__Header">
				<MainHeader/>
				<MainMenu/>
			</div>
			<div class="MainApp__Header"></div>
      		
			<div class="MainApp__Body">
				<AppRouter/>
			</div>
		</>
	);
};

export default MainApp;