
import React, { useState } from 'react';
import './style.css';

const FormularioMensagem = ({ onEnviar }: { onEnviar: (msg: string) => void }) => {
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mensagem.trim()) {
      onEnviar(mensagem);
      setMensagem('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Digite sua mensagem"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioMensagem;
