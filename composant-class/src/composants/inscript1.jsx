import React, { Component } from 'react';
import './Style.css';
import image from './image.png';
import Image from './imgconnec';
class Gauch extends Component{
    render(){
        return(
            <div className=' p-5 rounded-end-5  mx-5  shadow-5  photo'>
                 <Image src={image} alt="Description de l'image" />
            {/* <img src={image} alt="Description de l'image"  />  */}
            </div>
        )
    }
}
export default Gauch