import React from 'react';
import { Link } from 'react-router-dom';

export default function Html() {
    return (
        <>
            <div>
                <div id="wrapper">
                    <div id="main">
                        <div class="inner">
                            <section id="banner">
                                <div class="content">

                                    <h4 id="topic">Introduction:</h4>
                                    <p id="intro">HTML is a Markup Language that Web Browser interpret into Web Pages.</p>
                                    <ul id="intro" type="square">
                                        <li>HTML is not a Programming Language,It is a Markup Language.</li>
                                        <li>HTML is case insensitive Language.</li>
                                        <li>HTML use Tags to create Web Pages.</li>
                                        <li>HTML is devloped by World Wide Web Consortium.</li>
                                        <li>We are Currently using HTML5.</li>
                                    </ul>
                                    <Link to="/htmltags" className="my_Btns shadow mt-2 ml-5">More</Link>
                                </div>
                            </section>
                            <hr />

                            {/* <!-- Section --> */}
                            <section>
                                <div class="posts">
                                    <div className="row">
                                        <article className="col-lg-6">
                                            <h4 id="topic">HTML Basic Structure:</h4>
                                            <div className="basicHtmlCode ml-lg-5 ml-sm-0 shadow">
                                                <pre className="text-secondary">{`
    <html>
        <head>
            <title>
                LrnWebDev
            </title>
        </head>
        <body>
            <TAGS />
        </body>
    </html>
                                            `}</pre>
                                            </div>
                                            <div className="ml-4">
                                                <a href="Editor - HTML1.html" target="_Blank" className="my_Btns">Try It</a>
                                            </div>
                                        </article>
                                        <article className="col-lg-6 mt-4 mt-lg-0">
                                            <h4 id="topic">Syntax of HTML Tag, Attribute & Value</h4>
                                            <br />
                                            <img className="card-img shadow" src={process.env.PUBLIC_URL + "/images/Element.jpg"} alt="lrnwebdev" />
                                            <br />
                                            <div className="mt-4">
                                                <Link to="/htmltags" className="my_Btns mt-2 ml-5">Learn Tags & Attributes</Link>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <article>

                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}