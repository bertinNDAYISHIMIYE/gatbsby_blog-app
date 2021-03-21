import React, { useState } from 'react';
import { Link } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
	const [ open, setOpen ] = useState(false);
	console.log('----->', open);
	return (
		<nav>
			{open ? (
				<div className="main-mobile">
					<div className="nav-menu">
						{' '}
						<Link to="/">Blogs</Link>
						<Link to="/about">About</Link>
						<Link to="/contact">Contact</Link>
					</div>
					<div
						className="nav-close"
						onClick={() => {
							setOpen(!open);
						}}
					>
						close
					</div>
				</div>
			) : null}

			<GiHamburgerMenu
				onClick={() => {
					setOpen(!open);
				}}
			/>
			<h1>
				<Link to="/">BerryBlogs</Link>
			</h1>
			<div className="links">
				<Link to="/">Blogs</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</nav>
	);
}
