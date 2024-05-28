import React from 'react';
import './styles.css';
 
const Register = () => {
    return (
        <div className='register'>
            <div className='register-col'>
                <h3>Crie sua conta</h3>
                <form>
                    <label>Nome</label>
                    <input type='text' name="firstName" placeholder='Digite seu nome' />
 
                    <label>Sobrenome</label>
                    <input type='text' name="lastName" placeholder='Digite seu sobrenome' />
 
                    <label>Causa Social</label>
                    <input type='text' name="socialCause" placeholder='Digite sua causa social' />
 
                    <label>Senha</label>
                    <input type='password' name="password" placeholder='Digite sua senha' />
 
                    <button  type='submit' className='btn'>Criar conta</button>
                </form>
            </div>
        </div>
    );
}
 
export default Register;