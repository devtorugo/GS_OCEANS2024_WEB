import React from 'react';
import './styles.css';

const Login = () => {
    return (
        <div className='login-container'>
            <div className='login-form'>
                <h3>Entre na sua conta</h3>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type='email' name="email" placeholder='Digite seu email' />
                    </div>

                    <div className="form-group">
                        <label>Senha</label>
                        <input type='password' name="password" placeholder='Digite sua senha' />
                    </div>
 
                    <button type='submit' className='btn'>Entrar</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;
