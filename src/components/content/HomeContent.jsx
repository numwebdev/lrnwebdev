import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <>
            <div>
                <div align="center">
                    {/* HTML Section */}
                    <section id="banner">
                        <div class="content mt-lg-5">
                            <header>
                                <h1 id="topic">HTML</h1>
                                <p>HTML is use to built Websites</p>
                            </header>
                            <p>
                                With HTML you can create structure of the webpages.
                                In this Website you can Learn everything about HTML.
                                HTML is easy to learn - You will enjoy it.
						    </p>
                            <Link to="/html" class="my_Btns shadow">Learn HTML</Link>
                        </div>
                        <span class="image object">
                            <img className="shadow" src="https://mdnmnahmed.github.io/learnhtmlnjs/assets/images/P-HTML.gif" alt="lrnwebdev_html" />
                        </span>
                    </section>
                    <br />
                    <section>
                        <div className="posts">
                            <div className="row">
                                <div className="col">
                                    <article>
                                        <div className="container">
                                            <div class="card bg-transparent shadow rounded-1" align="left">
                                                <img class="card-img-top" src="https://mdnmnahmed.github.io/learnhtmlnjs/assets/images/P-CSS.gif" alt="lrnwebdev" />
                                                <div class="card-body">
                                                    <h3 id="topic" className="text-center"><u>CSS</u></h3>
                                                    <p>
                                                        CSS is a stylesheet language, that is use to define how to display HTML Elements of a Webpage. <br />
                                                        CSS saves a lot of work. It can control the layout of multiple web pages all at once.
                                                    </p>
                                                    <div align="center">
                                                        <Link to="/css" className="my_Btns shadow">Learn CSS</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col">
                                    <article>
                                        <div className="container mt-3 mt-lg-0">
                                            <div class="card bg-transparent shadow" align="left">
                                                <img class="card-img-top" src="https://mdnmnahmed.github.io/learnhtmlnjs/assets/images/P-JS.gif" alt="lrnwebdev" />
                                                <div class="card-body">
                                                    <h3 id="topic" className="text-center"><u>JavaScript</u></h3>
                                                    <p>JavaScript is a High level interpreted Programming Language. After releasing NodeJS we can use JavaScript in both side Client side and Server Side.</p>
                                                    <Link to="/js" className="my_Btns">Learn JavaScript</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    {/* <article>
                                        <a href="assets\JS1.html" className="image"><img src="assets/images/P-JS.gif" alt="" /></a>
                                        <h3 id="topic">JavaScript</h3>
                                        <p>JavaScript is a High level interpreted Programming Language.</p>
                                        <ul className="actions">
                                            <li><a href="assets\JS1.html" id="button_big" className="button">Learn JavaScript</a></li>
                                        </ul>
                                    </article> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}