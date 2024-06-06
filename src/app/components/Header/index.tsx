import React from 'react';
import './styles.css'; 
import Link from 'next/link';

const Header = () => {
    return (
          <nav className='container'>
             <img src="logo2.png" alt="" className='logo'/>
                <ul>
                    <li>Conservação</li>
                    <li>Sobre nós</li>
                    <Link href={'/contact'}><li>Contato</li></Link>
                    <Link href={'/login'}><li>Login</li> </Link>
                    <Link href={'/register'}><li><button className='btn'>Cadastrar-se</button></li></Link>
                </ul>
            </nav>
        
    );
}

export default Header;
