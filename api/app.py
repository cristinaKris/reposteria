from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# -------------------------------
# CONFIGURACIÓN DE POSTGRES
# -------------------------------
DB_NAME = os.getenv("POSTGRES_DB", "reposteria_db")
DB_USER = os.getenv("POSTGRES_USER", "postgres")
DB_PASS = os.getenv("POSTGRES_PASSWORD", "postgres")
DB_HOST = os.getenv("POSTGRES_HOST", "postgres_db")  # nombre del servicio en docker-compose
DB_PORT = os.getenv("POSTGRES_PORT", "5432")

app.config["SQLALCHEMY_DATABASE_URI"] = (
    f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

# -------------------------------
# ENDPOINTS DE PRUEBA
# -------------------------------
@app.route("/")
def index():
    return "Servicio Flask funcionando correctamente desde Docker"

@app.route("/api/health")
def health():
    return jsonify({"status": "ok", "message": "Flask conectado (intento)"}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
