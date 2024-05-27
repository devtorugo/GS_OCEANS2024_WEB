import React from 'react';
import './styles.css'; 

const Header = () => {
    return (
          <nav className='container'>
             <img src="logo.svg" alt="" className='logo'/>
                <ul>
                    <li>Conservação</li>
                    <li>Sobre nós</li>
                    <li>Contato</li>
                    <li>Login</li>
                    <li><button className='btn'>Cadastrar-se</button></li>
                </ul>
            </nav>
        
    );
}

export default Header;
