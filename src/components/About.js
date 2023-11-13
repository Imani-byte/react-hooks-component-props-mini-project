import React from "react";

function About({image, about}){
    const defaultImageSrc = "https://via.placeholder.com/215";
    const imageSource = image || defaultImageSrc;
    return(
        <aside>
            <img src={imageSource} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    );
}
export default About;