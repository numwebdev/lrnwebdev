import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <>
            {/* <!-- Sidebar Holder --> */}
				<nav id="sidebar">
					<div className="sidebar-header">
						<div className="webNam">&lt;&#123; Lrn Web Dev &#125;/&gt;</div>
					</div>

					<ul className="list-unstyled components">
						<li className="active">
							<Link to="/">Home</Link>
						</li>
						<li>
							<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">HTML</a>
							<ul className=" list-unstyled" id="pageSubmenu">
								<li>
									<Link to="/html">All Tags</Link>
								</li>
								<li>
									<a href="#">Audio Tag</a>
								</li>
								<li>
									<a href="#">Video Tag</a>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/css">CSS</Link>
						</li>
						<li>
							<a href="#pageSubmenuJS" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">JS</a>
							<ul className="collapse list-unstyled" id="pageSubmenuJS">
								<li>
									<a href="#">SC</a>
								</li>
								<li>
									<a href="#">AB</a>
								</li>
								<li>
									<a href="#">PG</a>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>


					{/* <ul className="list-unstyled CTAs">
						<li>
							<a>
								Numan
							</a>
						</li>
						<li>
							<a>
								Numan
							</a>
						</li>
					</ul> */}
				</nav>
        </>
    );


}