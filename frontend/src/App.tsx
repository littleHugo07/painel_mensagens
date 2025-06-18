
import React from 'react';
import FormularioMensagem from './components/FormularioMensagem';
import ListaMensagens from './components/ListaMensagens';

const App = () => {
  const enviarMensagem = async (msg: string) => {
    await fetch(import.meta.env.VITE_API_URL + '/mensagens', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mensagem: msg })
    });
  };

  return (
    <div>
      <h1>Painel de Mensagens</h1>
      <FormularioMensagem onEnviar={enviarMensagem} />
      <ListaMensagens />
    </div>
  );
};

export default App;
