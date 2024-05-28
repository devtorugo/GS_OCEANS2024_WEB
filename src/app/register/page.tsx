import React from 'react';
import './styles.css';

const Register = () => {
    return (
        <div className='register'>
            <div className='register-col'>
                <form>
                    
                    <div className="form-group">
                        <label>Nome</label>
                        <input type='text' name="firstName" placeholder='Digite seu nome' />
                    </div>

                    <div className="form-group">
                        <label>Sobrenome</label>
                        <input type='text' name="lastName" placeholder='Digite seu sobrenome' />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type='text' name="email" placeholder='Digite seu email' />
                    </div>

                    <div className="form-group">
                        <label>Causa Social</label>
                        <input type='text' name="socialCause" placeholder='Digite sua causa social' />
                    </div>

                    <div className="form-group">
                        <label>Senha</label>
                        <input type='password' name="password" placeholder='Digite sua senha' />
                    </div>

                    <button type='submit' className='btn'>Criar conta</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
