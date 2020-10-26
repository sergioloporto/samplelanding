import React from 'react';

export default function Carousel(props) {
    
    return(
        <>
        {
            props.slider.map((text, index) => {
                return(
                    <div className='carousel-container'>
                        <div style={{textAlign: "center"}} key={index+1}>
                            <h2 className='carouset-heading'>{text.heading}</h2>
                            <p className='carousel-para'>
                            {text.para}
                            </p>
                            {
                                text.image &&
                                <img src={text.image} alt='Wordpress' width={30} height={30} />
                            }
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}