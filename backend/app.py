from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)

CORS(app)

DATA_FILE = os.path.join(
    os.path.dirname(__file__),
    'data',
    'plants.json'
)

@app.route('/api/plants', methods=['GET'])
def get_plants():

    try:

        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            plants = json.load(f)

        return jsonify(plants)

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 500


@app.route('/')
def home():

    return jsonify({
        "message": "Bloomly Flask Backend Running 🌿"
    })


if __name__ == '__main__':

    app.run(
        debug=True,
        host='0.0.0.0',
        port=5000
    )