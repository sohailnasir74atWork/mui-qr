import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import image1 from '../../Assets/images/image1.svg';
import image2 from '../../Assets/images/image2.svg';
import image3 from '../../Assets/images/image3.svg';
import image4 from '../../Assets/images/image4.svg';

function ImageSlider() {
    return (
        <div style={{display:'flex', justifyContent:'space-around', paddingBottom:'10px'}}>
            <div style={{display:'flex', height:'60px'}}>
                <img src={image1} alt="Image 1" />
            </div>
            <div style={{display:'flex', height:'60px'}}>
                <img src={image2} alt="Image 2" />
            </div>
            <div style={{display:'flex', height:'60px'}}>
                <img src={image3} alt="Image 3" />
            </div>
            <div style={{display:'flex', height:'60px'}}>
                <img src={image4} alt="Image 4" />
            </div>
            {/* Add more images as needed */}
            </div>
    );
}

export default ImageSlider;
