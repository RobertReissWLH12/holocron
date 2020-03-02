import React, {Component} from 'react';
import './style.css';
import './menu.css';

export default class MobileHamburger extends Component {
    
    // NO STATE!!!

    render() {
        // console.log(this.props)
        return (
            <div class="menu-wrap">
            <input type="checkbox" class="toggler"></input>
            <div class="hamburger"><div></div></div>
            <div class="menu">
                <div>
                    <div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">Archives</a></li>
                            <li><a href="#">Hideout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
   
        <header class="showcase">
            <div class="container showcase-inner">
                <h1>Welcome</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi corporis laboriosam minus quam accusamus est, eligendi vel dignissimos ratione ipsa.</p>
                <a href="#" class="btn">Read More</a>
            </div>
        </header>
        </div>
        )
    }
}
