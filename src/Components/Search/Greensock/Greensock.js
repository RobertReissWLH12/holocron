import React, { useRef, useEffect } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
import './Greensock.scss';

// ASSETS
import imgR2 from './../../../searchImages/R2&Table_cropped.png'
import imgSaber from './../../../searchImages/lightsaber_searchbar.png'




function Greensock() {
    let app = useRef(null);
    let images = useRef(null);
    // let content = useRef(null);
    let tl = new TimelineLite({delay: .2})

    useEffect(() => {
        // IMAGES VARS
        const r2Image = images.firstElementChild;
        const saberImage = images.lastElementChild;

        // Content vars
        // const headlineFirst = content.children[0].children[0];
        // const headlineSecond = headlineFirst.nextSibling;
        // const headlineThird = headlineSecond.nextSibling;
        // const contentP = content.children[1];
        // const contentButton = content.children[2];


        //Removing the initial flash/flicker when the page loads
        TweenMax.to(app, 0, { css: { visibility: 'visible' } })
        
        //Images Animation
            tl.from(r2Image, 2, {x: -1600, ease: Power3.easeOut}, .7, 'Start')
            // .from(r2Image.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
            tl.from(saberImage, 2, {x: -700, ease: Power3.easeOut}, 1.5)
            .from(saberImage.firstElementChild, 3, {scale: .5, ease: Power3.easeOut}, .7)

            // Content Animation
            // tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
            //     y: 44,
            //     ease: Power3.easeOut,
            //     delay: .8
            // }, .15, 'Start')
            // .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
            // .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

    }, [tl])

    return (
        <div className="hero" ref={el => app = el}>
            <div className="container">
                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-content-inner" 
                        // ref={el => content = el}
                        >
                            <h1>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner"></div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner"></div>
                                </div>
                                <div className="hero-content-line">
                                    <div className="hero-content-line-inner"></div>
                                </div>
                            </h1>
                            {/* <p>Click on the lightsaber beam, enter the book title you are interested in, then click the magnifying glass on the hilt to search for it!</p> */}
                            {/* <div className="btn-row"> */}
                                {/* <button className="explore-button">
                                    <div className="arrow-icon">
                                        <img src={arrow} alt="arrow" />
                                    </div>
                                </button> */}
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="hero-images">
                        <div className="hero-images-inner" ref={el => images = el}>
                            <div className="hero-image R2">
                                <img
                                    src={imgR2}
                                    alt=""
                                />
                            </div>
                            <div className="hero-image saber">
                                <img src={imgSaber} alt="saber" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Greensock;