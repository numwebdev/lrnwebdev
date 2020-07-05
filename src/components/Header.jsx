import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<>
			{/* Header */}
			<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
				<div className="container-fluid">

					<button type="button" id="sidebarCollapse" className="navbar-btn">
						<span></span>
						<span></span>
						<span></span>
					</button>

					<div className="webNam">&lt;&#123; Lrn Web Dev &#125;/&gt;</div>

					<button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<i className="fa fa-bars fa-align-justify"></i>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="nav navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="nav-link" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/html">HTML</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/css">CSS</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/js">JavaScript</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}