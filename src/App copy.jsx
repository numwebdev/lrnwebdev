import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';

export default class App extends Component {
    render() {
        return (
            <>
                {/* <!-- Wrapper --> */}
	<div id="wrapper">

		{/* <!-- Main --> */}
		<div id="main">
			<div class="inner">

				{/* <!-- Header --> */}
				<header id="header">
					<a href="index.html" class="logo"><strong>Learn HTMLnJS</strong></a>
				</header>

				{/* <!-- Banner --> */}
				<section id="banner">
					<div class="content">
						<header>
							<h1 id="topic">HTML</h1>
							<p>HTML is use to built Websites</p>
						</header>
						<p>With HTML you can create webpages.
							In this Website you can Learn everything about HTML.
							HTML is easy to learn - You will enjoy it.
						</p>
						<ul class="actions">
							<li><a href="assets\HTML1.html" id="button_big" class="button big">Learn HTML</a></li>
						</ul>
					</div>
					<span class="image object">
						<img src="assets/images/P-HTML.gif" alt="" />
					</span>
				</section>

				{/* <!-- Section --> */}
				<section>
					<header class="major">
						{/* <!--<h2>Ipsum sed dolor</h2>--> */}
					</header>
					<div class="posts">
						<article>
							<a href="assets\CSS1.html" class="image"><img src="assets/images/P-CSS.gif" alt="" /></a>
							<h3 id="topic">CSS</h3>
							<p>CSS is a stylesheet language, that is use to define how to display HTML Elements of a
								Webpage.</p>
							<ul class="actions">
								<li><a href="assets\CSS1.html" id="button_big" class="button">Learn CSS</a></li>
							</ul>
						</article>
						<article>
							<a href="assets\JS1.html" class="image"><img src="assets/images/P-JS.gif" alt="" /></a>
							<h3 id="topic">JavaScript</h3>
							<p>JavaScript is a High level interpreted Programming Language.</p>
							<ul class="actions">
								<li><a href="assets\JS1.html" id="button_big" class="button">Learn JavaScript</a></li>
							</ul>
						</article>
					</div>
				</section>
			</div>
		</div>

		{/* <!-- Sidebar --> */}
		<div id="sidebar">
			<div class="inner">
				{/* <!-- Search --> */}
				{/* <!-- <section id="search" class="alt">
			<form method="post" action="#">
				<input type="text" name="query" id="query" placeholder="Search"/>
			</form>
			</section>  --> */}



				{/* <!-- Menu --> */}
				<nav id="menu">
					<header class="major">
						<h2>Learn HTML n JS</h2>
					</header>
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="assets\HTML1.html">HTML</a></li>
						<li><a href="assets\JS1.html">JavaScript</a></li>
						<li>
							<span class="opener">More</span>
							<ul>
								<li><a href="assets\HTML1.html">HTML</a></li>
								<li><a href="assets\CSS1.html">CSS</a></li>
								<li><a href="assets\JS1.html">JavaScript</a></li>
							</ul>
						</li>
						<li><a href="assets\About.html">About</a></li>
					</ul>
				</nav>

				{/* <!-- Section --> */}
				<section>
					<header class="major">
						<h2>HTML</h2>
					</header>
					<div class="mini-posts">
						<article>
							<a href="assets\HTML1.html" class="image"><img src="assets/images/B-HTML.jpg" alt="" /></a>
							<p>Learn & Enjoy HTML</p>
						</article>

						<header class="major">
							<h2>CSS</h2>
						</header>
						<div class="mini-posts">
							<article>
								<a href="assets\CSS1.html" class="image"><img src="assets/images/P-CSS.gif"
										alt="" /></a>
								<p>Learn & Enjoy CSS</p>
							</article>
						</div>

						<header class="major">
							<h2>JavaScript</h2>
						</header>
						<div class="mini-posts">
							<article>
								<a href="assets\JS - Examples1.html" class="image"><img src="assets/images/B-JS.jpg"
										alt="" /></a>
								<p>Learn & Enjoy JavaScript</p>
							</article>
						</div>
					</div>
				</section>

				{/* <!-- Section --> */}
				<section>
					<header class="major">
						<h2> </h2>
					</header>
					<p> </p>
					<ul class="contact">
						<li class="fa-envelope-o"><a href="#">mdnmnahmed@gmail.com</a></li>
						<li class="fa-phone">+91 9967289433</li>
						<li class="fa-home">Kokata, WB, INDIA</li>
					</ul>
				</section>
				<br />
				<br />
				<br />
				{/* <!-- Footer --> */}
				<footer id="footer">
					<p class="copyright">
                        Welcome to Learn HTML n JS.<br /> You can Easily Learn
						<a href="assets\HTML1.html">HTML</a>
						<a href="assets\CSS1.html">CSS</a>
						<a href="assets\JS1.html">JavaScript</a>
					</p>
				</footer>
			</div>
		</div>
	</div>
            </>
        );
    }
}