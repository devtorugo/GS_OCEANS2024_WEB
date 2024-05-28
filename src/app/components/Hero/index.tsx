import React from 'react';
import './styles.css'; 
import Link from 'next/link';

const Hero = () => {
    return (
          <div className='hero cntainer'>
           <div className='texto-hero'>
                <h1>Animais marinhos ameaçados de extinção</h1>
                <p>Nosso objetivo é ajudar ONGs a localizar e proteger animais marinhos em risco de extinção, contribuindo para a conservação dos oceanos e ecossistemas marinhos.</p>
                     <Link href={'/animals'}><button className='btn'>Saiba mais</button></Link>
           </div>
          </div>
    );
}

export default Hero;
