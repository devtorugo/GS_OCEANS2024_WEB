import React from 'react';
import './styles.css'; 

const Hero = () => {
    return (
          <div className='hero cntainer'>
           <div className='texto-hero'>
                <h1>Animais marinhos ameaçados de extinção</h1>
                <p>Temos como objetivo ajudar Ongs a encontrar animais marinhos que estão em risco
                     de extinção e ajudar a localizalos para poder evitar essa causa</p>
                     <button className='btn'>Saiba mais</button>
           </div>
          </div>
    );
}

export default Hero;
