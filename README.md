# 📨 Painel de Mensagens

Um projeto simples de painel de mensagens com frontend em **React + Vite** e backend em **Flask**, feito para fins de aprendizado.

## 🔧 Tecnologias Utilizadas

- ⚛️ React (Vite)
- 🐍 Flask (Python)
- 📦 Node.js / npm
- 🌐 Fetch API
- 📁 `.env` para variáveis de ambiente

---

## 📁 Estrutura do Projeto

painel-mensagens/
├── backend/
│ ├── app.py
│ └── requirements.txt
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ └── App.tsx
│ ├── .env
│ └── package.json

---

## ⚙️ Como rodar o projeto localmente

### 🔹 Backend (Flask)
Crie e ative um ambiente virtual (Windows):
1. Abra o terminal e vá até a pasta `backend`:
   ```bash
   cd backend
python -m venv venv
.\venv\Scripts\activate
Instale as dependências:
pip install -r requirements.txt
# Rode o servidor:
python app.py
O backend vai rodar em: http://127.0.0.1:5000
# Frontend (React)
Em outro terminal, vá até a pasta frontend:
cd frontend

Instale as dependências:
npm install

Crie um arquivo .env e configure a URL da API:
VITE_API_URL=http://127.0.0.1:5000

Inicie o app:
npm run dev

O frontend vai abrir em: http://localhost:5173

💡 Funcionalidades
Envio de mensagens via formulário.

Lista atualizada de mensagens do backend.

Atualização automática a cada 5 segundos.
