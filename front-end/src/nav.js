import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {

	render(){
		return (
			<nav className="navbar is-info" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<div className="navbar-item nav-brand">
						Emotional Flash
					</div>
				</div>

				<div className="navbar-menu">
					<div className="navbar-end">
						<div class="navbar-item">
								<NavLink exact className="nav-link"activeClassName='active' to="/">
									Home
								</NavLink>
						</div>
						<div class="navbar-item">
							<NavLink className="nav-link" activeClassName='active' to="/Login">
								  Login
							</NavLink>
						</div>
					</div>
				</div>

			</nav>
		)
	}

}