import CapLogo from "../component_img/traditional food (2).png"
import "../component_individual_styles/landingpage.css"
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'

const LandingPage = () => {

    useEffect(() => {
        let start = document.querySelector('#brandName');
        let movementX = 10;
        function swing(element) {

            function update(time) {

                const x = Math.sin(time / 1231) * movementX;
                const y = Math.sin(time / 1458) * movementX;

                element.style.transform = [
                    `rotateX(${x}deg)`,
                    `rotateY(${y}deg)`
                ].join(' ');

                requestAnimationFrame(update);
            }
            update(0);
        }
        swing(start);

        let start_button = start.querySelector('a');

        start.addEventListener('mouseover', (event) => {
            movementX = 20;  
        });

        start.addEventListener('mouseout', (event) => {
            movementX = 10;
        });
    }, []);


    return ( 
        <>
        <section className="brandBody">
            <div id="brandName"><img src={CapLogo}></img>
                <Link to="/mainMenu"><a>PRESS START</a></Link>
            </div>
        </section>
        </>
    );
}
 
export default LandingPage;