
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

mensagens = []

@app.route('/mensagens', methods=['GET', 'POST'])
def mensagens_route():
    if request.method == 'POST':
        data = request.get_json()
        mensagem = data.get('mensagem')
        if mensagem:
            mensagens.append(mensagem)
            return jsonify({'status': 'mensagem adicionada'}), 201
        return jsonify({'erro': 'mensagem vazia'}), 400
    return jsonify(mensagens)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
