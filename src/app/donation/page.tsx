import React from 'react';
import './styles.css';

const DonationPage = () => {
    return (
        <div className='donation-page'>
            <div className='donation-container'>
                <div className='donation-description'>
                    <h3>Faça sua Doação e Ajude a Preservar os Oceanos</h3>
                    <p>Sua generosa doação fará uma diferença significativa na preservação dos oceanos e no apoio às organizações não governamentais (ONGs) dedicadas a essa causa vital. Com seu apoio, podemos realizar diversas ações, incluindo:</p>
                    <ul>
                        <li>Financiar projetos de limpeza costeira e submarina;</li>
                        <li>Realizar pesquisas científicas para entender melhor os ecossistemas marinhos;</li>
                        <li>Apoiar programas de conservação de espécies marinhas ameaçadas;</li>
                        <li>Educar e conscientizar comunidades locais e globais sobre a importância da preservação dos oceanos.</li>
                    </ul>
                    <p>Sua contribuição é essencial para proteger nosso planeta e garantir um futuro sustentável para as gerações futuras. Junte-se a nós nessa missão vital hoje!</p>
                </div>
                <div className='donation-form'>
                    <form>
                        <h3>Faça sua Doação</h3>
                        <label>Nome</label>
                        <input type='text' name="name" placeholder='Digite seu nome' />
    
                        <label>CPF</label>
                        <input type='text' name="cpf" placeholder='Digite seu CPF' />

                        <label>CEP</label>
                        <input type='text' name="cep" placeholder='Digite seu CEP' />
    
    
                        <label>Valor da Doação (R$)</label>
                        <input type='number' name="amount" placeholder='Digite o valor da doação' />
    
                        <label>Descrição</label>
                        <textarea name="description" placeholder='Descreva o motivo da sua doação'></textarea>
    
                        <button type='submit' className='btn'>Doar Agora</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DonationPage;
