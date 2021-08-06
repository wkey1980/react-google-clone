import React from 'react'
import './styles/Navbar.Styles.css'

const Navbar = () => {
	return (
		<div>
			<h3>Navbar Component</h3>
			<nav className="navbar">
				<ul className="navbar__left">
					<li><a href="#">About</a></li>
					<li><a href="#">Store</a></li>
				</ul>

				<ul className="navbar__right">
					<li><a href="#">Gmail</a></li>
					<li><a href="#">Images</a></li>
					<li><a href="#">9dots</a></li>
					<li><a href="#">Sign in</a></li>
				</ul>

			</nav>
		</div>
	)
}

export default Navbar
