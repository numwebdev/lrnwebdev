import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

	// components
import Header from './components/Header';
import SideBar from './components/SideBar';
import HomeContent from './components/content/HomeContent';
import AboutContent from './components/content/AboutContent';
import Html from './components/content/html/Html';
import HtmlTags from './components/content/html/HtmlTags';
import Css from './components/content/css/Css';
import Js from './components/content/js/Js';

export default function App() {
	return (
		<>
			<Router>
			
			<div className="wrapper">
				
				{/* SideBar */}
				<SideBar />

				{/* <!-- Page Content Holder --> */}
				<div id="content">

					{/* Header */}
					<Header />

					<div>
							<div className="jumbotron p-3 bg-transparent shadow">
								<Switch>
									<Route exact path='/' component={HomeContent} />
									<Route path='/about' component={AboutContent} />

									<Route path='/html' component={Html} />
									<Route path='/htmltags' component={HtmlTags} />
									<Route path='/css' component={Css} />
									<Route path='/js' component={Js} />
								</Switch>
							</div>
					</div>
				</div>
			</div>
			</Router>

		</>
	);
}