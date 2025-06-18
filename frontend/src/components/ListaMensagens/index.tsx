
import React, { useEffect, useState } from 'react';
import './style.css';

const ListaMensagens = () => {
  const [mensagens, setMensagens] = useState<string[]>([]);

  const fetchMensagens = async () => {
    const res = await fetch(import.meta.env.VITE_API_URL + '/mensagens');
    const data = await res.json();
    setMensagens(data);
  };

  useEffect(() => {
    fetchMensagens();
    const interval = setInterval(fetchMensagens, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ul>
      {mensagens.map((msg, index) => (
        <li key={index}>{msg}</li>
      ))}
    </ul>
  );
};

export default ListaMensagens;
