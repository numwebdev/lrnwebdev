import React from 'react';
import { Link } from 'react-router-dom';

export default function TagsAttributes() {
    return (
        <>

            <section id="banner">
                <div class="content">

                    <div class="dropdown">
                        <p id="headding">Choose a Tag to learn</p>
                        <button onclick="myFunction()" class="dropbtn">&lt;TAG&gt;</button>
                        <div id="myDropdown" class="dropdown-content">
                            <a href="Tags/Tag - Img.html" target="_Blank">&lt;img&gt;</a>
                            <a href="Tags/Tag - Audio.html" target="_Blank"> &lt;audio&gt;</a>
                            <a href="Tags/Tag - Video.html" target="_Blank">&lt;video&gt;</a>
                            <a href="Tags/Tag - Font.html" target="_Blank">&lt;font&gt;</a>
                            <a href="Tags/Tag - Table.html" target="_Blank">&lt;table&gt;</a>
                            <a href="Tags/Tag - UL.html" target="_Blank">&lt;ul&gt;</a>
                            <a href="Tags/Tag - OL.html" target="_Blank">&lt;ol&gt;</a>
                            <a href="Tags/Tag - Button.html" target="_Blank">&lt;button&gt;</a>
                            <a href="Tags/Tag - Input.html" target="_Blank">&lt;input&gt;</a>
                            <a href="Tags/Tag - Iframe.html" target="_Blank">&lt;iframe&gt;</a>
                        </div>
                    </div>
                    {
                        // function myFunction() {
                        //     document.getElementById("myDropdown").classList.toggle("show");
                        // }

                        // window.onclick = function(event) {
                        //     if (!event.target.matches('.dropbtn')) {
                        //         let dropdowns = document.getElementsByClassName("dropdown-content");
                        //         for (var i = 0; i < dropdowns.length; i++) {
                        //             var openDropdown = dropdowns[i];
                        //             if (openDropdown.classList.contains('show')) {
                        //                 openDropdown.classList.remove('show');
                        //             }
                        //         }
                        //     }
                        // }
                    }
                </div>
            </section>

            <section>
                <center><u><h1 id="topic">&ltimg Tag:</h1></u></center>
                <div class="posts">
                    <article>
                        <div id="bs">

                            <h2 id="h1"> Img Tag </h2>
                            <p id="td">&ltimg> Tag is use to insert an Image,jpg,gif,bmp,jpeg,png files in a Webpage.<br />Img tag is an Empty Tag. </p>

                            <h2 id="h2"> Img Tag - Attributes </h2>
                            <ul type="square">
                                <li> <p id="td"> <e>src: </e> value:" <n>url</n>"<br /> src attribute is use to define the URL or Location of an image file.</p> </li>
                                <li> <p id="td"> <e>alt: </e> value:" <n>learnHTML</n>"<br /> alt attribute is use to define an alternate text for an image file.</p></li>
                                <li> <p id="td"> <e>align: </e> value:" <n>Left,Right,Top,Bottom,Center</n>"<br /> align attribute is use to define an alignment of an image file.</p></li>
                                <li> <p id="td"> <e>width: </e> value:" <n>Percentage or Pixel</n>"<br /> width attribute is use to define the width of an image file.</p></li>
                                <li><p id="td"> <e>height: </e> value:" <n>Percentage or Pixel</n>"<br /> height attribute is use to define the height of an image file.</p></li>
                                <li><p id="td"> <e>border: </e> value:" <n>Pixel</n>"<br /> border attribute is use to difine the border of an image file.</p></li>
                            </ul>
                        </div>
                    </article>

                    <article>

                        <h2 id="h2"> Img Tag - Example </h2>
                        {/* <pre id="code">
                                                                        &lthtml>
                                                                        &lthead>
                                                                        &lttitle> Img Tag &lt/title>
                                                                        &lt/head>
                                                                        &ltBody>
&ltimg src="N.jpg" alt="LearnHTMLnJS" align="right" <br> width="35%" height="120px" border="2px">
                                                                        &lt/Body>
&lt/Html></pre> */}
                        <center>
                            <hr width="40%" />
                        </center>
                        <h3>Output</h3>
                        <img src="images/N.jpg" alt="LearnHtml" align="right" width="35%" height="120px" border="2px" />


                    </article>
                </div>
            </section>

            <section>
                <center><u><h1 id="topic">&lt!--comment--> Tag:</h1></u></center>
                <div class="posts">
                    <article>
                        <div id="bs">

                            <h2 id="h1"> Comment Tag </h2>
                            <p id="td">&lt!--comment--&gt; Tag is use to comment a line in a Webpage.<br /></p>

                            <h2 id="h2"> Comment Tag - Attributes </h2>
                            <p id="td">
                                <e>Comment Tag dont have any Attributes </e>
                            </p>
                        </div>
                    </article>
                    <article>

                        <h2 id="h2"> Comment Tag - Example </h2>
                        {/* <pre id="code">
                                        &lthtml>
                                        &lthead>
                                        &lttitle> Img Tag &lt/title>
                                        &lt/head>
                                        &ltBody>
                                        &lt!--This is a comment-->
                                        &ltp> LearnHTML n JS &lt/p>
                                        &lt/Body>
&lt/Html></pre> */}
                        <center>
                            <hr width="40%" />
                        </center>
                        <h3>Output</h3>
                        <p> LearnHTML n JS </p> <br />
                    </article>
                </div>
            </section>
            <article>
                <ul class="actions">
                    <li><a href="HTML3.html" id="button_big" class="button">Next Topic</a></li>
                </ul>
            </article>

        </>
    );
}