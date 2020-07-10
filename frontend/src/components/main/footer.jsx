import React from "react"
import { Link, } from 'react-router-dom'

import AboutUs from './about-us'

class Footer extends React.Component {
    render () {
        return (
            <div id="footer-container">
                {/* <div className=“footer”>
                    <h1 className=“footer-title”>FitBook</h1>
                    <section id=“nav_menu” className=“col”>
                        <div className=“scn”>
                            <p className=“menu”>Menu</p>
                            <ul>
                                <li>
                                <Link to=“/about-us”>Who are we</Link>
                                </li>
                                <li>
                                <Link>Learn more</Link>
                                </li>
                            </ul>
                        </div>
                    </section> */}
                <footer>Copyright &copy; 2020 Fitbook</footer>
                {/* </div> */}
            </div>
        )
    };
};

export default Footer;