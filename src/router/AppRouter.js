import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Productos from '../Pages/Productos';
import Tienda from '../Pages/Tienda';
import NoPage from '../Pages/NoPage';
import Home from '../Pages/Home';

const AppRouter = () =>{
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route exact path="/" 
						element={ <Home/> } />
					<Route exact path="/Productos/" 
						element={ <Productos/> } />
					<Route exact path="/Tienda/" 
						element={ <Tienda/> } />
					<Route exact path="*" 
						element={ <NoPage/> } />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default AppRouter;