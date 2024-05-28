import React from 'react';
import './styles.css'; 
import Link from 'next/link';

const Header = () => {
    return (
          <nav className='container'>
             <img src="logo.svg" alt="" className='logo'/>
                <ul>
                    <li>Conservação</li>
                    <li>Sobre nós</li>
                    <Link href={'/contact'}><li>Contato</li></Link>
                    <li>Login</li>
                    <Link href={'/register'}><li><button className='btn'>Cadastrar-se</button></li></Link>
                </ul>
            </nav>
        
    );
}

export default Header;
