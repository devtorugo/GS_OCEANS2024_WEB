import React from 'react';
import './styles.css';
 
const Login = () => {
    return (
        <div className='login'>
            <div className='login-col'>
                <h3>Entre na sua conta</h3>
                <form>
                    <label>Email</label>
                    <input type='email' name="email" placeholder='Digite seu email' />
 
                    <label>Senha</label>
                    <input type='password' name="password" placeholder='Digite sua senha' />
 
                    <button type='submit' className='btn'>Entrar</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;