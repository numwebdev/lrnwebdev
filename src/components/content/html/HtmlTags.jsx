import React from 'react';
// import { Link } from 'react-router-dom';

export default function TagsAttributes() {
    return (
        <>



            <div id="main">
                <div class="inner">
                    {/* <!-- Banner --> */}
                    <section id="banner">
                        <div class="content">
                            <h3 id="topic" align="center"><u>Tags & Attributes</u></h3>
                            {/* <div class="dropdown">
                                <p id="headding">Choose Tag</p>
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
                            </div> */}
                        </div>
                    </section>
                    {/* <!-- Section --> */}
                    <section>
                        <div class="posts">
                            <article>
                                <h3 id="topic">Popular Tags:</h3>
                                <div align="center">

                                    <table className="tags-table table table-striped table-hover table-responsive-sm table-center text-center ml-0 pl-0" align="center">
                                        <thead>
                                            <tr className="bg-dark text-white">
                                                <th> Tags Name </th>
                                                <th> Attributes </th>
                                                <th> Uses </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>&lt;img&gt; </td>
                                                <td><a className="btn shadow" href="Tags/Tag - Img.html" target="_Blank">src, alt, align... <span className="pl-2 fa fa-external-link text-primary"></span></a> </td>
                                                <td>use to Insert an Image in a webpage.</td>
                                            </tr>
                                            <tr>
                                                <td>&lt;!--Comment--&gt;</td>
                                                <td> -</td>
                                                <td>use to write a Comment</td>
                                            </tr>
                                            <tr>
                                                <td> &lt;b&gt;</td>
                                                <td> -</td>
                                                <td> use break the line.</td>
                                            </tr>
                                            <tr>
                                                <td>&lt&gt;H1&gt to &lt&gt;H6&gt</td>
                                                <td>align</td>
                                                <td>use to define HTML Heading. </td>
                                            </tr>
                                            <tr>
                                                <td>&lt;p&gt; </td>
                                                <td>align </td>
                                                <td>use to write Paragraphs. </td>
                                            </tr>
                                            <tr>
                                                <td> &lt;a&gt; </td>
                                                <td> href </td>
                                                <td> Anchor tag is use to link one Page to another. </td>
                                            </tr>
                                            <tr>
                                                <td>&lt;b&gt; </td>
                                                <td> - </td>
                                                <td> use to display Txt's in Bold. </td>
                                            </tr>
                                            <tr>
                                                <td>&lt;i&gt; </td>
                                                <td> - </td>
                                                <td> use to display Txt's in Italic. </td>
                                            </tr>
                                            <tr>
                                                <td>&lt;u&gt; </td>
                                                <td> - </td>
                                                <td>use to underline the txt. </td>
                                            </tr>
                                            <tr>
                                                <td>&lt;font&gt; </td>
                                                <td><a className="btn shadow" href="Tags/Tag - Font.html" target="_Blank">color,face,size <span className="pl-2 fa fa-external-link text-primary"></span></a></td>
                                                <td>use to define the font face, font size, and color of text. </td>
                                            </tr>
                                            <tr>
                                                <td>&lt;table&gt; </td>
                                                <td><a className="btn shadow" href="Tags/Tag - Table.html" target="_Blank">align,border... <span className="pl-2 fa fa-external-link text-primary"></span></a> </td>
                                                <td> use to create Table in a Webpage. </td>
                                            </tr>
                                            <tr>
                                                <td>&lt;tr&gt; </td>
                                                <td> - </td>
                                                <td> use to define Table Rows. </td>
                                            </tr>
                                            <tr>
                                                <td>&lt;th&gt; </td>
                                                <td><a className="btn shadow" href="Tags/Tag - Table.html" target="_Blank"> align,valign... <span className="pl-2 fa fa-external-link text-primary"></span></a> </td>
                                                <td> use to define Table Headding. </td>
                                            </tr>
                                            <tr>
                                                <td>&lt;td&gt; </td>
                                                <td><a className="btn shadow" href="Tags/Tag - Table.html" target="_Blank"> align,valign... <span className="pl-2 fa fa-external-link text-primary"></span></a> </td>
                                                <td> use to define Table Data. </td>
                                            </tr>
                                            <tr>
                                                <td> &lt;ul&gt; </td>
                                                <td><a className="btn shadow" href="Tags/Tag - UL.html" target="_Blank"> type  <span className="pl-2 fa fa-external-link text-primary"></span></a> </td>
                                                <td> use to define Unorder List. </td>
                                            </tr>
                                            <tr>
                                                <td> &lt;ol&gt; </td>
                                                <td> <a className="btn shadow" href="Tags/Tag - OL.html" target="_Blank"> type  <span className="pl-2 fa fa-external-link text-primary"></span></a> </td>
                                                <td> use to define Order List. </td>
                                            </tr>
                                            <tr>
                                                <td> &lt;dl&gt; </td>
                                                <td> - </td>
                                                <td> use to define description List. </td>
                                            </tr>
                                            <tr>
                                                <td> &lt;sub&gt; </td>
                                                <td> - </td>
                                                <td> use to define Subscripted txt </td>
                                            </tr>
                                            <tr>
                                                <td> &lt;sup&gt; </td>
                                                <td> - </td>
                                                <td> use to define Superscripted txt </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </article>
                            <br />
                            <br />
                            <br />

                            <article>
                                <h3 id="topic">Advanced Tags (HTML 5): </h3>

                                <table className="tags-table table table-striped table-hover table-responsive-sm table-center text-center">
                                    <thead>
                                        <tr className="bg-dark text-white">
                                            <th> Tags Name </th>
                                            <th> Attributes </th>
                                            <th> Uses </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>&lt;!DOCTYPE html&gt; </td>
                                            <td> - </td>
                                            <td> Use to define Document type(HTML5). </td>
                                        </tr>
                                        <tr>
                                            <td> &lt;audio&gt; </td>
                                            <td><a className="btn shadow" href="Tags/Tag - Audio.html" target="_Blank"> loop,muted... <span className="pl-2 fa fa-external-link text-primary"></span></a> </td>
                                            <td>use to insert an Audio File. </td>
                                        </tr>
                                        <tr>
                                            <td> &lt;video&gt; </td>
                                            <td><a className="btn shadow" href="Tags/Tag - Video.html" target="_Blank"> loop,muted...  <span className="pl-2 fa fa-external-link text-primary"></span></a></td>
                                            <td> use to insert a Video File. </td>
                                        </tr>
                                        <tr>
                                            <td> &lt;big&gt; </td>
                                            <td> - </td>
                                            <td> use to define Big Txt. </td>
                                        </tr>
                                        <tr>
                                            <td> &lt;canvas&gt; </td>
                                            <td> height,width </td>
                                            <td>use to draw Graphics(using JavaScript). </td>
                                        </tr>
                                        <tr>
                                            <td> &lt;div&gt; </td>
                                            <td> align </td>
                                            <td> use to define a section in a Webpage. </td>
                                        </tr>
                                        <tr>
                                            <td> &lt;form&gt; </td>
                                            <td> action,method... </td>
                                            <td> use to define a Form for User Input. </td>
                                        </tr>
                                        <tr>
                                            <td> &lt;input&gt; </td>
                                            <td><a className="btn shadow" href="Tags/Tag - Input.html" target="_Blank"> type,name... <span className="pl-2 fa fa-external-link text-primary"></span></a> </td>
                                            <td> use to defines an input control. </td>
                                        </tr>
                                        <tr>
                                            <td>&lt;button&gt; </td>
                                            <td><a className="btn shadow" href="Tags/Tag - Button.html" target="_Blank">name,value... <span className="pl-2 fa fa-external-link text-primary"></span></a> </td>
                                            <td> use to insert a Button in a Webpage. </td>
                                        </tr>
                                        <tr>
                                            <td>&lt;article&gt; </td>
                                            <td> - </td>
                                            <td>use to Defines an article. </td>
                                        </tr>
                                        <tr>
                                            <td>&lt;del&gt; </td>
                                            <td> - </td>
                                            <td> use to defines text that has been deleted from a document. </td>
                                        </tr>
                                        <tr>
                                            <td> &lt;em&gt; </td>
                                            <td> - </td>
                                            <td> use to define Emphasized Text. </td>
                                        </tr>
                                        <tr>
                                            <td> &lt;hr&gt; </td>
                                            <td> width </td>
                                            <td> use to insert Horizontal Line </td>
                                        </tr>
                                        <tr>
                                            <td> &lt;label&gt; </td>
                                            <td> - </td>
                                            <td> use to defines a label for an &lt;inpt&gt; element </td>
                                        </tr>
                                        <tr>
                                            <td>&lt;mark&gt; </td>
                                            <td>- </td>
                                            <td>use to defines marked or highlighted text. </td>
                                        </tr>
                                        <tr>
                                            <td>&lt;option&gt; </td>
                                            <td><a className="btn shadow" href="Tags/Tag - Option.html" target="_Blank">label,selected... <span className="pl-2 fa fa-external-link text-primary"></span></a> </td>
                                            <td>use to define an option in a drop-down list. </td>
                                        </tr>
                                        <tr>
                                            <td>&lt;pre&gt; </td>
                                            <td>- </td>
                                            <td>use to print same txt (preformatted text). </td>
                                        </tr>
                                        <tr>
                                            <td>&lt;iframe&gt; </td>
                                            <td><a className="btn shadow" href="Tags/Tag - Iframe.html" target="_Blank">align,name... <span className="pl-2 fa fa-external-link text-primary"></span></a> </td>
                                            <td>use to define an inline frame. </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </article>
                        </div>
                    </section>
                </div>
            </div>














        </>
    );
}