from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os # <-- Adicione esta linha

app = Flask(__name__)
CORS(app)

# Caminhos dos arquivos
CLUBS_FILE = 'data/clubs.json'
CADASTRO_FILE = 'data/cadastro.json'

def carregar_dados(file_path):
    try:
        with open(file_path, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return []
    except json.JSONDecodeError:
        return []

def salvar_dados(data, file_path):
    # Obtém o diretório do arquivo
    directory = os.path.dirname(file_path)
    
    # Se o diretório não existe, crie-o
    if not os.path.exists(directory):
        os.makedirs(directory)
        
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)

# Rotas para CLUBES
@app.route('/api/clubes', methods=['GET'])
def get_clubes():
    clubes = carregar_dados(CLUBS_FILE)
    return jsonify(clubes)

@app.route('/api/register-club', methods=['POST'])
def register_club():
    try:
        dados_club = request.get_json()
        clubes = carregar_dados(CLUBS_FILE)
        clubes.append(dados_club)
        salvar_dados(clubes, CLUBS_FILE)
        return jsonify({"message": "Clube cadastrado com sucesso!"}), 201
    except Exception as e:
        return jsonify({"message": "Erro ao cadastrar clube", "error": str(e)}), 400

# Rotas para CADASTRO
@app.route('/api/cadastro', methods=['GET'])
def get_cadastro():
    cadastro = carregar_dados(CADASTRO_FILE)
    return jsonify(cadastro)

@app.route('/api/register-cadastro', methods=['POST'])
def register_cadastro():
    if not request.is_json:
        return jsonify({"message": "O tipo de conteúdo deve ser application/json"}), 400
    
    try:
        dados_cadastro = request.get_json()
        
        # Verifica se os dados JSON não estão vazios
        if not dados_cadastro:
            return jsonify({"message": "Dados JSON ausentes no corpo da requisição"}), 400
        cadastro = carregar_dados(CADASTRO_FILE)
        cadastro.append(dados_cadastro)
        salvar_dados(cadastro, CADASTRO_FILE)
        return jsonify({"message": "Cadastro realizado com sucesso!"}), 201

    except Exception as e:
        return jsonify({"message": "Erro ao cadastrar", "error": str(e)}), 400

# Rota padrão para teste
@app.route('/')
def home():
    return "Backend do seu projeto está funcionando!"

if __name__ == '__main__':
    app.run(debug=True)