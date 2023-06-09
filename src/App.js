import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<div>
				{/* <NavBar/>
         <News pageSize={5} country="in" category="business"/> */}
				<Router>
					<NavBar />
					{/* <LandingPage /> */}
					<Routes>
						<Route
							exact
							path='/business'
							element={
								<News
									key='business'
									pageSize={7}
									country='in'
									category='business'
								/>
							}
						/>
						<Route
							exact
							path='/entertainment'
							element={
								<News
									key='entertainment'
									pageSize={7}
									country='in'
									category='entertainment'
								/>
							}
						/>
						<Route
							exact
							path='/general'
							element={
								<News
									key='general'
									pageSize={7}
									country='in'
									category='general'
								/>
							}
						/>
						<Route
							exact
							path='/health'
							element={
								<News
									key='health'
									pageSize={7}
									country='in'
									category='health'
								/>
							}
						/>
						<Route
							exact
							path='/science'
							element={
								<News
									key='science'
									pageSize={7}
									country='in'
									category='science'
								/>
							}
						/>
						<Route
							exact
							path='/sports'
							element={
								<News
									key='sports'
									pageSize={7}
									country='in'
									category='sports'
								/>
							}
						/>
						<Route
							exact
							path='/technology'
							element={
								<News
									key='technology'
									pageSize={7}
									country='in'
									category='technology'
								/>
							}
						/>
						<Route exact path='/landingpage' element={<LandingPage />} />
					</Routes>
				</Router>
			</div>
		);
	}
}
