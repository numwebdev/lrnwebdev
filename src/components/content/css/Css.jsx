import React from 'react';

export default function Css() {
    return (
        <>
            <div align="center">
                <div class="card bg-transparent shadow rounded-1">
                    <img class="card-img-top" src={process.env.PUBLIC_URL + "/images/css.gif"} alt="lrnwebdev" />
                    <div class="card-body">
                        <h3 id="topic" className="text-center"><u>CSS</u></h3>
                        <p>
                            CSS is a stylesheet language, that is use to define how to display HTML Elements of a Webpage. <br />
                            CSS saves a lot of work. It can control the layout of multiple web pages all at once.
                        </p>
                        <div align="center">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}