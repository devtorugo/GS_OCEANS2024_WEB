import React from 'react';
import './styles.css';
import Link from 'next/link';

const Doacao = () => {
  return (
    <div className="doacao-container">
      <img src="/tataruga.webp" alt="Imagem representativa" className="doacao-image" />
      <div className="doacao-content">
        <h1 className="doacao-title">Ajude a preservar os oceanos!</h1>
        <p className="doacao-text">
          Os oceanos são fundamentais para a vida na Terra. Eles regulam o clima, fornecem oxigênio, alimentação e são fonte de lazer e inspiração. Ajude as ONGs que trabalham incansavelmente para proteger nossos oceanos e a vida marinha.
        </p>
        <Link href={'/donation'}><button className="doacao-button">Fazer uma doação</button></Link>
      </div>
    </div>
  );
};

export default Doacao;
