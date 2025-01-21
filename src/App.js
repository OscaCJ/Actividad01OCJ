import React from 'react';
import MainHeader from './Componentes/MainHeader';
import MainMenu from './Componentes/MainMenu';
import AppRouter from './router/AppRouter';
import MainFooter from './Componentes/MainFooter'
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
			<div class="MainApp__Footer">
				<MainFooter/>
			</div>
		</>
	);
};

export default MainApp;