import React from 'react';

export default function Js() {
    return (
        <>
            <div align="center">
                <div className="container mt-3 mt-lg-0">
                    <div class="card bg-transparent shadow" align="left">
                        <img class="card-img-top" src={process.env.PUBLIC_URL + "/images/js.gif"} alt="lrnwebdev" />
                        <div class="card-body">
                            <h3 id="topic" className="text-center"><u>JavaScript</u></h3>
                            <p>JavaScript is a High level interpreted Programming Language. After releasing NodeJS we can use JavaScript in both side Client side and Server Side.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}